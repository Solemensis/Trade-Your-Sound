<script setup>
const props = defineProps({
  data: Object,
});

const user = useSupabaseUser();

const info = reactive({
  categories: [...props.data.categories],
  equipment: [...props.data.equipment],
  LFopportunity: props.data.LFopportunity,
  showProfile: props.data.showProfile,
  description: `${props.data.description}`,
  relatedLink1Desc: `${props.data.relatedLinks[0].relatedLink1Desc}`,
  relatedLink2Desc: `${props.data.relatedLinks[0].relatedLink2Desc}`,
  relatedLink3Desc: `${props.data.relatedLinks[0].relatedLink3Desc}`,
  relatedLink1: `${props.data.relatedLinks[0].relatedLink1}`,
  relatedLink2: `${props.data.relatedLinks[0].relatedLink2}`,
  relatedLink3: `${props.data.relatedLinks[0].relatedLink3}`,
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
      showProfile: info.showProfile,
      relatedLinks: [
        {
          relatedLink1Desc: info.relatedLink1Desc,
          relatedLink1: info.relatedLink1,
          relatedLink2Desc: info.relatedLink2Desc,
          relatedLink2: info.relatedLink2,
          relatedLink3Desc: info.relatedLink3Desc,
          relatedLink3: info.relatedLink3,
        },
      ],
      description: info.description,
      lister_id: user.value.id,
    };

    // http post request to send body object to backend
    try {
      const response = await $fetch("/api/producerProfile/producerProfile", {
        method: "put",
        body,
      });

      closeEdit();
      carryRefetchSignal.value = !carryRefetchSignal.value;
    } catch (err) {
      errorMessage.value = err.statusMessage;
      setTimeout(() => {
        errorMessage.value = "";
      }, 4000);
    }
  } else return;
}

const emit = defineEmits(["toggle-close"]);

function closeEdit() {
  emit("toggle-close", false);
}

const carryRefetchSignal = useState("carryRefetchSignal", () => false);
</script>

<template>
  <div class="inputs-group">
    {{ info }}
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
    <InputsProducerProfileCheckboxes
      :LFopportunity="data.LFopportunity"
      :showProfile="data.showProfile"
      @change-input="onChangeInput"
      LFopportunityName="LFopportunity"
      showProfileName="showProfile"
    />
  </div>
  <label style="font-size: 1.8rem; color: #ddd"
    >Show your projects <span style="color: #898989">(optional)</span></label
  >
  <div style="margin-top: 3.5rem" class="links-group">
    <InputsProducerProfileRelatedLink
      class="link"
      style="width: 150%"
      title="Describe your link"
      name="relatedLink1Desc"
      placeholder="This is a link to my open source foley library samples"
      :data="data.relatedLinks[0].relatedLink1Desc"
      @change-input="onChangeInput"
    />
    <InputsProducerProfileRelatedLink
      class="link"
      style="width: 50%; justify-self: end"
      title="Paste link"
      name="relatedLink1"
      placeholder="Link"
      :data="data.relatedLinks[0].relatedLink1"
      @change-input="onChangeInput"
    />
    <InputsProducerProfileRelatedLink
      class="link"
      style="width: 150%"
      title="Describe your link"
      name="relatedLink2Desc"
      placeholder="It's my own track which is currently being used in a game"
      :data="data.relatedLinks[0].relatedLink2Desc"
      @change-input="onChangeInput"
    />
    <InputsProducerProfileRelatedLink
      class="link"
      style="width: 50%; justify-self: end"
      title="Paste link"
      name="relatedLink2"
      placeholder="Link"
      :data="data.relatedLinks[0].relatedLink2"
      @change-input="onChangeInput"
    />
    <InputsProducerProfileRelatedLink
      class="link"
      style="width: 150%"
      title="Describe your link"
      name="relatedLink3Desc"
      placeholder="My soundcloud profile"
      :data="data.relatedLinks[0].relatedLink3Desc"
      @change-input="onChangeInput"
    />
    <InputsProducerProfileRelatedLink
      class="link"
      style="width: 50%; justify-self: end"
      title="Paste link"
      name="relatedLink3"
      placeholder="Link"
      :data="data.relatedLinks[0].relatedLink3"
      @change-input="onChangeInput"
    />
  </div>
  <div class="bottom-group">
    <div class="buttons" style="margin-bottom: 6rem">
      <button class="hero-button" @click="handleSubmit">Submit</button>
      <button @click="closeEdit" class="delete-button">Cancel</button>
      <p
        style="position: absolute; top: -4rem; color: brown; font-size: 1.4rem"
        v-if="errorMessage"
      >
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.bottom-group {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
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
