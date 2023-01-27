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
    <div class="p-5 relative cursor-pointer border-b">
      <h3>Category</h3>
      <ul class="border top-1 m-1 bg-white">
        <li @click="onChangeCategory()">All Categories</li>
        <li v-for="category in categories" @click="onChangeCategory(category)">
          {{ formatString(category) }}
        </li>
      </ul>
    </div>

    <button
      @click="removeAllFilters"
      class="bg-blue-400 w-full mt-2 rounded text-white p-1"
    >
      remove all filters
    </button>
  </div>
</template>
