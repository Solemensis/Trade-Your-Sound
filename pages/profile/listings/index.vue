<script setup>
definePageMeta({
  layout: "custom",
  middleware: ["auth"],
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const { data: listings } = await useFetch(
  `/api/audio/listings/user/${user.value.id}`
);

async function handleDelete(id) {
  //catch the audio file location before it's deleted
  const audio = await useFetchAudio(id);

  //now delete it from database via backend
  await $fetch(`/api/audio/listings/${id}`, {
    method: "delete",
  });

  //delete it from user interface
  listings.value = listings.value.filter((listing) => listing.id !== id);

  //now delete the remaining file associated to that row lastly
  const { data, error } = await supabase.storage
    .from("audios")
    .remove([audio.value.audio]);
}
</script>

<template>
  <div>
    <div class="flex justify-between mt-24 items-center">
      <h1 class="text-6xl">My Listings</h1>
      <NuxtLink
        to="/profile/listings/create"
        class="w-9 h-9 bg-blue-400 flex justify-center items-center rounded-full text-white font-bold cursor-pointer"
        >+</NuxtLink
      >
    </div>
    <div class="shadow rounded p-3 mt-5">
      <AudioListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
        @delete-click="handleDelete"
      />
    </div>
  </div>
</template>
