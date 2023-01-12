<script setup>
// const { cars } = useCars();
const props = defineProps({
  cars: Array,
});
</script>
<template>
  <div class="w-full">
    <CarCard v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>
