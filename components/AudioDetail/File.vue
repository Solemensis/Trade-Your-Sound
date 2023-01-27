<script setup>
const props = defineProps({
  audio: String,
});

const config = useRuntimeConfig();
</script>

<template>
  <div>
    <audio controls>
      <source
        :src="`${config.public.supabase.url}/storage/v1/object/public/audios/${audio}`"
        type="audio/mpeg"
      />
    </audio>
  </div>
</template>
