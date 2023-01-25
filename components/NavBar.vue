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
    <header
      class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
    >
      <NuxtLink to="/" class="text-3xl font-mono">audio trader</NuxtLink>
      <div v-if="user" class="flex">
        <NuxtLink to="/chat" class="mr-5">chat</NuxtLink>
        <NuxtLink to="/profile/listings" class="mr-5">my listings</NuxtLink>
        <NuxtLink to="/profile/" class="mr-5">my profile</NuxtLink>
        <p @click="logout" class="cursor-pointer">Logout</p>
      </div>
      <NuxtLink v-else to="/login">Login</NuxtLink>
    </header>
  </div>
</template>
<style scoped>
header {
  background-color: rgb(54, 54, 54);
}
</style>
