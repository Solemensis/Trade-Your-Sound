<script setup>
const props = defineProps({
  audios: Array,
});
</script>
<template>
  <div>
    <AudioSearchCard v-for="audio in audios" :key="audio.id" :audio="audio" />
  </div>
</template>
