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
    <label class="text-cyan-500 mb-1 text-sm">{{ title }}</label>
    <select class="p-2 border w-100 rounded" @change="onChange" v-model="state">
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
