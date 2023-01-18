<script setup>
const props = defineProps({
  title: String,
  name: String,
  options: Array,
});

const emits = defineEmits(["changeInput"]);
const state = ref("");

const onChange = () => {
  emits("changeInput", state.value, props.name);
};
</script>

<template>
  <div class="flex flex-col w-[48%] mt-2">
    <label for="" class="text-cyan-500 mb-1 text-sm">{{ title }}</label>
    <select class="p-2 border w-100 rounded" @change="onChange" v-model="state">
      <option :key="11" value="mono">Mono</option>
      <option :key="22" value="stereo">Stereo</option>
    </select>
  </div>
</template>
