<script setup>
const props = defineProps({
  data: Object,
});

const user = useSupabaseUser();

const info = useState("info", () => {
  return {
    categories: [...props.data.categories],
    equipment: [...props.data.equipment],
    relatedLink1: `${props.data.related_link1}`,
    relatedLink2: `${props.data.related_link2}`,
    relatedLink1Desc: `${props.data.related_link1_desc}`,
    relatedLink2Desc: `${props.data.related_link2_desc}`,
    description: `${props.data.description}`,
  };
});

const errorMessage = ref("");

const onChangeInput = (inputData, name) => {
  info.value[name] = inputData;
};

async function handleSubmit() {
  if (user.value.id === props.data.lister_id) {
    //creation of the body(data) object which will be sent to backend
    const body = {
      categories: [...info.value.categories],
      equipment: [...info.value.equipment],
      related_link1: info.value.relatedLink1,
      related_link2: info.value.relatedLink2,
      related_link1_desc: info.value.relatedLink1Desc,
      related_link2_desc: info.value.relatedLink2Desc,
      description: info.value.description,
      lister_id: user.value.id,
    };

    // http post request to send body object to backend
    try {
      const response = await $fetch("/api/producerProfile/producerProfile", {
        method: "put",
        body,
      });
      profileEditToggle.value = !profileEditToggle.value;
      carryRefetchSignal.value = !carryRefetchSignal.value;
    } catch (err) {
      errorMessage.value = err.statusMessage;
    }
  } else return;
}

const profileEditToggle = useState("profileEditToggle");

const carryRefetchSignal = useState("carryRefetchSignal", () => false);
</script>

<template>
  <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
    <InputsProducerProfileCategories
      title="Categories *"
      name="categories"
      :data="data.categories"
      @change-input="onChangeInput"
    /><InputsProducerProfileEquipment
      title="Equipment *"
      name="equipment"
      :data="data.equipment"
      @change-input="onChangeInput"
    />
    <InputsProducerProfileRelatedLink1Desc
      title="Description of the link 1"
      name="relatedLink1Desc"
      placeholder="This is a link to my open source foley library streams"
      :data="data.related_link1_desc"
      @change-input="onChangeInput"
    />
    <InputsProducerProfileRelatedLink2Desc
      title="Description of the link 2"
      name="relatedLink2Desc"
      placeholder="This is a link to my track which is currently being used in a game"
      :data="data.related_link2_desc"
      @change-input="onChangeInput"
    />
    <InputsProducerProfileRelatedLink1
      title="Link 1"
      name="relatedLink1"
      placeholder="maybe a Spotify audio share link of yours, or etc"
      :data="data.related_link1"
      @change-input="onChangeInput"
    />
    <InputsProducerProfileRelatedLink2
      title="Link 2"
      name="relatedLink2"
      placeholder="maybe a Soundcloud audio share link of yours, or etc"
      :data="data.related_link2"
      @change-input="onChangeInput"
    />
    <InputsProducerProfileSelfDescription
      title="Self description *"
      name="description"
      placeholder="As an audio engineer specialized in creating UI sounds and environmental audio recording, I have worked on projects like video games, nature documentaries, and blockbuster films. I have also recorded and mixed albums for chart-topping artists. My job is to ensure the sound in any project is perfect and I have the experience and passion to bring it to the next level."
      :data="data.description"
      @change-input="onChangeInput"
    />
    <div>
      <button
        @click="handleSubmit"
        class="bg-blue-400 text-white rounded py-2 px-7 mt-3"
      >
        Submit
      </button>
      <p v-if="errorMessage" class="mt-3 text-red-400">{{ errorMessage }}</p>
    </div>
  </div>
</template>
