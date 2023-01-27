<script setup>
definePageMeta({
  layout: "custom",
  middleware: ["auth"],
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const info = useState("addInfo", () => {
  return {
    name: "",
    price: "",
    category: "",
    processing: "",
    description: "",
    audio: null,
  };
});

const errorMessage = ref("");

const onChangeInput = (data, name) => {
  info.value[name] = data;
};

const isButtonDisabled = computed(() => {
  for (let key in info.value) {
    if (!info.value[key]) return true;
  }
  return false;
});

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

  //creation of the body(data) object which will be sent to backend
  const body = {
    // ...info.value,
    name: info.value.name,
    price: parseInt(info.value.price),
    category: info.value.category,
    processing: info.value.processing,
    description: info.value.description,
    lister_id: user.value.id,
    audio: data.path,
  };

  //http post request to send body object to backend
  try {
    const response = await $fetch("/api/audio/listings", {
      method: "post",
      body,
    });

    navigateTo("/profile/listings");
  } catch (err) {
    errorMessage.value = err.statusMessage;

    //if error, delete uploaded audio
    await supabase.storage.from("audios").remove(data.path);
  }
}
</script>

<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create a New Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <InputsCreateListingName
        title="Name *"
        name="name"
        placeholder="Fireball Sound"
        @change-input="onChangeInput"
      /><InputsCreateListingPrice
        title="Price *"
        name="price"
        placeholder="1000"
        @change-input="onChangeInput"
      /><InputsCreateListingCategories
        title="Category *"
        name="category"
        @change-input="onChangeInput"
      />
      <InputsCreateListingProcessing
        title="Processing *"
        name="processing"
        @change-input="onChangeInput"
      />
      <InputsCreateListingDescription
        title="Description *"
        name="description"
        placeholder="When a beautiful fireball erupted, I pressed record and captured its deep rumble and sharp crack perfectly. Back in my studio, I spent hours editing and mastering the recording to ensure it sounded just as incredible on the recording as it did in the forest."
        @change-input="onChangeInput"
      />
      <InputsCreateListingFile @change-input="onChangeInput" />
      <div>
        <button
          @click="handleSubmit"
          :disabled="isButtonDisabled"
          class="bg-blue-400 text-white rounded py-2 px-7 mt-3"
        >
          Submit
        </button>
        <p v-if="errorMessage" class="mt-3 text-red-400">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>
