<script setup>
const props = defineProps({
  audio: Object,
});
const config = useRuntimeConfig();
</script>

<template>
  <div>
    <audio controls>
      <source
        :src="`${config.public.supabase.url}/storage/v1/object/public/audios/${audio.audio}`"
        type="audio/mpeg"
      />
    </audio>
  </div>
</template>
