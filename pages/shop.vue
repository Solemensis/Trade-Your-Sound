<script setup>
definePageMeta({
  middleware: ["auth"],
});

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
    <AudioSearchSideBar />

    <div class="flex-box-center">
      <h2 class="scroll-audios">
        Scroll <span class="green-span">Audios</span>
      </h2>
      <AudioSearchCards v-if="audios && audios.length" :audios="audios" />
      <h2 style="color: #ff4545" v-else>No Audios Found With These Filters</h2>
    </div>
  </div>
</template>

<style scoped>
.flex-box-center {
  display: flex;
  justify-content: center;
  padding-top: 25rem;
  margin-left: 5rem;
  position: relative;
  z-index: -50;
}

.scroll-audios {
  position: absolute;
  left: 50%;
  top: 14rem;
  transform: translateX(-50%);
  font-weight: 500;
  font-size: 3.7rem;
  color: #bbb;
}
</style>
