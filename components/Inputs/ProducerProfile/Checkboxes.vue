<script setup>
const props = defineProps({
  LFopportunity: Boolean,
  showProfile: Boolean,
  LFopportunityName: String,
  showProfileName: String,
});

const emits = defineEmits(["changeInput"]);

const opportunityValue = ref(props.LFopportunity);
const showProfileValue = ref(props.showProfile);

function changeOpportunity() {
  props.LFopportunity = !props.LFopportunity;
  emits("changeInput", opportunityValue.value, props.LFopportunityName);
}
function changeShowProfile() {
  props.showProfile = !props.showProfile;
  emits("changeInput", showProfileValue.value, props.showProfileName);
}
</script>

<template>
  <div class="checkbox-group">
    <div class="opportunity-check">
      <label for="">Are you open to opportunities from other people?</label>
      <input
        v-model="opportunityValue"
        @change="changeOpportunity"
        class="checkbox"
        type="checkbox"
      />
    </div>
    <div class="visibility-check">
      <label for=""
        >Do you want your profile to be seen on producer profiles page?</label
      >
      <input
        v-model="showProfileValue"
        @change="changeShowProfile"
        class="checkbox"
        type="checkbox"
      />
    </div>
  </div>
</template>
<style scoped>
.checkbox-group {
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.opportunity-check,
.visibility-check {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.opportunity-check label,
.visibility-check label {
  font-size: 1.4rem;
}
</style>
