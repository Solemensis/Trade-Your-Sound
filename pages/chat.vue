<script setup>
definePageMeta({
  middleware: ["auth"],
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();

//fetch chats according to logged user
const chatRooms = ref([]);
onMounted(async () => {
  setTimeout(async () => {
    const { data, error, refresh, pending } = await useFetch(
      "/api/chatroom/fetchChats",
      {
        method: "post",
        body: user.value.id,
      }
    );

    if (!pending.value) {
      loading.value = false;
    }

    if (!data.value && error.value) {
      error.value = null;
      refresh();
    }
    chatRooms.value = data.value;
  }, 1);
});

const loading = ref(true);

//fetch messages according to selected chat
const messages = ref();
async function fetchMessages(chatroom) {
  const { data } = await useFetch("/api/chatroom/fetchMessages", {
    method: "post",
    body: chatroom.id,
  });
  messages.value = data.value;
  relatedRoomId.value = chatroom.id;
  chat.value = chatroom;

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
const chat = ref({});

const userName = useState("userName");

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

function goToUser(user) {
  navigateTo(`/profile/${user}`);
}
function goToAudio() {
  navigateTo(chat.value.listing_path);
}
</script>

<template>
  <div>
    <div style="position: relative">
      <div v-if="!loading && chatRooms && chatRooms.length" class="container">
        <div class="left-part">
          <div
            @click="fetchMessages(chatroom)"
            v-for="chatroom in chatRooms"
            :key="chatroom.id"
            class="chatrooms"
          >
            <h3>
              {{ chatroom.room_name }}
            </h3>
            <img
              @click="deleteChatroom(chatroom)"
              src="@/assets/delete-but.svg"
              alt=""
            />
          </div>
        </div>
        <div v-if="relatedRoomId" data-aos="fade-out">
          <div class="right-part">
            <div class="heading-box">
              <p
                @click="
                  goToUser(
                    userName == chat.user1_nick
                      ? chat.user2_nick
                      : chat.user1_nick
                  )
                "
              >
                {{
                  userName == chat.user1_nick
                    ? chat.user2_nick
                    : chat.user1_nick
                }}
              </p>
              <h2
                v-if="chat.listing_path"
                @click="goToAudio"
                class="roomNameListing"
              >
                {{ chat.room_name }}
              </h2>
              <h2 v-else class="roomNameChat">
                {{ chat.room_name }}
              </h2>
              <p
                @click="
                  goToUser(
                    userName == chat.user1_nick
                      ? chat.user1_nick
                      : chat.user2_nick
                  )
                "
              >
                {{
                  userName == chat.user1_nick
                    ? chat.user1_nick
                    : chat.user2_nick
                }}
              </p>
            </div>
            <div ref="messageBox" class="message-box">
              <p
                v-for="message in messages"
                :class="
                  user.id == message.lister_id ? 'myMessage' : 'itsMessage'
                "
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
      <h3
        v-else-if="!loading && chatRooms && !chatRooms.length"
        class="errorMessage"
      >
        No chat rooms.
      </h3>
      <div v-else-if="loading" class="lds-dual-ring"></div>
    </div>
  </div>
</template>

<style scoped>
.left-part {
  position: absolute;
  display: flex;
  flex-direction: column;
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
.chatrooms h3 {
  font-weight: 500;
  font-size: 1.5rem;
  background-color: #30303087;
  border-radius: 1rem;
  padding: 1.4rem 1rem;
  max-width: 25rem;
  min-width: 12rem;
  text-align: center;
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
.chatrooms h3:hover {
  scale: 1.02;
  filter: brightness(1.3);
}

.heading-box {
  display: flex;
  justify-content: space-around;
  gap: 40%;
  align-items: center;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 18rem;
  transform: translateX(-50%);
  border-bottom: 2px #5d5d5d6a solid;
  padding-bottom: 0.3rem;
}
.heading-box h2 {
  text-align: center;
  color: #3fcf8e;
  font-size: 2.7rem;
  position: absolute;
  top: -5.5rem;
}
.roomNameListing {
  cursor: pointer;
  transition: 0.2s;
}
.roomNameListing:hover {
  transform: scale(1.03);
}

.heading-box p {
  color: #6e2bac;
  font-size: 1.5rem;
  font-weight: 500;
  transition: 0.1s;
  cursor: pointer;
}
.heading-box p:hover {
  transform: scale(1.05);
  color: blueviolet;
}
.right-part {
  padding-top: 24rem;
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
