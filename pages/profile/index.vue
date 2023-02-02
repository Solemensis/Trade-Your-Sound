<script setup>
definePageMeta({
  layout: "custom",
  middleware: ["specificuser"],
});
const user = useSupabaseUser();
const username = reactive({
  lister_id: user.value.id,
  user_name: "",
});
const onClick = async () => {
  //instead of creating an object in here to get rid of proxy object;
  //i'm just using "toRaw" built-in function of vue.js
  const body = toRaw(username);
  const response = await $fetch("/api/producerProfile/usernameEnter", {
    method: "post",
    body: body,
  });
  navigateTo(`/profile/${username.user_name}`);
};
</script>

<template>
  <div class="container">
    <label>Pick a username</label>
    <input type="text" placeholder="SoundMage31" v-model="username.user_name" />
    <button @click="onClick">accept</button>
  </div>
</template>

<style scoped>
.container {
  padding-top: 20rem;
}
</style>
