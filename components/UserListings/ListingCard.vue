<script setup>
const props = defineProps({
  listing: Object,
});

const emits = defineEmits(["deleteClick"]);

// to get supabase audio endpoint
const config = useRuntimeConfig();
</script>

<template>
  <div class="listing-boxy">
    <NuxtLink class="edit-but" :to="`/audio/${listing.name}-${listing.id}`"
      ><h3 class="heading">
        {{ listing.name }} | ${{ listing.price }}
      </h3></NuxtLink
    >
    <div class="listing-content">
      <JukeBox
        :src="`${config.public.supabase.url}/storage/v1/object/public/audios/${listing.audio}`"
      />

      <div class="buttons">
        <NuxtLink class="edit-but" :to="`/audio/${listing.name}-${listing.id}`"
          ><img src="@/assets/edit-but.svg" alt=""
        /></NuxtLink>
        <p class="delete-but" @click="emits('deleteClick', listing.id)">
          <img src="@/assets/delete-but.svg" alt="" />
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.heading {
  font-size: 1.5rem;
  color: #c3c3c3;
  position: absolute;
  top: 1.2rem;
  left: 2rem;
}
.listing-boxy {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 2.7rem;
  padding-top: 6.5rem;
  padding-right: 1.5rem;
  padding-left: 3rem;
  position: relative;
  border: #545454 2px dashed;
  border-radius: 0.5rem;
}
.listing-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.5rem;
}

.buttons {
  display: flex;
  gap: 1rem;
  position: absolute;
  right: 0.7rem;
  top: 1rem;
}
.buttons img {
  width: 1.8rem;
  cursor: pointer;
  transition: 0.1s;
}
.buttons img:hover {
  scale: 1.1;
  filter: brightness(1.3);
}
</style>
