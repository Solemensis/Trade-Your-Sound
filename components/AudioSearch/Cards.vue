<script setup>
const props = defineProps({
  audios: Array,
});
</script>
<template>
  <div>
    <div class="cards">
      <AudioSearchCard v-for="audio in audios" :key="audio.id" :audio="audio" />
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
}

@media (orientation: portrait) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
