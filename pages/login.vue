<script setup>
const client = useSupabaseAuthClient();

//oauth
async function oauthLogin(provider) {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: provider,
  });
}

//auth
const email = ref("");
const password = ref("");

async function login() {
  const { data, error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (!error) {
    !navigateTo("/");
  }
  if (error) {
    errorMessage.value = error;
    clearError();
  }
}

const errorMessage = ref("");
function clearError() {
  setTimeout(() => {
    errorMessage.value = "";
  }, 4000);
}
</script>

<template>
  <div class="container">
    <h2 style="font-weight: 400; color: #ddd; font-size: 3rem">
      Login to <span class="green-span">Sound Trader</span>
    </h2>

    <div class="auth">
      <div class="inputs">
        <input v-model="email" placeholder="e-mail" type="text" />
        <input v-model="password" placeholder="password" type="password" />
      </div>
      <div class="buttons">
        <button class="hero-button" @click="login">Login</button>
        <p v-if="errorMessage">{{ errorMessage.message }}</p>
      </div>
    </div>

    <div class="oauth">
      <p>
        Have no account? Register from
        <NuxtLink class="green-span" to="/register">here</NuxtLink> or sign in
        using 3rd party auth:
      </p>

      <button class="google" @click="oauthLogin('google')">
        <img src="@/assets/google-ico.svg" alt="" /><span
          >Sign in with Google</span
        >
      </button>
      <button class="discord" @click="oauthLogin('discord')">
        <img src="@/assets/dc-ico.svg" alt="" /><span
          >Sign in with Discord</span
        >
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -38%);
}
h2 {
  margin-bottom: 4rem;
  text-align: center;
}
.oauth {
  margin-bottom: 2rem;
  display: flex;
  margin-top: 10rem;
  gap: 1rem;
  align-items: center;
  position: relative;
}
.oauth p {
  position: absolute;
  top: -4rem;
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
  color: #aaa;
}
.google {
  width: 22rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border: none;
  border-radius: 0.2rem;
  background-color: #333333;
  transition: 0.2s;
}
.google:hover {
  transform: translateY(-3%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.google span {
  color: #bbb;
  font-weight: 500;
}
.google img {
  width: 2.3rem;
}
.discord {
  width: 22rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border: none;
  background-color: #333333;
  border-radius: 0.2rem;
  transition: 0.2s;
}
.discord:hover {
  transform: translateY(-3%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.discord span {
  color: #bbb;
  font-weight: 500;
}
.discord img {
  width: 2.3rem;
}

input {
  width: 20rem;
}
.inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 2rem;
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  position: relative;
}
.buttons p {
  position: absolute;
  bottom: -2.5rem;
  font-size: 1.2rem;
  color: orangered;
}
.buttons button {
  padding: 1rem 1.5rem;
}
</style>
