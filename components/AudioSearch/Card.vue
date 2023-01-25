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
  <div
    class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
  >
    <img
      class="absolute w-7 right-5 top-2 z-20"
      :src="favored ? heartFilled : heartOutline"
      @click="favored = !favored"
    />

    <div
      class="flex h-full"
      @click="navigateTo(`/audio/${audio.name}-${audio.id}`)"
    >
      <audio controls>
        <source
          :src="`${config.public.supabase.url}/storage/v1/object/public/audios/${audio.audio}`"
          type="audio/mpeg"
        />
      </audio>

      <div class="p-4 flex flex-col">
        <div>
          <h1 class="text-2xl text-blue-700">{{ audio.name }}</h1>
          <p class="text-gray-700">
            {{ audio.description }}
          </p>
        </div>
        <h1 class="mt-auto text-xl">${{ audio.price }}</h1>
      </div>
    </div>
  </div>
</template>
