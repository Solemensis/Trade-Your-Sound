<script setup>
definePageMeta({
  layout: "custom",
  middleware: ["auth"],
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();
const route = useRoute();

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
  //audio bucket file edit logic
  const audio = await useFetchAudio(route.params.id);

  const fileName = Math.floor(Math.random() * 999999999999);
  const { data, error } = await supabase.storage
    .from("audios")
    .upload("public/" + fileName, info.value.audio);

  if (error) {
    //if error, delete uploaded audio and return function
    await supabase.storage.from("audios").remove(data.path);
    return (errorMessage.value = "Cannot upload audio");
  }

  //removing the old audio
  const { oldData, error2 } = await supabase.storage
    .from("audios")
    .remove([audio.value.audio]);

  //creation of the new body(data) object which will be sent to backend
  const body = {
    ...info.value,
    name: info.value.name,
    price: parseInt(info.value.price),
    category: info.value.category,
    processing: info.value.processing,
    description: info.value.description,
    lister_id: user.value.id,
    audio: data.path,
  };

  //http put request to send new body object to backend
  try {
    const response = await $fetch(
      `/api/audio/listings/${route.params.id}/edit`,
      {
        method: "put",
        body: body,
      }
    );

    navigateTo("/profile/listings");
  } catch (err) {
    errorMessage.value = err.statusMessage;
  }
}
</script>

<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Edit Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <InputsAudioInput
        :key="1"
        title="Name *"
        name="name"
        placeholder="Fireball Sound"
        @change-input="onChangeInput"
      /><InputsAudioInput
        :key="2"
        title="Price *"
        name="price"
        placeholder="1000"
        @change-input="onChangeInput"
      /><InputsAudioCategories
        title="Category *"
        name="category"
        @change-input="onChangeInput"
      />
      <InputsAudioProcessing
        title="Processing *"
        name="processing"
        @change-input="onChangeInput"
      />
      <InputsAudioDescription
        title="Description *"
        name="description"
        placeholder="When a beautiful fireball erupted, I pressed record and captured its deep rumble and sharp crack perfectly. Back in my studio, I spent hours editing and mastering the recording to ensure it sounded just as incredible on the recording as it did in the forest."
        @change-input="onChangeInput"
      />
      <InputsAudioFile @change-input="onChangeInput" />
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
