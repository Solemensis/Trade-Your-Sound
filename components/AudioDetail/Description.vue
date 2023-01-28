<script setup>
const props = defineProps({
  description: String,
});
</script>

<template>
  <div>
    <p>
      {{ description }}
    </p>
  </div>
</template>
