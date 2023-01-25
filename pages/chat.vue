<script setup>
definePageMeta({
  layout: "custom",
  middleware: ["auth"],
});

const user = useSupabaseUser();

//fetch chats according to logged user
const chatRooms = await $fetch("/api/chatroom/fetchChats", {
  method: "post",
  body: user.value.id,
});

//fetch messages according to selected chat

const messages = ref([]);
async function fetchMessages(chatroom) {
  messages.value = await $fetch("/api/chatroom/fetchMessages", {
    method: "post",
    body: chatroom.id,
  });
  relatedRoomId.value = chatroom.id;
}

//post message to db via backend
const textMessage = ref("");
const relatedRoomId = ref(null);
async function postMessage() {
  const message = {
    content: textMessage.value,
    lister_id: user.value.id,
    room_id: relatedRoomId.value,
  };
  const sendMessage = await $fetch("/api/chatroom/postMessage", {
    method: "post",
    body: message,
  });
  textMessage.value = "";

  // //instead of refetching the updated messages value,
  // //just updating ui by updating the array
  // messages.value.push(sendMessage);
}
</script>

<template lang="">
  <div>
    <div
      v-if="chatRooms.length"
      @click="fetchMessages(chatroom)"
      v-for="chatroom in chatRooms"
      :key="chatroom.id"
    >
      <h2>
        {{ chatroom.room_name }}
      </h2>
    </div>
    <h3 v-else>no chat rooms</h3>

    <div class="messageBox">
      <p
        v-for="message in messages"
        :key="message.id"
        :class="user.id == message.lister_id ? 'myMessage' : 'itsMessage'"
      >
        {{ message.content }}
      </p>
      <input
        style="border: black 1px solid"
        v-model="textMessage"
        type="text"
      />

      <button
        style="border: purple 2px solid; padding: 1rem; background-color: gray"
        @click="postMessage"
      >
        send
      </button>
    </div>
  </div>
</template>

<style scoped>
.myMessage {
  color: rgb(70, 255, 70);
}
.itsMessage {
  color: red;
}
</style>
