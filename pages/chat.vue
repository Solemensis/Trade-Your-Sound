<script setup>
definePageMeta({
  middleware: ["auth"],
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();

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
  roomName.value = chatroom.room_name;

  // Listen to database message inserts
  supabase
    .channel("any")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "Messages" },
      async (payload) => {
        await fetchMessages(chatroom);
        messageBox.value.scrollTop = messageBox.value.scrollHeight;
      }
    )
    .subscribe();
}
const relatedRoomId = ref(null);
const roomName = ref("");

//post message to db via backend
const textMessage = ref("");
async function postMessage() {
  if (textMessage.value == "") {
    return;
  } else {
    const message = {
      content: textMessage.value,
      lister_id: user.value.id,
      room_id: relatedRoomId.value,
    };
    textMessage.value = "";

    const sendMessage = await $fetch("/api/chatroom/postMessage", {
      method: "post",
      body: message,
    });
  }
}

const messageBox = ref(null);
</script>

<template lang="">
  <div>
    <div v-if="chatRooms.length" class="container">
      <div class="left-part">
        <div
          @click="fetchMessages(chatroom)"
          v-for="chatroom in chatRooms"
          :key="chatroom.id"
          class="chatrooms"
        >
          <h2>
            {{ chatroom.room_name }}
          </h2>
        </div>
      </div>

      <div v-if="relatedRoomId" data-aos="fade-out">
        <div class="right-part">
          <h3 class="roomName">{{ roomName }}</h3>
          <div ref="messageBox" class="message-box">
            <div class="messages">
              <p
                v-for="message in messages"
                :key="message.id"
                :class="
                  user.id == message.lister_id ? 'myMessage' : 'itsMessage'
                "
              >
                {{ message.content }}
              </p>
            </div>
          </div>
          <div class="input-and-button">
            <input
              @keydown.enter="postMessage"
              class="text-input"
              v-model="textMessage"
              type="text"
            />
            <button class="hero-button send-button" @click="postMessage">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
    <h3 v-else>no chat rooms</h3>
  </div>
</template>

<style scoped>
.left-part {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-top: 5rem;
  height: 100vh;
  margin-left: 3rem;
  z-index: 1000;
}
.chatrooms {
  border: 2px solid green;
  padding: 0.5rem 1rem;
  max-width: 20rem;
}
.chatrooms h2 {
  font-weight: 500;
  font-size: 1.4rem;
}

.roomName {
  position: absolute;
  left: 50%;
  top: 17rem;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  color: #3fcf8e;
  font-size: 2.7rem;
}
.right-part {
  padding-top: 23rem;
  position: relative;
  width: 50%;
  margin-inline: auto;
  position: absolute;
  left: 57.5%;
  transform: translate(-50%);
}
.message-box {
  position: relative;
  height: 50vh;
  margin-inline: auto;
  font-size: 1.5rem;
  overflow-y: scroll;
}
.messages {
  height: 20rem;
}
.messages p {
  word-wrap: break-word;
  word-break: break-word;
  margin-bottom: 0.3rem;
}
.myMessage {
  color: #3f6fcf;
  text-align: end;
  padding-left: 55%;
  padding-right: 1.5rem;
}
.itsMessage {
  color: #a753bc;
  text-align: start;
  padding-right: 55%;
}
.input-and-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-inline: auto;
  margin-top: 2rem;
}
.send-button {
  padding: 0.5rem 1rem;
}
</style>
