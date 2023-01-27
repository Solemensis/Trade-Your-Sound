<script setup>
const route = useRoute();
useHead({
  title: `${
    route.params.category ? "Category: " + route.params.category : "Audios"
  }`,
});

const price = computed(() => route.query.price);

const { data: audios, refresh } = await useFetchAudios(route.params.category, {
  price: price,
  processing: "editedd",
});
watch(
  () => route.query,
  () => refresh()
);
</script>

<template>
  <div>
    <div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <div class="mt-32 flex">
        <NuxtErrorBoundary>
          <AudioSearchSideBar />

          <div>
            <AudioSearchCards v-if="audios.length" :audios="audios" />
            <h1 v-else class="text-red-600">
              No Audios Found With These Filters
            </h1>
          </div>

          <template #error="{ error }">
            <div class="text-center mx-auto flex flex-col">
              <h1 class="text-5xl text-red-600 mb-4">
                Sorry, something went wrong
              </h1>
              <code>{{ error }}</code>
              <button
                @click="error.value = null"
                class="text-white bg-blue-400 px-10 py-3 rounded mt-4"
              >
                Go Back
              </button>
            </div>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>
