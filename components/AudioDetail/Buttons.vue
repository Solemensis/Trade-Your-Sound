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

async function onSubmit() {
  try {
    //populating the object with the already fetched audio
    chatRoom.room_name = `${props.audio.name} - $${props.audio.price}`;
    chatRoom.user1_id = user.value.id;
    chatRoom.user2_id = props.audio.lister_id;
  } catch (err) {
    console.log(err);
    return;
  }

  try {
    //creating the body object from earlier populated object
    const body = {
      // ...chatRoom.value,
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
    console.log(err);
    if (chatRoom.user1_id == chatRoom.user2_id) {
      console.log("you can't send message to yourself");
    } else {
      navigateTo("/chat");
    }
  }
}

//bu, sadece, 2 pencere (yani view-edit) arasını tetikleyen boolean (kuruluş yeri burası)
const listingEditToggle = useState("listingEditToggle", () => false);

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
</script>

<template>
  <div style="text-align: center">
    <div v-if="user">
      <button
        class="hero-button"
        v-if="user.id != props.audio.lister_id"
        @click="onSubmit"
      >
        Send Message
      </button>
      <div class="user-buttons" v-else>
        <button
          class="hero-button"
          @click="listingEditToggle = !listingEditToggle"
        >
          Edit listing
        </button>
        <button class="delete-button" @click="deleteListing">
          Delete listing
        </button>
      </div>
    </div>
    <div v-else>
      <h3 class="no-user">you need to be a user to message to lister.</h3>
    </div>
  </div>
</template>

<style scoped>
.no-user {
  color: brown;
  font-size: 1.5rem;
}

.user-buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
</style>
