<script setup>
const props = defineProps({
  listing: Object,
});

const emits = defineEmits(["deleteClick"]);

// to get supabase image endpoint
const config = useRuntimeConfig();
</script>

<template>
  <div class="shadow rounded overflow-hidden flex justify-between mb-4">
    <div class="flex">
      <!-- <img
        class="w-80 mr-3 h-44"
        :src="`${config.public.supabase.url}/storage/v1/object/public/images/${listing.image}`"
        alt=""
      /> -->
      <audio controls>
        <source
          src="https://wjfywtvnvjbposklgxzj.supabase.co/storage/v1/object/public/audios/public/untitled.mp3"
          type="audio/mpeg"
        />
      </audio>
      <div class="p-3">
        <h1 class="text-2xl">{{ listing.name }}</h1>

        <p class="text-blue-400">${{ listing.price }}</p>
      </div>
    </div>
    <div class="p-3 flex">
      <NuxtLink
        class="text-blue-400 mr-4"
        :to="`/profile/listings/view/${listing.id}`"
        >View</NuxtLink
      >
      <p
        @click="emits('deleteClick', listing.id)"
        class="text-red-400 cursor-pointer"
      >
        Delete
      </p>
    </div>
  </div>
</template>
