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
  <div>
    <div class="label-and-input">
      <span style="position: absolute; left: -2rem; top: 2.8rem; color: #aaa">{{
        25 - state.length
      }}</span>
      <label for="">{{ title }} <span class="green-span">*</span></label>
      <input
        maxlength="25"
        type="text"
        :placeholder="placeholder"
        v-model="state"
        @input="onChange"
      />
    </div>
  </div>
</template>

<style scoped>
.label-and-input {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  position: relative;
}
input {
  padding-left: 0.8rem;
}
</style>
