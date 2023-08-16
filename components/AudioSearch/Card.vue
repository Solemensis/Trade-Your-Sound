<script setup>
// import heartFilled from "@/assets/heartFilled.png";
// import heartOutline from "@/assets/heartOutline.png";
const props = defineProps({ audio: Object });

// const favored = useState(`favored-${props.audio.id}`, () => {
//   return false;
// });

const config = useRuntimeConfig();
</script>
<template>
  <div>
    <div class="listing-boxy">
      <NuxtLink class="edit-but" :to="`/audio/${audio.name}-${audio.id}`"
        ><h3 class="heading">
          {{ truncateShorterString(audio.name) }}
          <span class="green-span">|</span> ${{ audio.price }}
        </h3></NuxtLink
      >
      <div class="listing-content">
        <JukeBox
          :src="`${config.public.supabase.url}/storage/v1/object/public/audios/${audio.audio}`"
        />

        <NuxtLink :to="`/audio/${audio.name}-${audio.id}`"
          ><p class="go-to-listing">→</p></NuxtLink
        >


  
      </div>
    </div>

    <!-- <img
        :src="favored ? heartFilled : heartOutline"
        @click="favored = !favored"
      /> -->
  </div>
</template>

<style scoped>
.heading {
  font-size: 1.3rem;
  color: #c3c3c3;
  position: absolute;
  top: 1.3rem;
  left: 1.5rem;
  transition: 0.1s;
  font-weight: 500;
}
.heading:hover {
  color: #3fcf8e;
}

.listing-boxy {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 2.5rem;
  padding-top: 6.5rem;
  padding-right: 1.5rem;
  padding-left: 3rem;
  position: relative;
  border-radius: 0.8rem;
  /* background-color: #232323; */
  background-color: #25252587;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.listing-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.5rem;
}
.go-to-listing {
  font-size: 3rem;
  color: #3fcf8e;
  position: absolute;
  right: 3rem;
  top: 0.2rem;
  transition: 0.1s;
}
.go-to-listing:hover {
  filter: brightness(1.3);
}
</style>
