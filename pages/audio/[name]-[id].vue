<script setup>
const route = useRoute();

useHead({
  title: route.params.name,
});

const audio = await useFetchAudio(route.params.id);

if (!audio.value) {
  throw createError({
    statusCode: 404,
    message: `Audio with ID of ${route.params.id} does not exist`,
  });
}
</script>
<template>
  <div>
    <div
      v-if="audio"
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <AudioDetailHero :audio="audio" />
      <AudioDetailAttributes :features="audio.features" />
      <AudioDetailDescription :description="audio.description" />
      <AudioDetailContactButton :audio="audio" />
      <AudioDetailFile :audio="audio" />
    </div>
  </div>
</template>
