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
  const { data, error } = await client.auth.signInWithOAuth({
    provider: "google",
  });

  if (data) {
    const user = useSupabaseUser();

    console.log(user.value.id);
  }
  if (error) {
    console.log(error);
  }
}
</script>

<template>
  <div>
    <h1>Login</h1>
  </div>
  <button @click="login">Login with Google</button>
</template>
