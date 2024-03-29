<script setup>
// definePageMeta({
//   middleware: ["auth"],
// });

const route = useRoute();
const user = useSupabaseUser();

const chatRoom = reactive({
  room_name: ``,
  user1_id: null,
  user2_id: null,
  user1_deleted: {},
  user2_deleted: {},
  user1_nick: "",
  user2_nick: "",
});

//fetch profile information of the logged user
const profile = ref({});
onMounted(async () => {
  setTimeout(async () => {
    const { data, error, refresh, pending } = await useFetch(
      `/api/producerProfile/${route.params.nickName}`
    );

    if (!data.value && error.value) {
      refresh();
    }
    profile.value = data.value;
  }, 1);
});

const profileEditToggle = ref(false);
const carryRefetchSignal = useState("carryRefetchSignal");

watch(
  () => carryRefetchSignal.value,
  async () => {
    const { data, error, refresh } = await useFetch(
      `/api/producerProfile/${route.params.nickName}`
    );
    if (!data.value && error.value) {
      error.value = null;
      refresh();
    }
    profile.value = data.value;
  }
);

async function sendMessage() {
  //check if user filled his/her profile
  const { data: specificUser } = await useFetch(
    "/api/producerProfile/specificUser"
  );
  if (
    !specificUser.value ||
    (specificUser.value && specificUser.value.description == false)
  ) {
    errorMessage.value =
      "You need to fill your profile before sending messages.";
    return;
  }

  //populating the object with the already fetched profile
  chatRoom.room_name = `${specificUser.value.user_name} - ${
    toRaw(profile.value).user_name
  }`;
  chatRoom.user1_id = user.value.id;
  chatRoom.user2_id = toRaw(profile.value).lister_id;
  chatRoom.user1_deleted = { userId: user.value.id, deleted: false };
  chatRoom.user2_deleted = {
    userId: toRaw(profile.value).lister_id,
    deleted: false,
  };
  chatRoom.user1_nick = profile.value.user_name;
  chatRoom.user2_nick = specificUser.value.user_name;

  try {
    const body = toRaw(chatRoom);

    if (chatRoom.user1_id == chatRoom.user2_id) {
      errorMessage.value = "You can't send message to yourself";
    } else {
      await useFetch(`/api/chatroom/createChat`, {
        method: "post",
        body: body,
      });
      navigateTo("/chat");
    }
  } catch (err) {
    //belli ki bu oda daha önce kurulmuş. Direkt chat'e yönlenelim.
    navigateTo("/chat");
  }
}

const errorMessage = ref("");
</script>

