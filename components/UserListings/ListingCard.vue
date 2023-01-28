<script setup>
const props = defineProps({
  listing: Object,
});

const emits = defineEmits(["deleteClick"]);

// to get supabase audio endpoint
const config = useRuntimeConfig();
</script>

<template>
  <div>
    <div>
      <audio controls>
        <source
          :src="`${config.public.supabase.url}/storage/v1/object/public/audios/${listing.audio}`"
          type="audio/mpeg"
        />
      </audio>

      <div>
        <h1>{{ listing.name }}</h1>

        <p>${{ listing.price }}</p>
      </div>
    </div>
    <div>
      <NuxtLink :to="`/audio/${listing.name}-${listing.id}`">View</NuxtLink>
      <p @click="emits('deleteClick', listing.id)">Delete</p>
    </div>
  </div>
</template>
