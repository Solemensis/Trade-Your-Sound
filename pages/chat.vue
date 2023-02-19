<script setup>
definePageMeta({
  middleware: ["auth"],
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();

//fetch chats according to logged user
const chatRooms = ref([]);
onMounted(async () => {
  chatRooms.value = await $fetch("/api/chatroom/fetchChats", {
    method: "post",
    body: user.value.id,
  });
});

//fetch messages according to selected chat
const messages = ref();
async function fetchMessages(chatroom) {
  const { data } = await useFetch("/api/chatroom/fetchMessages", {
    method: "post",
    body: chatroom.id,
  });
  messages.value = data.value;
  relatedRoomId.value = chatroom.id;
  roomName.value = chatroom.room_name;

  // //if there is a message...
  // if (messages.value && messages.value.length) {
  //   //if last message of the chat isn't seen...
  //   if (toRaw(messages.value[messages.value.length - 1].read) == false) {
  //     //then, let all the messages be seen of the current chat
  //     const seenMessages = await $fetch("/api/chatroom/seeMessages", {
  //       method: "put",
  //       body: { chatroom: chatroom.id, userId: user.value.id },
  //     });
  //   }
  // }

  setTimeout(() => {
    if (
      messageBox &&
      messageBox.value != null &&
      messageBox.value.scrollHeight
    ) {
      messageBox.value.scrollTop = messageBox.value.scrollHeight;
    }
  }, 1);

  // Listen to database message inserts
  supabase
    .channel("any")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "Messages" },
      async (payload) => {
        await fetchMessages(chatroom);
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

async function deleteChatroom(chatroom) {
  //delete it from database
  const { data } = await useFetch("/api/chatroom/deleteChat", {
    method: "delete",
    body: { roomId: chatroom.id, userId: user.value.id },
  });

  //delete it from user interface
  chatRooms.value = chatRooms.value.filter((chat) => chat.id != chatroom.id);
}
</script>

<template>
  <div>
    <div v-if="chatRooms && chatRooms.length" class="container">
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

          <img
            @click="deleteChatroom(chatroom)"
            src="@/assets/delete-but.svg"
            alt=""
          />
        </div>
      </div>
      <div v-if="relatedRoomId" data-aos="fade-out">
        <div class="right-part">
          <h3 class="roomName">{{ roomName }}</h3>
          <div ref="messageBox" class="message-box">
            <p
              v-for="message in messages"
              :class="user.id == message.lister_id ? 'myMessage' : 'itsMessage'"
              :key="message.id"
            >
              {{ message.content }}
              <span>{{ extractTime(message.created_at) }}</span>
            </p>
          </div>
          <div class="input-and-button">
            <input
              @keydown.enter="postMessage"
              class="text-input"
              v-model="textMessage"
              type="text"
              placeholder="hi, i like your work! do you wanna collab for a project?"
            />
            <button class="hero-button send-button" @click="postMessage">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
    <h3 v-else class="errorMessage">No chat rooms.</h3>
  </div>
</template>

<style scoped>
.left-part {
  position: absolute;
  display: flex;
  height: 100vh;
  justify-content: center;
  gap: 1rem;
  padding-top: 5rem;
  margin-left: 3rem;
  z-index: 1000;
}

.chatrooms {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: center;
}
.chatrooms h2 {
  font-weight: 500;
  font-size: 1.4rem;
  background-color: #30303087;
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  max-width: 25rem;
  transition: 0.2s;
  cursor: pointer;
}
.chatrooms img {
  z-index: 1000;
  width: 3rem;
  cursor: pointer;
  transition: 0.2s;
  padding: 1.3rem 0.5rem;
  border-radius: 1rem;
  background-color: #30303087;
}
.chatrooms img:hover,
.chatrooms h2:hover {
  scale: 1.07;
  filter: brightness(1.3);
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
  border-bottom: 2px #5d5d5d6a solid;
  padding-bottom: 0.2rem;
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
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.myMessage {
  margin-right: 1rem;
  align-self: flex-end;
  background-color: #51d56955;
}
.itsMessage {
  align-self: flex-start;
  background-color: #80808033;
}

.message-box p {
  word-wrap: break-word;
  word-break: break-word;
  margin-bottom: 0.2rem;
  border-radius: 0.6rem;
  color: #ddd;
  padding: 0.3rem 1rem;
  font-size: 1.4rem;
  max-width: 40%;
}

.message-box p span {
  color: #999;
  font-size: 0.9rem;
  margin-left: 0.3rem;
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

.errorMessage {
  font-size: 2rem;
  color: orangered;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
