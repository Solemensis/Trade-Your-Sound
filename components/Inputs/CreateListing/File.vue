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
    //burası mp3 mü koyuldu onu sorgulama yeri:
    if (input.files[0].type != "audio/mpeg") {
      errorMessage.value = "For now, we can only accept mp3 files.";
      setTimeout(() => {
        errorMessage.value = "";
      }, 4000);
      return;
    }

    //burası audio'nun 30 saniye olup olmadığını belirleme:
    const newAudio = new Audio();
    newAudio.addEventListener("loadedmetadata", () => {
      if (newAudio.duration >= 30) {
        errorMessage.value =
          "For now, you can't upload an audio longer than 30 seconds.";
        setTimeout(() => {
          errorMessage.value = "";
        }, 4000);
      } else {
        //burası audioyu sample audio ile mixleme yeri:
        //sample audioyu oluşturarak başla.
        const sampleAudio = new Audio(
          `${config.public.supabase.url}/storage/v1/object/public/audios/sample/sample.mp3`
        );

        //2 audio da elimizde. burdan sonrası onları birleştirme:
        const audioContext = new AudioContext();

        const source1 = audioContext.createMediaElementSource(newAudio);
        const source2 = audioContext.createMediaElementSource(sampleAudio);
        source1.connect(audioContext.destination);
        source2.connect(audioContext.destination);

        const gainNode1 = audioContext.createGain();
        const gainNode2 = audioContext.createGain();
        source1.connect(gainNode1);
        source2.connect(gainNode2);
        gainNode1.Gain.value = 0.5; // adjust volume as needed
        gainNode2.Gain.value = 0.5; // adjust volume as needed

        const combinedBuffer = audioContext.createBuffer(
          2, // stereo
          Math.max(source1.buffer.length, source2.buffer.length), // length of longest audio file
          audioContext.sampleRate
        );
        const channel1 = combinedBuffer.getChannelData(0);
        const channel2 = combinedBuffer.getChannelData(1);
        for (let i = 0; i < combinedBuffer.length; i++) {
          channel1[i] =
            source1.buffer.getChannelData(0)[i] +
            source2.buffer.getChannelData(0)[i];
          channel2[i] =
            source1.buffer.getChannelData(1)[i] +
            source2.buffer.getChannelData(1)[i];
        }

        const combinedSource = audioContext.createBufferSource();
        combinedSource.buffer = combinedBuffer;
        combinedSource.connect(audioContext.destination);
        combinedSource.start();

        //burası audioyu son yolculuğuna uğurlama yeri:
        audio.value.audio = input.files[0];
        emits("changeInput", input.files[0], "audio");
        uploadedAudio.value = input.files[0].name;
        errorMessage.value = "";
      }
    });
    newAudio.src = URL.createObjectURL(input.files[0]);
  }
};

const errorMessage = ref("");

const config = useRuntimeConfig();
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
        title=""
      />

      <div>
        <p v-if="!uploadedAudio">+ drop audio...</p>
        <p v-else style="color: #3fcf8e">
          {{ uploadedAudio }} <br />is placed.
        </p>
      </div>
      <div v-if="errorMessage" style="top: -5rem; white-space: nowrap">
        <p style="font-size: 1.1rem; color: orangered">{{ errorMessage }}</p>
      </div>
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
.input div {
  font-size: 1.2rem;
  text-align: center;
  position: absolute;
}
</style>
