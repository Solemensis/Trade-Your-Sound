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
    <label for="">{{ title }}</label>

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
.categories-box {
  display: flex;
  flex-direction: column;
  gap: 1rem !important;
  text-align: start;
}
.categories {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}
/* .checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
} */
</style>
