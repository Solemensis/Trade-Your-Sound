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
  <div class="flex flex-col w-[48%] mt-2">
    <label for="" class="text-cyan-500 mb-1 text-sm">{{ title }}</label>

    <div>
      <h3
        @click="handleDelete(equipment)"
        style="border: 2px purple solid; display: inline-block"
        v-for="equipment in equipments"
        :key="equipment"
      >
        {{ equipment }}❌
      </h3>

      <input
        type="text"
        class="p-2 border w-100 rounded"
        placeholder="sm57 (add 1 by 1)"
        v-model="state"
      />
      <button
        @click="onAdd"
        style="border: 2px purple solid; background-color: gray; padding: 1rem"
      >
        add
      </button>
    </div>
  </div>
</template>
