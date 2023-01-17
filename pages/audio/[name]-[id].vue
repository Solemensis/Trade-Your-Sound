<script setup>
const route = useRoute();

const car = await useFetchCar(route.params.id);

useHead({
  title: route.params.name,
});

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with ID of ${route.params.id} does not exist`,
  });
}
</script>
<template>
  <div>
    <div
      v-if="car"
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <AudioDetailHero :car="car" />
      <AudioDetailAttributes :features="car.features" />
      <AudioDetailDescription :description="car.description" />
      <AudioDetailContact />
    </div>
  </div>
</template>
