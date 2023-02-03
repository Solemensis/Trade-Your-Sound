<script setup>
const props = defineProps({
  data: Object,
});

const user = useSupabaseUser();

const info = reactive({
  categories: [...props.data.categories],
  equipment: [...props.data.equipment],
  LFopportunity: props.data.LFopportunity,
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
      related_link3: info.relatedLink3,
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
  <div class="inputs-group">
    <InputsProducerProfileCategories
      class="categories"
      title="Categories"
      name="categories"
      :data="data.categories"
      @change-input="onChangeInput"
    /><InputsProducerProfileEquipment
      title="Equipment"
      name="equipment"
      :data="data.equipment"
      @change-input="onChangeInput"
    />
    <InputsProducerProfileSelfDescription
      class="description"
      title="Self description"
      name="description"
      placeholder="As an audio engineer specialized in creating UI sounds and environmental audio recording, I have worked on projects like video games, nature documentaries, and blockbuster films. I have also recorded and mixed albums for chart-topping artists. My job is to ensure the sound in any project is perfect and I have the experience and passion to bring it to the next level."
      :data="data.description"
      @change-input="onChangeInput"
    />
    {{ info }}
    <InputsProducerProfileOpenToOpportunities
      :data="data.LFopportunity"
      @change-input="onChangeInput"
      name="LFopportunity"
    />
  </div>
  <h2 style="margin-bottom: 3rem">Show your projects</h2>
  <div class="links-group">
    <InputsProducerProfileRelatedLink
      class="link"
      style="width: 150%"
      title="Describe the link you're going to paste"
      name="relatedLink1Desc"
      placeholder="My open source foley library samples"
      :data="data.related_link1_desc"
      @change-input="onChangeInput"
    />
    <InputsProducerProfileRelatedLink
      class="link"
      style="width: 50%; justify-self: end"
      title="Paste link"
      name="relatedLink1"
      placeholder="Link"
      :data="data.related_link1"
      @change-input="onChangeInput"
    />
    <InputsProducerProfileRelatedLink
      class="link"
      style="width: 150%"
      title="Describe the link you're going to paste"
      name="relatedLink2Desc"
      placeholder="My track which is currently being used in a game"
      :data="data.related_link2_desc"
      @change-input="onChangeInput"
    />
    <InputsProducerProfileRelatedLink
      class="link"
      style="width: 50%; justify-self: end"
      title="Paste link"
      name="relatedLink2"
      placeholder="Link"
      :data="data.related_link2"
      @change-input="onChangeInput"
    />
    <InputsProducerProfileRelatedLink
      class="link"
      style="width: 150%"
      title="Describe the link you're going to paste"
      name="relatedLink3Desc"
      placeholder="My soundcloud profile"
      :data="data.related_link3_desc"
      @change-input="onChangeInput"
    />
    <InputsProducerProfileRelatedLink
      class="link"
      style="width: 50%; justify-self: end"
      title="Paste link"
      name="relatedLink3"
      placeholder="Link"
      :data="data.related_link3"
      @change-input="onChangeInput"
    />
  </div>
  <div></div>
  <div class="bottom-group">
    <div class="buttons" style="margin-bottom: 6rem">
      <button class="hero-button" @click="handleSubmit">Submit</button>
      <button
        @click="profileEditToggle = !profileEditToggle"
        class="delete-button"
      >
        Cancel
      </button>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<style scoped>
.bottom-group {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.terms {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 4rem;
}
.link {
  margin-bottom: 2rem;
}
.links-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
  margin-bottom: 10rem;
}
.description {
  grid-column-start: span 2;
}
</style>
