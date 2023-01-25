<script setup>
const props = defineProps({
  audio: Object,
});

const config = useRuntimeConfig();
</script>
<template>
  <div class="mt-10">
    <!-- <input type="audio"> -->
    <h1 class="mt-10 text-4xl">{{ audio.name }}</h1>
    <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
      <div class="flex">
        <p class="mr-2">{{ audio.category }}</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ audio.channels }}</p>
      </div>
      <div>
        <p class="font-bold text-2xl">${{ audio.price }}</p>
      </div>
    </div>
  </div>
</template>
