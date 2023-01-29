<script setup>
const props = defineProps({
  title: String,
  name: String,
  placeholder: String,
});

const emits = defineEmits(["changeInput"]);
const state = ref("");
const onChange = () => {
  emits("changeInput", state.value, props.name);
};
</script>

<template>
  <div>
    <label for="">{{ title }}</label>
    <input
      class="input"
      type="text"
      :placeholder="placeholder"
      v-model="state"
      :name="name"
      @input="onChange"
    />
  </div>
</template>
