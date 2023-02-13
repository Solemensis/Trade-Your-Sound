<script setup>
const props = defineProps({
  data: String,
  title: String,
});

const audio = useState("audioAudio", () => {
  return {
    audio: null,
  };
});

const emits = defineEmits(["changeInput"]);

function removePublic(str) {
  if (str.startsWith("public/")) {
    return str.substring("public/".length);
  } else {
    return str;
  }
}

const uploadedAudio = ref(removePublic(props.data));

const onAudioUpload = (event) => {
  const input = event.target;

  if (input.files) {
    //burası mp3 mü koyuldu onu sorgulama
    if (input.files[0].type != "audio/mpeg") {
      errorMessage.value = "For now, we can only accept mp3 files.";
      setTimeout(() => {
        errorMessage.value = "";
      }, 4000);
      return;
    }
    //burası audio'nun 30 saniye olup olmadığını belirleme:
    const audioControl = new Audio();
    audioControl.addEventListener("loadedmetadata", () => {
      if (audioControl.duration >= 30) {
        errorMessage.value =
          "For now, you can't upload an audio longer than 30 seconds.";
        setTimeout(() => {
          errorMessage.value = "";
        }, 4000);
      } else {
        audio.value.audio = input.files[0];
        emits("changeInput", input.files[0], "audio");
        uploadedAudio.value = input.files[0].name;
        errorMessage.value = "";
      }
    });
    audioControl.src = URL.createObjectURL(input.files[0]);
  }
};
const errorMessage = ref("");

//Bottom code is about showing old audio of the listing on the edit page.
// AND making it emit's value (which is the actual mp3 file)
const supabase = useSupabaseClient();

const { data, error } = await supabase.storage
  .from("audios")
  .download(props.data);

let file = new File([data], removePublic(props.data), { type: "audio/mpeg" });

const fileinput = ref(null);

onMounted(() => {
  const dataTransfer = new DataTransfer();
  dataTransfer.items.add(file);
  fileinput.value.files = dataTransfer.files;

  audio.value.audio = dataTransfer.files[0];

  emits("changeInput", dataTransfer.files[0], "audio");
});
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
        ref="fileinput"
        title=""
      />
      <div>
        <p v-if="!uploadedAudio">+ drop audio...</p>
        <p v-else style="color: #3fcf8e">
          {{ getContentBeforeUnderscore(uploadedAudio) }} <br />is placed.
        </p>
      </div>
      <div v-if="errorMessage" style="top: -5rem; white-space: nowrap">
        <p style="font-size: 1.1rem; color: orangered">
          {{ errorMessage }}
        </p>
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
