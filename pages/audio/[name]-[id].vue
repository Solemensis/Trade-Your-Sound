<script setup>
const route = useRoute();

useHead({
  title: route.params.name,
});

//it's just usefetchaudio composable with refresh added
const {
  data: audio,
  refresh,
  error,
} = await useFetch(`/api/audio/${route.params.id}`);

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.statusMessage,
  });
}

const listingEditRefetchSignal = useState("listingEditRefetchSignal");

watch(
  () => listingEditRefetchSignal.value,
  () => {
    refresh();

    //audio dosyasının da refreshlenmesi için, componenti dom'dan silip hemen
    //geri kurmaya dair bi trick
    reRenderComponent.value = !reRenderComponent.value;
    setTimeout(() => {
      reRenderComponent.value = !reRenderComponent.value;
    }, 300);
  }
);

const listingEditToggle = useState("listingEditToggle", () => false);

const reRenderComponent = ref(true);
</script>
<template>
  <div>
    <div v-if="audio">
      <div
        v-if="!listingEditToggle"
        class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
      >
        <AudioDetailHero :audio="audio" />
        <AudioDetailAttributes :features="audio.features" />
        <AudioDetailDescription :description="audio.description" />
        <AudioDetailContactButton :audio="audio" />
        <AudioDetailFile :audio="audio.audio" v-if="reRenderComponent" />
        <div
          @click="listingEditToggle = !listingEditToggle"
          style="display: flex; justify-content: center; width: 100%"
        >
          <button
            style="
              border: 2px pink solid;
              background-color: gray;
              padding: 1rem;
            "
          >
            Edit listing
          </button>
        </div>
      </div>
      <div v-else>
        <EditModesListingEditMode :audio="audio" />
      </div>
    </div>
  </div>
</template>
