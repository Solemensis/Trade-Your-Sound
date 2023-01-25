<script setup>
const props = defineProps({
  audio: Object,
});

const user = useSupabaseUser();

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
</script>
<template>
  <div v-if="user" class="mt-10">
    <button
      v-if="user.id != props.audio.lister_id"
      @click="onSubmit"
      class="bg-blue-400 text-white px-10 py-3 rounded mt-4"
    >
      Send Message
    </button>
    <h3 v-else>Reminder: This is your listing.</h3>
  </div>
  <div v-else><h3>you need to be a user to message to lister.</h3></div>
</template>
