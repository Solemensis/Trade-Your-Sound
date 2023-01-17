<script setup>
const { categories } = useCategories();
const category = ref("all-categories");

function handleSearch() {
  if (category.value) {
    navigateTo(`/shop/${category.value}/`);
  }
}
</script>

<template>
  <div
    class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
  >
    <select class="p-2 border w-100 rounded" v-model="category">
      <option value="all-categories" selected>Any Category</option>
      <option
        v-for="category in categories"
        :key="category.id"
        :value="category"
      >
        {{ category }}
      </option>
    </select>
    <button @click="handleSearch" class="bg-sky-500 px-10 text-white">
      Search
    </button>
  </div>
</template>
