<script setup>
const { categories } = useCategories();

const router = useRouter();

//route queries
const queries = reactive({});

function onChangeCategory(category) {
  queries.category = category;
  onFilterApply();
}

//function to start the search
function onFilterApply() {
  const pureObject = { ...queries };

  router.push({
    query: {
      category: pureObject.category,
    },
  });
}

function removeAllFilters() {
  router.push({
    query: {
      category: undefined,
    },
  });
}
</script>

<template>
  <div>
    <div>
      <h3>Category</h3>
      <ul>
        <li @click="onChangeCategory()">All Categories</li>
        <li v-for="category in categories" @click="onChangeCategory(category)">
          {{ formatString(category) }}
        </li>
      </ul>
    </div>

    <button @click="removeAllFilters">remove all filters</button>
  </div>
</template>
