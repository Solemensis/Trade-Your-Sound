<script setup>
import { vIntersectionObserver } from "@vueuse/components";

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

//infinite scroll logic starts here
async function onIntersectionObserver([{ isIntersecting }]) {
  if (isIntersecting) {
    const { data: anan } = await useFetch(`/api/audios`, {
      query: {
        category: category,
        price: price,
        processing: processing,
      },
      method: "post",
      body: audios.value.length,
    });
    audios.value.push(...anan.value);
  }
}
</script>

<template>
  <div>
    <AudioSearchSideBar />

    <div class="flex-box-center">
      <h2 class="scroll-audios">
        Scroll <span class="green-span">Audios</span>
      </h2>
      <div v-if="audios && audios.length">
        <AudioSearchCards :audios="audios" />
        <div
          style="margin-top: 40rem; opacity: 0"
          v-intersection-observer="onIntersectionObserver"
        >
          Loading...
        </div>
      </div>
      <h2 style="color: #ff4545" v-else>No Audios Found With These Filters</h2>
    </div>
  </div>
</template>

<style scoped>
.flex-box-center {
  display: flex;
  justify-content: center;
  padding-top: 27rem;
  margin-left: 5rem;
  position: relative;
  width: 50%;
  margin-inline: auto;
  padding-left: 20rem;
}

.scroll-audios {
  position: absolute;
  left: 50%;
  top: 17rem;
  padding-left: 20rem;
  width: 96vw;
  text-align: center;
  transform: translateX(-50%);
  font-weight: 500;
  font-size: 3.7rem;
  color: #bbb;
}
</style>
