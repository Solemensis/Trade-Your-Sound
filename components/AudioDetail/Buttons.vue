<script setup>
const props = defineProps({
  audio: Object,
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const chatRoom = useState("addRoom", () => {
  return {
    room_name: ``,
    user1_id: null,
    user2_id: null,
  };
});

const errorMessage = ref("");
async function onSubmit() {
  //check if user entered his/her username
  const response = await $fetch("/api/producerProfile/specificUser", {
    method: "post",
    body: { userId: user.value.id },
  });
  if (Boolean(response) == false) {
    errorMessage.value =
      "You need to fill your profile before sending messages.";
    return;
  }

  try {
    //populating the object with the already fetched audio
    chatRoom.room_name = `${props.audio.name} - $${props.audio.price}`;
    chatRoom.user1_id = user.value.id;
    chatRoom.user2_id = props.audio.lister_id;
  } catch (err) {
    // console.log(err);
  }

  try {
    //creating the body object from earlier populated object
    const body = {
      room_name: chatRoom.room_name,
      user1_id: chatRoom.user1_id,
      user2_id: chatRoom.user2_id,
    };

    if (chatRoom.user1_id == chatRoom.user2_id) {
      console.log("you can't send message to yourself");
    } else {
      const response = await $fetch(`/api/chatroom/createChat`, {
        method: "post",
        body: body,
      });
      navigateTo("/chat");
    }
  } catch (err) {
    // console.log(err);
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
            font-size: 1.3rem;
            position: absolute;
            left: 50%;
            top: 180%;
            transform: translate(-50%, -50%);
            width: 100%;
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
