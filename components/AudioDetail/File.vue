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
.box {
  margin-top: 0.5rem;
  padding: 3rem 3rem;
  padding-right: 1.7rem;
  padding-bottom: 2.9rem;
  border-radius: 0.8rem;
  /* background-color: #232323; */
  background-color: #25252587;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
