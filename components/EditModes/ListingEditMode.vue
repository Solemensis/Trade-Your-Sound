<script setup>
const props = defineProps({
  audio: Object,
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();
const route = useRoute();

const info = useState("info", () => {
  return {
    name: `${props.audio.name}`,
    price: `${props.audio.price}`,
    category: `${props.audio.category}`,
    processing: `${props.audio.processing}`,
    description: `${props.audio.description}`,
    audio: null,
  };
});

const errorMessage = ref("");

const onChangeInput = (inputData, name) => {
  info.value[name] = inputData;
};

async function handleSubmit() {
  //audio bucket file creation logic
  const fileName =
    replaceSpacesAndTrChars(info.value.name) +
    "_" +
    Math.floor(Math.random() * 9999);
  const { data, error } = await supabase.storage
    .from("audios")
    .upload("public/" + fileName, info.value.audio);

  if (error) {
    return (errorMessage.value = "Cannot upload audio");
  }

  if (user.value.id === props.audio.lister_id) {
    //creation of the body(data) object which will be sent to backend
    const body = {
      name: info.value.name,
      price: parseInt(info.value.price),
      category: info.value.category,
      processing: info.value.processing,
      description: info.value.description,
      lister_id: user.value.id,
      audio: data.path,
    };

    // http post request to send body object to backend
    try {
      const response = await $fetch(`/api/audio/listings/${route.params.id}/`, {
        method: "put",
        body,
      });

      //as that put request was a pure edit and the audio file will always be uploaded,
      //the old audio shall be eleminated:
      await supabase.storage.from("audios").remove(props.audio.audio);

      listingEditToggle.value = !listingEditToggle.value;
      listingEditRefetchSignal.value = !listingEditRefetchSignal.value;
    } catch (err) {
      errorMessage.value = err.statusMessage;

      //if error, delete uploaded audio
      await supabase.storage.from("audios").remove(data.path);
    }
  } else return;
}

const listingEditToggle = useState("listingEditToggle");

const listingEditRefetchSignal = useState(
  "listingEditRefetchSignal",
  () => false
);
</script>

<template>
  <div>
    <InputsEditListingName
      title="Name *"
      name="name"
      placeholder="Fireball Sound"
      :data="audio.name"
      @change-input="onChangeInput"
    /><InputsEditListingPrice
      title="Price *"
      name="price"
      placeholder="1000"
      :data="String(audio.price)"
      @change-input="onChangeInput"
    />
    <InputsEditListingDescription
      title="Description *"
      name="description"
      placeholder="When a beautiful fireball erupted, I pressed record and captured its deep rumble and sharp crack perfectly. Back in my studio, I spent hours editing and mastering the recording to ensure it sounded just as incredible on the recording as it did in the forest."
      :data="audio.description"
      @change-input="onChangeInput"
    /><InputsEditListingCategories
      title="Category *"
      name="category"
      :data="audio.category"
      @change-input="onChangeInput"
    />
    <InputsEditListingProcessing
      title="Processing *"
      name="processing"
      :data="audio.processing"
      @change-input="onChangeInput"
    />
    <InputsEditListingFile :data="audio.audio" @change-input="onChangeInput" />
    <div>
      <button @click="handleSubmit">Submit</button>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>
