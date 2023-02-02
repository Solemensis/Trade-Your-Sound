<script setup>
const props = defineProps({
  title: String,
  name: String,
  placeholder: String,
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
    <textarea
      type="text"
      :placeholder="placeholder"
      v-model="state"
      @input="onChange"
    ></textarea>
  </div>
</template>

<style scoped>
.label-and-input {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
}
textarea {
  width: 100%;
}
</style>
