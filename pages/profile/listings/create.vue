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

  //fetching username to add it to body object
  const userId = {
    userId: user.value.id,
  };
  const specificUser = await $fetch("/api/producerProfile/specificUser", {
    method: "post",
    body: userId,
  });

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
    user_name: specificUser.user_name,
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
  <div class="container">
    <div>
      <div>
        <h1>Create a New Listing</h1>
      </div>
      <div class="input-container">
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
        />
        <InputsCreateListingCategories
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
          class="description"
        />
        <InputsCreateListingFile @change-input="onChangeInput" />
      </div>
      <div>
        <button @click="handleSubmit" :disabled="isButtonDisabled">
          Submit
        </button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  grid-gap: 3rem;
  width: 50vw;
  height: 55vh;
  border-radius: 2rem;
  background-color: #333333;
}
</style>
