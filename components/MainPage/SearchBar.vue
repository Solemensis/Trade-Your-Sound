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
  <div>
    <select v-model="category">
      <option value="all-categories" selected>Any Category</option>
      <option
        v-for="category in categories"
        :key="category.id"
        :value="category"
      >
        {{ category }}
      </option>
    </select>
    <button @click="handleSearch">Search</button>
  </div>
</template>
