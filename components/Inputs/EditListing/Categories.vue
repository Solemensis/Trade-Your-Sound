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
  <div>
    <label>{{ title }}</label>
    <select @change="onChange" v-model="state">
      <option :key="1" value="sound-effects">Sound Effects</option>
      <option :key="2" value="environmental-sounds">
        Environmental Sounds
      </option>
      <option :key="3" value="ui-sounds">UI Sounds</option>
      <option :key="4" value="foley-sounds">Foley Sounds</option>
      <option :key="5" value="dialogue">Dialogue</option>
      <option :key="6" value="soundscapes">Soundscapes</option>
    </select>
  </div>
</template>
