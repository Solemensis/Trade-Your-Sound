<script setup>
import heartFilled from "@/assets/heartFilled.png";
import heartOutline from "@/assets/heartOutline.png";
const props = defineProps({ audio: Object });

const favored = useState(`favored-${props.audio.id}`, () => {
  return false;
});

const config = useRuntimeConfig();
</script>
<template>
  <div>
    <div class="card" @click="navigateTo(`/audio/${audio.name}-${audio.id}`)">
      <!-- <img
        :src="favored ? heartFilled : heartOutline"
        @click="favored = !favored"
      /> -->
      <input type="text" />
      <audio class="listing-audio" controls>
        <source
          :src="`${config.public.supabase.url}/storage/v1/object/public/audios/${audio.audio}`"
          type="audio/mpeg"
        />
      </audio>

      <div>
        <h1 class="listing-name">{{ audio.name }}</h1>
        <h1 class="listing-price">${{ audio.price }}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .card {
}
.listing-name {
}
.listing-audio {
}
.listing-price {
} */
</style>
