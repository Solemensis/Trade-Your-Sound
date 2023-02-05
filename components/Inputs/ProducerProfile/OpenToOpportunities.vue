<script setup>
const props = defineProps({
  data: Boolean,
  name: String,
});

const emits = defineEmits(["changeInput"]);

const value = ref(props.data);
function checkChange() {
  props.data = !props.data;
  emits("changeInput", value.value, props.name);
}
</script>

<template>
  <div>
    <div class="opportunity-check">
      <label for="">Are you open to opportunities from other people? </label>
      <input
        v-model="value"
        @change="checkChange"
        class="checkbox"
        type="checkbox"
      />
    </div>
  </div>
</template>
<style scoped>
.opportunity-check {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 8rem;
}
.opportunity-check label {
  font-size: 1.4rem;
}
</style>
