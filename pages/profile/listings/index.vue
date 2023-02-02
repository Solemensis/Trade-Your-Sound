<script setup>
definePageMeta({
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
  <div class="listing-box">
    <NuxtLink class="create-button" to="/profile/listings/create"
      ><button class="hero-button">New Listing</button></NuxtLink
    >

    <div v-if="!listings">loading...</div>
    <div v-else class="listings">
      <UserListingsListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
        @delete-click="handleDelete"
      />
    </div>
  </div>
</template>

<style scoped>
.create-button {
  margin-bottom: 4rem;
}
.listing-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 15rem;
  gap: 2rem;
  position: relative;
}
.listings {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
}
</style>
