<script setup>
const user = useSupabaseUser();
const client = useSupabaseAuthClient();

async function logout() {
  client.auth.signOut();
  navigateTo("/");
}
</script>

<template>
  <div>
    <header>
      <div class="nav-link-container" v-if="user">
        <div class="logo"><NuxtLink to="/">audio trader</NuxtLink></div>

        <NuxtLink to="/shop">shop</NuxtLink>
        <NuxtLink to="/find-producer/">producer profiles</NuxtLink>
        <NuxtLink to="/chat">chat</NuxtLink>
        <NuxtLink to="/profile/listings">my listings</NuxtLink>
        <NuxtLink to="/profile/">my profile</NuxtLink>
        <p @click="logout">Logout</p>
      </div>
      <div class="nav-link-container" v-else>
        <NuxtLink to="/shop">shop</NuxtLink>
        <NuxtLink to="/find-producer/">producer profiles</NuxtLink>
        <NuxtLink to="/login">Login</NuxtLink>
      </div>
    </header>
  </div>
</template>
<style scoped>
header {
  background-color: #1c1c1c;
  border-bottom: #262626 1px solid;
  height: 6rem;
}
.nav-link-container {
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  background-color: gray;
}
</style>
