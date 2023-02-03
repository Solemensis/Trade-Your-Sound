<script setup>
const props = defineProps({
  title: String,
  name: String,
  data: Array,
});

const emits = defineEmits(["changeInput"]);

const array = ref([...props.data]);

const onChange = (value) => {
  value.target.checked
    ? array.value.push(value.target.value)
    : (array.value = array.value.filter((item) => {
        return item !== value.target.value;
      }));

  emits("changeInput", array.value, props.name);
};

const isChecked = {
  first: props.data.includes("sound-effects"),
  second: props.data.includes("environmental-sounds"),
  third: props.data.includes("ui-sounds"),
  fourth: props.data.includes("foley-sounds"),
  fifth: props.data.includes("dialogue"),
  sixth: props.data.includes("soundscapes"),
};
</script>

<template>
  <div class="categories-box">
    <label class="heading" for="">
      Which categories you are in? <span class="green-span">*</span>
    </label>

    <form class="categories">
      <div>
        <input
          class="checkbox"
          v-model="isChecked.first"
          @click="onChange"
          type="checkbox"
          value="sound-effects"
        />
        <label>Sound Effects</label>
      </div>
      <div>
        <input
          class="checkbox"
          v-model="isChecked.second"
          @click="onChange"
          type="checkbox"
          value="environmental-sounds"
        />
        <label>Environmental Sounds</label>
      </div>
      <div>
        <input
          class="checkbox"
          v-model="isChecked.third"
          @click="onChange"
          type="checkbox"
          value="ui-sounds"
        />
        <label>UI Sounds</label>
      </div>
      <div>
        <input
          class="checkbox"
          v-model="isChecked.fourth"
          @click="onChange"
          type="checkbox"
          value="foley-sounds"
        />
        <label>Foley Sounds</label>
      </div>
      <div>
        <input
          class="checkbox"
          v-model="isChecked.fifth"
          @click="onChange"
          type="checkbox"
          value="dialogue"
          style=""
        />
        <label>Dialogue</label>
      </div>
      <div>
        <input
          class="checkbox"
          v-model="isChecked.sixth"
          @click="onChange"
          type="checkbox"
          value="soundscapes"
        />
        <label>Soundscapes</label>
      </div>
    </form>
  </div>
</template>

<style scoped>
.heading {
  font-size: 1.8rem;
  color: #ddd;
  margin-bottom: 2rem;
}
.categories-box {
  display: flex !important;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 6rem;
}
.categories {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  align-items: center;
  grid-gap: 0.3rem;
}
</style>
