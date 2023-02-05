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

//edit penceresinde database'deki datanın güncellenmesinin ardından, orada dönen
//boolean sinyaline burada erişilmesi, ve datanın burda yeniden fetch edilmesi için:
const listingEditRefetchSignal = useState("listingEditRefetchSignal");

watch(
  () => listingEditRefetchSignal.value,
  () => {
    refresh();

    //audio dosyasının da yeni fetch'i algılamasını sağlamak için,
    //componenti dom'dan silip hemen geri kurmaya dair bi trick
    reRenderComponent.value = !reRenderComponent.value;
    setTimeout(() => {
      reRenderComponent.value = !reRenderComponent.value;
    }, 300);
  }
);

//hemen false ve ardından true dönüp audioyu re-render'layan boolean
const reRenderComponent = ref(true);

const listingEditToggle = ref(false);
</script>
<template>
  <div class="container">
    <div v-if="audio">
      <div v-if="!listingEditToggle">
        <AudioDetailHero style="" :audio="audio" />
        <AudioDetailButtons
          :audio="audio"
          @toggle-open="(response) => (listingEditToggle = response)"
        />
      </div>
      <div v-else>
        <EditModesListingEditMode
          :audio="audio"
          @toggle-close="(response) => (listingEditToggle = response)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -48%);
  width: 55%;
}
</style>
