<script setup>
const route = useRoute();

const category = computed(() => route.query.category);
const LFopportunity = computed(() => route.query.opportunity);
const updated = computed(() => route.query.updated);

const profiles = ref([]);
onMounted(async () => {
  // setTimeout dışında çalışmıyor, setTimeout'suz birtek $fetch çalışıyor onMounted içinde.
  setTimeout(async () => {
    const { data, error, refresh, pending } = await useFetch(
      "/api/producerProfile/getProfiles",
      {
        query: {
          category: category.value,
          opportunity: LFopportunity.value,
          updated: updated.value,
        },
      }
    );

    if (!pending.value) {
      loading.value = false;
    }

    if (!data.value && error.value) {
      error.value = null;
      refresh();
    }
    profiles.value = data.value;
  }, 1);
});

const loading = ref(true);

watch(
  () => route.query,
  async () => {
    const { data, error, refresh } = await useFetch(
      "/api/producerProfile/getProfiles",
      {
        query: {
          category: category.value,
          opportunity: LFopportunity.value,
          updated: updated.value,
        },
      }
    );
    if (!data.value && error.value) {
      error.value = null;
      refresh();
    }

    profiles.value = data.value;
  }
);
</script>

<template>
  <div style="position: relative" class="cards">
    <h2 class="find-producer">
      Find <span class="green-span">Producers</span>
    </h2>

    <div
      v-if="!loading && profiles && profiles.length"
      class="flex-box"
      v-for="profile in profiles"
      :key="profile.id"
    >
      <FindProducerCard :profile="profile" />
    </div>

    <h2
      style="color: #ff4545; grid-column-start: span 2"
      v-else-if="!loading && profiles && !profiles.length"
    >
      No Producer Found With These Filters
    </h2>
    <div
      v-else-if="loading"
      class="lds-dual-ring"
      style="padding-left: 20rem; top: 20%"
    ></div>
  </div>
</template>

<style scoped>
.find-producer {
  position: absolute;
  width: 70vw;
  text-align: center;
  left: 50%;
  top: -10rem;
  transform: translateX(-50%);
  font-weight: 500;
  font-size: 3.7rem;
  color: #bbb;
  padding-left: 20rem;
}
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  padding-left: 20rem;
}

@media (orientation: portrait) {
  .find-producer {
    padding-left: 0;
    left: 42%;
    width: 70vw;
  }
  .cards {
    grid-template-columns: 1fr;
    padding-left: 10rem;
  }
}
</style>
