<script setup>
const route = useRoute();
const user = useSupabaseUser();

//fetch profile information of the logged user
const { data, refresh, error } = await useFetch(
  `/api/producerProfile/${route.params.nickName}`
);

const profileEditToggle = useState("profileEditToggle", () => false);

const carryRefetchSignal = useState("carryRefetchSignal");
watch(
  () => carryRefetchSignal.value,
  () => {
    refresh();
  }
);
</script>

<template>
  <div class="container">
    <div class="profile-of">
      <h2 v-if="!profileEditToggle">
        Profile of <span style="color: #3fcf8e">{{ data.user_name }}</span>
      </h2>
      <h2 v-else>
        You're editing <span style="color: #3fcf8e">your profile</span>
      </h2>
      <div v-if="!profileEditToggle">
        <p class="update">updated: {{ cutString(data.updated_at) }}</p>
        <p class="opportunity">
          <span style="font-size: 2rem">🔥</span> This user is currently
          <span style="color: #3fcf8e">open</span> to opportunities.
          <span style="font-size: 2rem">🔥</span>
        </p>
      </div>
    </div>

    <div v-if="!profileEditToggle">
      <p class="description">
        <span style="color: #3fcf8e">" </span>{{ data.description
        }}<span style="color: #3fcf8e"> "</span>
      </p>
      <div class="user-data">
        <div class="category-equipment">
          <div>
            <h3>Categories</h3>
            <div class="categories">
              <ul>
                <li v-for="category in data.categories">✔️ {{ category }}</li>
              </ul>
            </div>
          </div>
          <div>
            <h3>Equipment</h3>
            <div class="items">
              <ul>
                <li v-for="item in data.equipment">✔️ {{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="projects">
          <h3>Projects</h3>
          <div class="links">
            <a
              v-if="data.related_link1_desc"
              target="_blank"
              :href="data.related_link1"
              >✔️ {{ data.related_link1_desc }}</a
            >
            <a
              v-if="data.related_link2_desc"
              target="_blank"
              :href="data.related_link2"
              >✔️ {{ data.related_link2_desc }}</a
            >
            <a
              v-if="data.related_link3_desc"
              target="_blank"
              :href="data.related_link3"
              >✔️ {{ data.related_link3_desc }}</a
            >
          </div>
        </div>
      </div>

      <div class="buttons">
        <div v-if="!profileEditToggle && user && user.id === data.lister_id">
          <button
            class="hero-button"
            @click="profileEditToggle = !profileEditToggle"
          >
            Edit page
          </button>
          <button class="hero-button" v-if="user && user.id !== data.lister_id">
            Send message
          </button>
        </div>
        <h2 class="no-user" v-if="!user">
          You have to be a user to send a message.
        </h2>
      </div>
    </div>
    <div v-else>
      <EditModesProfileEditMode :data="data" />
    </div>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -45%);
  text-align: center;
}
.update {
  margin-bottom: 1.3rem;
}
.opportunity {
  font-size: 1.4rem !important;
}
.description {
  font-size: 1.7rem;
  margin-bottom: 3rem;
  color: #bbb;
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
  font-size: 1.6rem;
  font-weight: 500;
  text-align: start;
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
  color: #ff4545;
}
</style>
