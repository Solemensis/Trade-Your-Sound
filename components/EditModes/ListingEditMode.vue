<script setup>
const props = defineProps({
  audio: Object,
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();
const route = useRoute();

const info = reactive({
  name: `${props.audio.name}`,
  price: `${props.audio.price}`,
  category: `${props.audio.category}`,
  processing: `${props.audio.processing}`,
  description: `${props.audio.description}`,
  audio: null,
});

const errorMessage = ref("");

const onChangeInput = (inputData, name) => {
  info[name] = inputData;
};

async function handleSubmit() {
  //audio bucket file creation logic
  const fileName =
    replaceSpacesAndTrChars(info.name) + "_" + Math.floor(Math.random() * 9999);
  const { data, error } = await supabase.storage
    .from("audios")
    .upload("public/" + fileName, info.audio);

  if (error) {
    return (errorMessage.value = "Cannot upload audio");
  }

  if (user.value.id === props.audio.lister_id) {
    //creation of the body(data) object which will be sent to backend
    const body = {
      name: info.name,
      price: parseInt(info.price),
      category: info.category,
      processing: info.processing,
      description: info.description,
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
  <div class="box">
    <h2 class="youre-editing">
      You're editing <span class="green-span">"{{ audio.name }}"</span>
    </h2>
    <div class="inputs-group">
      <InputsEditListingName
        title="Listing Name"
        name="name"
        placeholder="Fireball Sound"
        :data="audio.name"
        @change-input="onChangeInput"
      /><InputsEditListingPrice
        title="Price"
        name="price"
        placeholder="5"
        :data="String(audio.price)"
        @change-input="onChangeInput"
      />
      <InputsEditListingCategories
        title="Category"
        name="category"
        :data="audio.category"
        @change-input="onChangeInput"
        class="categories"
      />

      <InputsEditListingProcessing
        title="Processing"
        name="processing"
        :data="audio.processing"
        @change-input="onChangeInput"
        class="processing"
      /><InputsEditListingDescription
        title="Description"
        name="description"
        placeholder="When a beautiful fireball erupted, I pressed record and captured its deep rumble and sharp crack perfectly. Back in my studio, I spent hours editing and mastering the recording to ensure it sounded just as incredible on the recording as it did in the forest."
        :data="audio.description"
        @change-input="onChangeInput"
        class="description"
      />
      <InputsEditListingFile
        title="Audio"
        :data="audio.audio"
        @change-input="onChangeInput"
        class="file"
      />
    </div>
    <div>
      <div class="buttons">
        <button class="hero-button" @click="handleSubmit">Submit</button>
        <button
          class="delete-button"
          @click="listingEditToggle = !listingEditToggle"
        >
          Cancel
        </button>
      </div>

      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<style scoped>
.box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -46%) !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 98%;
}
.youre-editing {
  text-align: center;
  margin-bottom: 7rem;
  font-size: 3rem;
  width: 100vw !important;
  font-weight: 500;
}
.box * {
  width: 100%;
}
.inputs-group {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-bottom: 3rem;
}
.description {
  grid-column-start: span 3;
}

.file {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  width: 100%;
  height: 100%;
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
</style>
