<script setup>
const props = defineProps({
  data: Object,
});

const user = useSupabaseUser();

const info = reactive({
  categories: [...props.data.categories],
  equipment: [...props.data.equipment],
  LFopportunity: props.data.opportunity,
  description: `${props.data.description}`,
  relatedLink1Desc: `${props.data.related_link1_desc}`,
  relatedLink2Desc: `${props.data.related_link2_desc}`,
  relatedLink3Desc: `${props.data.related_link3_desc}`,
  relatedLink1: `${props.data.related_link1}`,
  relatedLink2: `${props.data.related_link2}`,
  relatedLink3: `${props.data.related_link3}`,
  whatsappCountry: `${props.data.whatsappCountry}`,
  whatsappGsm: `${props.data.whatsappGsm}`,
});

const errorMessage = ref("");

const onChangeInput = (inputData, name) => {
  info[name] = inputData;
};

async function handleSubmit() {
  if (user.value.id === props.data.lister_id) {
    //creation of the body(data) object which will be sent to backend
    const body = {
      categories: [...info.categories],
      equipment: [...info.equipment],
      LFopportunity: info.LFopportunity,
      related_link1_desc: info.relatedLink1Desc,
      related_link2_desc: info.relatedLink2Desc,
      related_link3_desc: info.relatedLink3Desc,
      related_link1: info.relatedLink1,
      related_link2: info.relatedLink2,
      related_link3: info.relatedLink2,
      description: info.description,
      whatsappCountry: info.whatsappCountry,
      whatsappGsm: info.whatsappGsm,
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
  <div>
    <div class="inputs-group">
      <InputsProducerProfileSelfDescription
        class="description"
        title="Self description *"
        name="description"
        placeholder="As an audio engineer specialized in creating UI sounds and environmental audio recording, I have worked on projects like video games, nature documentaries, and blockbuster films. I have also recorded and mixed albums for chart-topping artists. My job is to ensure the sound in any project is perfect and I have the experience and passion to bring it to the next level."
        :data="data.description"
        @change-input="onChangeInput"
      />
      <InputsProducerProfileCategories
        class="categories"
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
      <InputsProducerProfileRelatedLink
        title="This is a link to:"
        name="relatedLink1"
        placeholder="My open source foley library samples"
        :data="data.related_link1_desc"
        @change-input="onChangeInput"
      />
      <InputsProducerProfileRelatedLink
        title="Paste link"
        name="relatedLink1Desc"
        placeholder="Paste link"
        :data="data.related_link1"
        @change-input="onChangeInput"
      />
      <InputsProducerProfileRelatedLink
        title="This is a link to:"
        name="relatedLink2"
        placeholder="My track which is currently being used in a game"
        :data="data.related_link2_desc"
        @change-input="onChangeInput"
      />
      <InputsProducerProfileRelatedLink
        title="Paste link"
        name="relatedLink2Desc"
        placeholder="Paste link"
        :data="data.related_link2"
        @change-input="onChangeInput"
      />
      <InputsProducerProfileRelatedLink
        title="This is a link to:"
        name="relatedLink3"
        placeholder="My soundcloud profile"
        :data="data.related_link3_desc"
        @change-input="onChangeInput"
      />
      <InputsProducerProfileRelatedLink
        title="Paste link"
        name="relatedLink3Desc"
        placeholder="Paste link"
        :data="data.related_link3"
        @change-input="onChangeInput"
      />
    </div>
    <div>
      <button @click="handleSubmit">Submit</button>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<style scoped>
.inputs-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-bottom: 3rem;
}
.description {
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
