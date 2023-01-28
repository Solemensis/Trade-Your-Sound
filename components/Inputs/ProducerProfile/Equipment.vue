<script setup>
const props = defineProps({
  title: String,
  name: String,
  data: Array,
});

const emits = defineEmits(["changeInput"]);
const state = ref("");

const equipments = ref([...props.data]);

const onAdd = () => {
  if (state.value != "" && equipments.value.length <= 7) {
    equipments.value.push(state.value);
    state.value = "";

    emits("changeInput", equipments.value, props.name);
  } else return;
};

const handleDelete = (value) => {
  equipments.value = equipments.value.filter((item) => {
    return item !== value;
  });

  emits("changeInput", equipments.value, props.name);
};
</script>

<template>
  <div>
    <label for="">{{ title }}</label>

    <div>
      <h3
        @click="handleDelete(equipment)"
        v-for="equipment in equipments"
        :key="equipment"
      >
        {{ equipment }}❌
      </h3>

      <input type="text" placeholder="sm57 (add 1 by 1)" v-model="state" />
      <button @click="onAdd">add</button>
    </div>
  </div>
</template>
