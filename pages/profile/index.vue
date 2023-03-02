<script setup>
definePageMeta({
  middleware: ["specificuser"],
});
const user = useSupabaseUser();

const errorMessage = ref("");
const termsAccepted = ref(false);

const username = reactive({
  lister_id: user.value.id,
  user_name: "",
  terms: termsAccepted.value,
  relatedLinks: [
    {
      relatedLink1: "",
      relatedLink2: "",
      relatedLink3: "",
      relatedLink1Desc: "",
      relatedLink2Desc: "",
      relatedLink3Desc: "",
    },
  ],
  description: "",
  showProfile: false,
  admin: false,
});

async function onClick() {
  //check if nickname is okay
  if (validateNickname(username.user_name) == false) {
    errorMessage.value = "Username contains non-English letters or characters.";
    return;
  } else {
    const { data, error } = await useFetch(
      "/api/producerProfile/usernameEnter",
      {
        method: "post",
        body: username,
      }
    );

    if (data.value) {
      navigateTo(`/profile/${username.user_name}`);
    } else if (error.value) {
      errorMessage.value = error.value.statusMessage;
      return;
    }
  }
}

function changeTerms() {
  username.terms = Boolean(termsAccepted.value);
}
</script>

<template>
  <div class="container">
    <h2 class="pick-username">
      <span style="color: #3fcf8e">Pick a</span> Username
    </h2>
    <div class="username">
      <input
        type="text"
        placeholder="SoundMage31"
        v-model="username.user_name"
      />
    </div>
    <div class="terms-button">
      <div class="terms">
        <label for=""
          >Do you accept our terms of concern?
          <span style="color: #3fcf8e">*</span></label
        >
        <input
          @change="changeTerms"
          v-model="termsAccepted"
          class="checkbox"
          type="checkbox"
        />
      </div>
      <button style="margin-bottom: 1rem" class="hero-button" @click="onClick">
        Initiate Profile
      </button>
      <p
        v-if="errorMessage"
        style="
          position: absolute;
          bottom: -6rem;
          width: 100%;
          text-align: center;
          font-size: 1.2rem;
          color: #aaa;
        "
      >
        <span style="color: #ff4545">Error:</span>
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.pick-username {
  font-size: 3.5rem;
  font-weight: 400;
  margin-bottom: 0.2rem;
  margin-bottom: 8rem;
  color: #ddd;
}
.container {
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  height: 100vh;
}
.checkbox {
  margin-right: 0;
}

.username {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.username label {
  font-size: 1.4rem;
}
.username input {
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  height: 3.5rem;
}
.terms {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}
.terms label {
  font-size: 1.4rem;
}
.checkbox {
  top: 0;
}
.terms-button {
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
