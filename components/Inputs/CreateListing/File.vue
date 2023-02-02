<script setup>
const props = defineProps({
  title: String,
});

const audio = useState("audioAudio", () => {
  return {
    audio: null,
  };
});

const emits = defineEmits(["changeInput"]);

const uploadedAudio = ref("");

const onAudioUpload = (event) => {
  const input = event.target;

  if (input.files) {
    audio.value.audio = input.files[0];
    emits("changeInput", input.files[0], "audio");
    uploadedAudio.value = input.files[0].name;
  }
};
</script>

<template>
  <div class="input-box">
    <label for="">{{ title }}<span class="green-span"> *</span></label>
    <div class="input">
      <input
        type="file"
        accept="audio/mpeg"
        style="height: 100%; width: 100%; opacity: 0; z-index: 100"
        @change="onAudioUpload"
      />

      <p v-if="!uploadedAudio">+ drop audio...</p>
      <p v-else>{{ uploadedAudio }} <br />is placed.</p>
    </div>
  </div>
</template>
<style scoped>
.input-box {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
}
.input {
  border: #b43edb dashed 2px;
  border-radius: 1rem;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
}
.input p {
  font-size: 1.2rem;
  text-align: center;
  position: absolute;
}
</style>
