<script setup>
definePageMeta({
  layout: "custom",
  middleware: ["auth"],
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const { data: listings } = useFetch(
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
    <div>
      <h1>My Listings</h1>
      <NuxtLink to="/profile/listings/create">+</NuxtLink>
    </div>
    <div v-if="!listings">loading...</div>
    <div v-else>
      <UserListingsListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
        @delete-click="handleDelete"
      />
    </div>
  </div>
</template>
