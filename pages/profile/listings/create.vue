<script setup>
definePageMeta({
  middleware: ["auth"],
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const info = reactive({
  name: "",
  price: "",
  category: "",
  processing: "",
  description: "",
  audio: null,
});

const errorMessage = ref("");

const onChangeInput = (data, name) => {
  info[name] = data;
};

const isButtonDisabled = computed(() => {
  for (let key in info) {
    if (!info[key]) return true;
  }
  return false;
});

async function handleSubmit() {
  //audio bucket file creation logic
  const fileName =
    "public/" +
    replaceSpacesAndTrChars(info.name) +
    "_" +
    getFormattedFileName(new Date()) +
    "_" +
    Math.floor(Math.random() * 999);

  //fetching username to add it to the body object
  const { data } = await useFetch("/api/producerProfile/specificUser");

  //creation of the body(data) object which will be sent to backend
  const body = {
    name: info.name,
    price: parseInt(info.price),
    category: info.category,
    processing: info.processing,
    description: info.description,
    lister_id: user.value.id,
    audio: fileName,
    user_name: data.value.user_name,
    producer_id: data.value.id,
  };

  //http post request to send body object to backend
  try {
    const response = await $fetch("/api/audio/listings", {
      method: "post",
      body,
    });

    const { data, error } = await supabase.storage
      .from("audios")
      .upload(fileName, info.audio);

    if (error) {
      //delete the newly uploaded row because file couldn't upload
      await $fetch(`/api/audio/listings/${response.id}`, {
        method: "delete",
      });
      errorMessage.value = "Cannot upload audio";
    }

    navigateTo("/profile/listings");
  } catch (err) {
    errorMessage.value = err.statusMessage;
  }
}
</script>

<template>
  <div class="container">
    <h2 class="youre-creating">
      You're creating a <span class="green-span">new listing</span>
    </h2>

    <div class="inputs-group">
      <InputsCreateListingName
        title="Listing Name"
        name="name"
        placeholder="Fireball Sound"
        @change-input="onChangeInput"
      /><InputsCreateListingPrice
        title="Price"
        name="price"
        placeholder="5"
        @change-input="onChangeInput"
      />
      <InputsCreateListingCategories
        title="Category"
        name="category"
        @change-input="onChangeInput"
        class="categories"
      />
      <InputsCreateListingProcessing
        title="Processing"
        name="processing"
        @change-input="onChangeInput"
        class="processing"
      />
      <InputsCreateListingDescription
        title="Description"
        name="description"
        placeholder="When a beautiful fireball erupted, I pressed record and captured its deep rumble and sharp crack perfectly. Back in my studio, I spent hours editing and mastering the recording to ensure it sounded just as incredible on the recording as it did in the forest."
        @change-input="onChangeInput"
        class="description"
      />
      <InputsCreateListingFile
        title="Audio"
        class="file"
        @change-input="onChangeInput"
      />
    </div>
    <div class="buttons">
      <button
        class="hero-button"
        @click="handleSubmit"
        :disabled="isButtonDisabled"
      >
        Submit
      </button>
      <NuxtLink to="/profile/listings"
        ><button class="delete-button">Cancel</button></NuxtLink
      >
      <p
        v-if="errorMessage"
        style="
          position: absolute;
          bottom: -3rem;
          color: orangered;
          font-size: 1.2rem;
        "
      >
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -46%) !important;
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.youre-creating {
  text-align: center;
  margin-bottom: 7rem;
  font-size: 3rem;
  width: 100vw !important;
  font-weight: 500;
}
.container * {
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
.hero-button {
  /* slk slk şey */
  padding: 0;
}
</style>
