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
  <div class="flex flex-col w-[48%] mt-2">
    <label class="text-cyan-500 mb-1 text-sm">Pick a username</label>
    <input
      type="text"
      class="p-2 border w-100 rounded"
      placeholder="SoundMage31"
      v-model="username.user_name"
    />
    <button @click="onClick">accept</button>
  </div>
</template>
