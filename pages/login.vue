<script setup>
definePageMeta({
  layout: "custom",
});

// const supabase = useSupabaseClient();
const client = useSupabaseAuthClient();

async function login() {
  //   const { error } = supabase.auth.signInWithOAuth({
  //     provider: "google",
  //   });
  const { error } = await client.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.log(error);
  }
}
</script>

<template>
  <div class="mt-10">
    <h1 class="text-5xl font-bold md-7">Login</h1>
  </div>
  <button @click="login" class="bg-red-400 p-3 rounded text-white font-bold">
    Login with Google
  </button>
</template>
