<script setup>
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
  <div>
    <label for="">Audio *</label>
    <form>
      <div>
        <div>
          <div>
            <input type="file" accept="audio/mpeg" @change="onAudioUpload" />

            <p v-if="!uploadedAudio">+ drop audio...</p>
            <p v-else>{{ uploadedAudio }} is placed.</p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
