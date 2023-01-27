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
  <div
    class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
  >
    <div class="mt-32 flex">
      <AudioSearchSideBar />
      <AudioSearchCards v-if="audios && audios.length" :audios="audios" />
      <h2 v-else>no audios</h2>
    </div>
    <!-- <h2 v-else class="text-red-600">No Audios Found With These Filters</h2> -->
  </div>
</template>
