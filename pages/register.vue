<script setup>
definePageMeta({
  middleware: ["no-auth"],
});

const client = useSupabaseAuthClient();

const email = ref("");
const password = ref("");

async function signup() {
  const { data, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
  });
  if (!error) {
    navigateTo("/");
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
      Register to <span class="green-span">Sound Trader</span>
    </h2>

    <div class="auth">
      <div class="inputs">
        <input v-model="email" placeholder="e-mail" type="text" />
        <input v-model="password" placeholder="password" type="password" />
      </div>
      <div class="buttons">
        <button class="hero-button" @click="signup">Register</button>
        <p v-if="errorMessage">{{ errorMessage.message }}</p>
      </div>
    </div>
    <p
      style="
        text-align: center;
        margin-top: 6rem;
        font-size: 1.4rem;
        color: #aaa;
      "
    >
      Got an account? Login from
      <NuxtLink
        class="green-span"
        style="border-bottom: 1px solid #3fcf8e"
        to="/login"
        >here</NuxtLink
      >
    </p>
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
