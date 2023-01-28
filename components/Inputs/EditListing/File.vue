<script setup>
const props = defineProps({
  data: String,
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
  <div>
    <label for="">Audio *</label>
    <form>
      <div>
        <div>
          <div>
            <input
              type="file"
              ref="fileinput"
              accept="audio/mpeg"
              @change="onAudioUpload"
            />

            <p v-if="!uploadedAudio">+ drop audio...</p>
            <p v-else>{{ uploadedAudio }} is placed.</p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