<template>
  <div class="container">
    <div v-if="profile && profile.user_name">
      <div class="profile-of">
        <h2 v-if="!profileEditToggle">
          Profile of <span style="color: #3fcf8e">{{ profile.user_name }}</span>
        </h2>
        <h2
          data-aos="fade-in"
          data-aos-offset="-2000"
          data-aos-duration="1500"
          v-else
          class="edit-heading"
        >
          You're editing <span style="color: #3fcf8e">your profile</span>
        </h2>
        <div v-if="!profileEditToggle">
          <p class="update">
            updated: {{ cutString(String(profile.updated_at)) }}
          </p>
          <p v-if="profile.LFopportunity" class="opportunity">
            <span style="font-size: 1.8rem">🔥</span> This user is currently
            <span style="color: #3fcf8e">open</span> to opportunities.
            <span style="font-size: 1.8rem">🔥</span>
          </p>
        </div>
      </div>

      <div v-if="!profileEditToggle">
        <article v-if="profile.description" class="description">
          <span style="color: #3fcf8e">"&nbsp;</span>{{ profile.description
          }}<span style="color: #3fcf8e">&nbsp;"</span>
        </article>

        <div class="user-data">
          <div class="category-equipment">
            <div>
              <h3>Categories</h3>
              <div class="categories">
                <ul v-if="profile.categories && profile.categories.length">
                  <li v-for="category in profile.categories">
                    ✔️ {{ formatString(category) }}
                  </li>
                </ul>
                <ul v-else>
                  <li>...</li>
                  <li>...</li>
                  <li>...</li>
                </ul>
              </div>
            </div>
            <div>
              <h3>Equipment</h3>
              <div class="items">
                <ul v-if="profile.equipment && profile.equipment.length">
                  <li v-for="item in profile.equipment">✔️ {{ item }}</li>
                </ul>
                <ul v-else>
                  <li>...</li>
                  <li>...</li>
                  <li>...</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="projects">
            <h3>Projects</h3>
            <div
              v-if="profile.relatedLinks && profile.relatedLinks.length"
              class="links"
            >
              <a
                v-if="profile.relatedLinks[0].relatedLink1Desc"
                target="_blank"
                :href="addHttpsIfNeeded(profile.relatedLinks[0].relatedLink1)"
              >
                ✔️ {{ profile.relatedLinks[0].relatedLink1Desc }}</a
              >
              <a
                v-if="profile.relatedLinks[0].relatedLink2Desc"
                target="_blank"
                :href="addHttpsIfNeeded(profile.relatedLinks[0].relatedLink2)"
                >✔️ {{ profile.relatedLinks[0].relatedLink2Desc }}</a
              >
              <a
                v-if="profile.relatedLinks[0].relatedLink3Desc"
                target="_blank"
                :href="addHttpsIfNeeded(profile.relatedLinks[0].relatedLink3)"
                >✔️ {{ profile.relatedLinks[0].relatedLink3Desc }}</a
              >
            </div>
          </div>
        </div>

        <div class="buttons">
          <div
            v-if="!profileEditToggle && user && user.id === profile.lister_id"
          >
            <button
              class="hero-button"
              @click="profileEditToggle = !profileEditToggle"
            >
              Edit page
            </button>
          </div>
          <button
            @click="sendMessage"
            class="hero-button"
            v-if="user && user.id !== profile.lister_id"
          >
            Send message
          </button>
          <p v-if="errorMessage" class="errorMessage">
            {{ errorMessage }}
          </p>
          <h2 class="no-user" v-if="!user">
            You have to be a user to send a message.
          </h2>
        </div>
      </div>
      <div v-if="profileEditToggle">
        <EditModesProfileEditMode
          :data="profile"
          @toggle-close="(response) => (profileEditToggle = response)"
        />
      </div>
    </div>
    <div class="lds-dual-ring" v-else></div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  max-width: 55%;
  margin-inline: auto;
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.update {
  margin-bottom: 1.3rem;
}
.opportunity {
  font-size: 1.3rem !important;
}
.description {
  font-size: 1.6rem;
  line-height: 1.3;
  margin-bottom: 4rem;
  color: #aaa;
  word-wrap: break-word;
  word-break: break-word;
}
.user-data {
  display: flex;
  gap: 2rem;
  font-size: 1.3rem;
  justify-content: space-between;
  margin-bottom: 4rem;
}
.category-equipment {
  display: flex;
  gap: 10rem;
}
.user-data h3 {
  margin-bottom: 0.8rem;
  font-size: 1.7rem;
  font-weight: 400;
  text-align: start;
  color: #ddd;
}
.user-data ul {
  text-align: center;
  list-style: none;
  margin-bottom: 2rem;
}
.user-data ul li {
  color: #989898;
  text-align: start;
}
.links {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.links a {
  text-align: start;
  transition: 0.1s;
  color: #989898;
}
.links a:hover {
  color: #3fcf8e;
}

.profile-of {
  text-align: center;
  margin-bottom: 6rem;
}
.profile-of h2 {
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 0.2rem;
}
.profile-of p {
  font-size: 1.2rem;
  color: #989898;
}

.no-user {
  color: #bb3232;
}

.errorMessage {
  color: orangered;
  position: absolute;
  bottom: -3.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
}

@media (orientation: portrait) {
  .container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -45%);
    text-align: center;
    width: 90%;
  }
  .category-equipment {
    gap: 2rem;
  }
  .edit-heading {
    margin-top: 55rem;
    margin-bottom: 8rem;
    font-size: 4rem;
  }
}
</style>
