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
  <div class="flex flex-col w-[48%] mt-2">
    <label for="" class="text-cyan-500 mb-1 text-sm">{{ title }}</label>

    <form>
      <div>
        <input
          v-model="isChecked.first"
          @click="onChange"
          type="checkbox"
          :key="1"
          :value="'sound-effects'"
        />
        <label>Sound Effects</label>
      </div>
      <div>
        <input
          v-model="isChecked.second"
          @click="onChange"
          type="checkbox"
          :key="2"
          value="environmental-sounds"
        />
        <label>Environmental Sounds</label>
      </div>
      <div>
        <input
          v-model="isChecked.third"
          @click="onChange"
          type="checkbox"
          :key="3"
          value="ui-sounds"
        />
        <label>UI Sounds</label>
      </div>
      <div>
        <input
          v-model="isChecked.fourth"
          @click="onChange"
          type="checkbox"
          :key="4"
          value="foley-sounds"
        />
        <label>Foley Sounds</label>
      </div>
      <div>
        <input
          v-model="isChecked.fifth"
          @click="onChange"
          type="checkbox"
          :key="5"
          value="dialogue"
        />
        <label>Dialogue</label>
      </div>
      <div>
        <input
          v-model="isChecked.sixth"
          @click="onChange"
          type="checkbox"
          :key="6"
          value="soundscapes"
        />
        <label>Soundscapes</label>
      </div>
    </form>
  </div>
</template>
