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
    <input
      class="price-input"
      type="text"
      :placeholder="placeholder"
      v-model="state"
      @input="onChange"
    />
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

.price-input {
  padding-left: 2.3rem;
}
.label-and-input::before {
  content: "$";
  color: #3fcf8e;
  position: absolute;
  left: 1rem;
  top: 2.55rem;
  font-size: 1.4rem;
}
</style>
