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
  <div class="flex flex-col w-[48%] mt-2">
    <label for="" class="text-cyan-500 mb-1 text-sm">{{ title }}</label>
    <select class="p-2 border w-100 rounded" @change="onChange" v-model="state">
      <option :key="1" value="raw">Raw</option>
      <option :key="2" value="edited">Just Edited</option>
      <option :key="3" value="mastered">Mastered</option>
    </select>
  </div>
</template>
