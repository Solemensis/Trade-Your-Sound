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
    <img
      :src="favored ? heartFilled : heartOutline"
      @click="favored = !favored"
    />

    <div @click="navigateTo(`/audio/${audio.name}-${audio.id}`)">
      <audio controls>
        <source
          :src="`${config.public.supabase.url}/storage/v1/object/public/audios/${audio.audio}`"
          type="audio/mpeg"
        />
      </audio>

      <div>
        <div>
          <h1>{{ audio.name }}</h1>
          <p>
            {{ audio.description }}
          </p>
        </div>
        <h1>${{ audio.price }}</h1>
      </div>
    </div>
  </div>
</template>
