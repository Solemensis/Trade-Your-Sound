<script setup>
const { categories } = useCategories();

const router = useRouter();

//route queries

const queries = reactive({});

function onChangeCategory(category) {
  queries.category = category;
  onFilterApply();
}

function onChangeOpportunity(opportunity) {
  queries.opportunity = opportunity;
  onFilterApply();
}

//function to start the search
function onFilterApply() {
  const pureObject = { ...queries };

  router.push({
    query: {
      category: pureObject.category,
      opportunity: pureObject.opportunity,
    },
  });
}

function removeAllFilters() {
  queries.category = undefined;
  queries.opportunity = undefined;

  router.push({
    query: {
      category: undefined,
      opportunity: undefined,
    },
  });
}
</script>

<template>
  <div class="search-bar">
    <div>
      <h3>Category</h3>
      <ul>
        <li @click="onChangeCategory()">All Categories</li>
        <li v-for="category in categories" @click="onChangeCategory(category)">
          {{ formatString(category) }}
        </li>
      </ul>
    </div>
    <div>
      <h3>Looking for Opportunity</h3>
      <ul>
        <li @click="onChangeOpportunity()">All</li>
        <li @click="onChangeOpportunity('looking')">Looking</li>
        <li @click="onChangeOpportunity('not-looking')">Not looking</li>
      </ul>
    </div>

    <button class="filter-remove" @click="removeAllFilters">
      Remove Filters
    </button>
  </div>
</template>

<style scoped>
.search-bar {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  padding-top: 5rem;
  height: 100vh;
  font-size: 1.5rem;
  margin-left: 2rem;
  z-index: 1000;
}

.search-bar h3 {
  margin-bottom: 1rem;
  font-weight: 400;
  padding-bottom: 0.5rem;
  border-bottom: white 1px solid;
  color: #3fcf8e;
}

ul {
  list-style: none;
}
ul li {
  color: #989898;
  transition: 0.1s;
}
ul li:hover {
  color: #3fcf8e;
  cursor: pointer;
}
.filter-remove {
  border: none;
  background-color: #5d1919;
  border-radius: 1rem;
  padding: 0.7rem 1.5rem;
  transition: 0.1s;
  cursor: pointer;
}
.filter-remove:hover {
  background-color: #852020;
}
</style>
