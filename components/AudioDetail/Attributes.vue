<script setup>
const props = defineProps({
  features: Array,
});
</script>

<template>
  <div>
    <div v-for="feature in features" :key="feature">
      <p>✔</p>
      <p>{{ feature }}</p>
    </div>
  </div>
</template>
