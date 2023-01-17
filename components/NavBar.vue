<script setup>
const user = useSupabaseUser();
// const supabase = useSupabaseClient();
const client = useSupabaseAuthClient();

async function logout() {
  client.auth.signOut();

  // const { error } = supabase.auth.signOut();
  // try {
  //   await $fetch("/api/_supabase/session", {
  //     method: "POST",
  //     body: { event: "SIGNED_OUT", session: null },
  //   });
  // } catch (error) {
  //   return console.log(error);
  // }

  // user.value = null;
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
        <NuxtLink to="/profile/listings" class="mr-5">profile</NuxtLink>
        <p @click="logout" class="cursor-pointer">Logout</p>
      </div>
      <NuxtLink v-else to="/login">Login</NuxtLink>
    </header>
  </div>
</template>
