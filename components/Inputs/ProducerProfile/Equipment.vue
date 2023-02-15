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
  if (state.value != "" && equipments.value.length <= 5) {
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
  <div class="equipment-box">
    <label class="heading" for=""
      >Add your physical equipments <span class="green-span">*</span></label
    >

    <div class="input-and-items">
      <div class="items">
        <p
          v-if="equipments && equipments.length"
          class="item"
          @click="handleDelete(equipment)"
          v-for="equipment in equipments"
          :key="equipment"
        >
          {{ equipment }}❌
        </p>
        <p style="color: #bb4545; font-size: 1.5rem" v-else>add at least 1</p>
      </div>
      <div class="input-button">
        <input type="text" placeholder="sm57 x2" v-model="state" />
        <button @click="onAdd">+</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.equipment-box {
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
  text-align: center;
  margin-bottom: 6rem;
}
.heading {
  font-size: 1.8rem;
  color: #ddd;
  margin-bottom: 2rem;
}
.items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
}
.item {
  font-size: 1.3rem;
  color: #888;
  border: gray 1px dashed;
  border-radius: 0.7rem;
  padding: 0.5rem;
}
.item:hover {
  background-color: #310000;
}

.input-and-items {
  display: flex;
  justify-content: space-around;
}
.input-button {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.input-button input {
  height: 3.1rem;
}
.input-button button {
  background-color: #333;
  border: none;
  transition: 0.1s;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  color: #3fcf8e;
  font-weight: 500;
  font-size: 1.3rem;
}
.input-button button:hover {
  background-color: #303030;
}
.input-button button:active {
  background-color: #292929;
}
</style>
