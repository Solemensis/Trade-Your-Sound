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
  <div class="col-md-5 offset-md-1 mt-2 w-[100%]">
    <label for="" class="text-cyan-500 mb-1 text-sm">Audio *</label>
    <form class="mt-2">
      <div class="form-group">
        <div class="relative">
          <div
            style="
              height: 100px;
              width: 200px;
              border: green dashed 2px;
              border-radius: 1rem;
              font-size: 3rem;
              color: blueviolet;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            "
          >
            <input
              type="file"
              accept="audio/mpeg"
              class="opacity-0 absolute cursor-pointer"
              @change="onAudioUpload"
            />

            <p v-if="!uploadedAudio" style="font-size: 1rem">+ drop audio...</p>
            <p v-else style="font-size: 1rem">{{ uploadedAudio }} is placed.</p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
