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
  <div class="self-description">
    <label for="">{{ title }} <span class="green-span">*</span></label>
    <span style="text-align: center; font-size: 1.4rem; color: #989898">{{
      750 - state.length
    }}</span>
    <textarea
      maxlength="750"
      type="text"
      :placeholder="placeholder"
      v-model="state"
      @input="onChange"
    ></textarea>
  </div>
</template>

<style scoped>
.self-description {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  margin-bottom: 5rem;
}
textarea {
  width: 100%;
  height: 20rem;
}
label {
  font-size: 1.8rem;
  color: #ddd;
  margin-bottom: 0.5rem;
}
</style>
