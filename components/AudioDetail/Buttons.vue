<script setup>
const props = defineProps({
  audio: Object,
});

const route = useRoute();
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const chatRoom = reactive({
  room_name: ``,
  user1_id: null,
  user2_id: null,
  user1_deleted: {},
  user2_deleted: {},
  user1_nick: "",
  user2_nick: "",
  listing_path: "",
});

const errorMessage = ref("");
async function onSubmit() {
  //check if user filled his/her profile
  const response = await $fetch("/api/producerProfile/specificUser");

  if (!response || (response && response.description == false)) {
    errorMessage.value =
      "You need to fill your profile before sending messages.";
    return;
  }

  //populating the object with the already fetched audio
  chatRoom.room_name = `${props.audio.name} - $${props.audio.price}`;
  chatRoom.user1_id = user.value.id;
  chatRoom.user2_id = props.audio.lister_id;
  chatRoom.user1_deleted = { userId: user.value.id, deleted: false };
  chatRoom.user2_deleted = {
    userId: props.audio.lister_id,
    deleted: false,
  };
  chatRoom.user1_nick = response.user_name;
  chatRoom.user2_nick = props.audio.user_name;
  chatRoom.listing_path = route.path;

  try {
    //creating the body object from earlier populated object
    const body = {
      room_name: chatRoom.room_name,
      user1_id: chatRoom.user1_id,
      user2_id: chatRoom.user2_id,
      user1_deleted: chatRoom.user1_deleted,
      user2_deleted: chatRoom.user2_deleted,
      user1_nick: chatRoom.user1_nick,
      user2_nick: chatRoom.user2_nick,
      listing_path: chatRoom.listing_path,
    };

    if (chatRoom.user1_id == chatRoom.user2_id) {
      errorMessage.value = "You can't send message to yourself";
    } else {
      const response = await $fetch(`/api/chatroom/createChat`, {
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
async function deleteListing() {
  //delete listing from database via backend
  await $fetch(`/api/audio/listings/${props.audio.id}`, {
    method: "delete",
  });

  //after that, delete the remaining file associated to that row
  const { data, error } = await supabase.storage
    .from("audios")
    .remove([props.audio.audio]);

  //leave deleted listing's page
  navigateTo("/profile/listings");
}

const emit = defineEmits(["toggle-open"]);

function openEdit() {
  emit("toggle-open", true);
}
</script>

<template>
  <div style="text-align: center">
    <div v-if="user">
      <div style="position: relative" v-if="user.id != props.audio.lister_id">
        <button class="hero-button" @click="onSubmit">Send Message</button>

        <p
          v-if="errorMessage"
          style="
            color: orangered;
            position: absolute;
            bottom: -3.5rem;
            left: 50%;
            transform: translateX(-50%);
            font-size: 1.2rem;
          "
        >
          {{ errorMessage }}
        </p>
      </div>
      <div class="user-buttons" v-else>
        <button class="hero-button" @click="openEdit">Edit listing</button>

        <button class="delete-button" @click="deleteListing">
          Delete listing
        </button>
      </div>
    </div>
    <div v-else>
      <h3 class="no-user">You have to be a user to send a message.</h3>
    </div>
  </div>
</template>

<style scoped>
.no-user {
  color: #bb3232;
  font-size: 1.5rem;
}

.user-buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
</style>
