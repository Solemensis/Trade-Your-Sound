<script setup>
const props = defineProps({
  audios: Array,
});
</script>
<template>
  <div class="container">
    <div class="cards">
      <AudioSearchCard v-for="audio in audios" :key="audio.id" :audio="audio" />
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
}
</style>
