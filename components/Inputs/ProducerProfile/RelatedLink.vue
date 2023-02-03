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
  <div class="link-box">
    <label for="">{{ title }}</label>
    <input
      type="text"
      :placeholder="placeholder"
      v-model="state"
      @input="onChange"
    />
  </div>
</template>

<style scoped>
.link-box {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
</style>
