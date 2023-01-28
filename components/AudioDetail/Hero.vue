<script setup>
const props = defineProps({
  audio: Object,
});

const config = useRuntimeConfig();
</script>
<template>
  <div>
    <!-- <input type="audio"> -->
    <h1>{{ audio.name }}</h1>
    <div>
      <div>
        <p>{{ audio.category }}</p>
        <p>|</p>
        <p>{{ audio.channels }}</p>
      </div>
      <div>
        <p>${{ audio.price }}</p>
      </div>
    </div>
  </div>
</template>
