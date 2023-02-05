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
  <div class="label-and-input">
    <label for="">{{ title }} <span class="green-span">*</span></label
    ><span style="position: absolute; left: 1rem; color: #aaa">{{
      550 - state.length
    }}</span>
    <textarea
      maxlength="550"
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
