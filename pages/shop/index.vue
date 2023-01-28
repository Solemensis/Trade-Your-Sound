<script setup>
const route = useRoute();

const category = computed(() => route.query.category);
const price = computed(() => route.query.price);
const processing = computed(() => route.query.processing);

const { data: audios, refresh } = await useFetch(`/api/audios`, {
  query: {
    category: category,
    price: price,
    processing: processing,
  },
});
watch(
  () => route.query,
  () => refresh()
);
</script>

<template>
  <div>
    <div>
      <AudioSearchSideBar />
      <AudioSearchCards v-if="audios && audios.length" :audios="audios" />
      <h2 v-else>No Audios Found With These Filters</h2>
    </div>
  </div>
</template>
