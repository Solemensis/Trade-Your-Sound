<script setup>
const props = defineProps({
  audios: Array,
});
</script>
<template>
  <div class="w-full">
    <AudioSearchCard v-for="audio in audios" :key="audio.id" :audio="audio" />
  </div>
</template>
