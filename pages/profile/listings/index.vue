<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const listings = ref([]);
onMounted(async () => {
  setTimeout(async () => {
    const {
      data: userListings,
      error,
      refresh,
    } = await useFetch(`/api/audio/listings/user/${user.value.id}`);
    if (error.value) {
      refresh();
    }
    listings.value = userListings.value;
  }, 1);
});

async function handleDelete(id) {
  //catch the audio file location before it's deleted
  const { data: audio } = await useFetch(`/api/audio/${id}`);

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

async function navigateToCreatePage() {
  const response = await $fetch("/api/producerProfile/specificUser", {
    method: "post",
    body: {
      userId: user.value.id,
    },
  });

  const response2 = await $fetch("/api/audio/listings/getSpecificListings", {
    method: "post",
    body: {
      userId: user.value.id,
    },
  });

  if (!response.description) {
    errorMessage.value =
      "You need to pick a username and fill your profile before listing an audio.";
  } else if (response2.length >= 4) {
    errorMessage.value =
      "Currently we can't accept more than 4 audio listings.";
  } else {
    navigateTo("/profile/listings/create");
  }
}
const errorMessage = ref("");
</script>

<template>
  <div class="listing-box">
    <button @click="navigateToCreatePage" class="hero-button">
      New Listing
    </button>

    <div v-if="listings && listings.length" class="listings">
      <UserListingsListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
        @delete-click="handleDelete"
      />
    </div>
    <span v-else style="font-size: 1.4rem; color: orangered">No audios.</span>
    <p
      style="font-size: 1.5rem; color: brown; position: absolute; top: 11rem"
      v-if="errorMessage"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>

<style scoped>
.hero-button {
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
.loading {
  top: 30rem;
}
</style>
