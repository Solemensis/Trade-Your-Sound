<script setup>
const props = defineProps({
  title: String,
  name: String,
  data: String,
});

const emits = defineEmits(["changeInput"]);
const state = ref(`${props.data}`);

const onChange = () => {
  emits("changeInput", state.value, props.name);
};
</script>

<template>
  <div class="label-and-input">
    <label>{{ title }} <span class="green-span">*</span></label>
    <select @change="onChange" v-model="state">
      <option :key="1" value="sound-effects">Sound Effects</option>
      <option :key="2" value="ui-sounds">UI Sounds</option>
      <option :key="3" value="foley-sounds">Foley Sounds</option>
      <option :key="4" value="dialogue">Dialogue</option>
      <option disabled :key="5" value="soundscapes">Soundscapes</option>
      <option disabled :key="6" value="environmental-sounds">
        Environmental Sounds
      </option>
    </select>
  </div>
</template>

<style scoped>
.label-and-input {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
}
</style>
