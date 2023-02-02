<script setup>
const props = defineProps({
  audio: String,
});

const config = useRuntimeConfig();
</script>

<template>
  <div class="box">
    <JukeBox
      :src="`${config.public.supabase.url}/storage/v1/object/public/audios/${audio}`"
    />
  </div>
</template>

<style scoped>
/* .box {
  border-right: 2px #8f3bb3b3 solid;
  border-left: 2px #8f3bb3b3 solid;
  border-radius: 1rem;
  padding: 3rem;
} */
.box {
  padding: 3rem 3rem;
  padding-right: 1.7rem;
  padding-bottom: 2.9rem;
  border: #545454 2px dashed;
  border-radius: 0.5rem;
}
</style>
