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
    <label for="">{{ title }} <span class="green-span">*</span></label>
    <select @change="onChange" v-model="state">
      <option :key="1" value="raw">Raw</option>
      <option :key="2" value="edited">Edited</option>
      <option :key="3" value="mastered">Mastered</option>
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
