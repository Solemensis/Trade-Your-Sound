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
    audio.value.audio = input.files[0];
    emits("changeInput", input.files[0], "audio");

    uploadedAudio.value = input.files[0].name;
  }
};

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
