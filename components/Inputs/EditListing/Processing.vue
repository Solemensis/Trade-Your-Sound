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
    <label for="">{{ title }}</label>
    <select @change="onChange" v-model="state">
      <option :key="1" value="raw">Raw</option>
      <option :key="2" value="edited">Just Edited</option>
      <option :key="3" value="mastered">Mastered</option>
    </select>
  </div>
</template>
