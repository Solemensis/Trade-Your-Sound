<script setup>
const { categories } = useCategories();
const { prices } = useCategories();
const { processing } = useCategories();

const router = useRouter();

//route queries
const queries = reactive({});

function onChangeCategory(category) {
  queries.category = category;
  onFilterApply();
}

function onChangePrice(price) {
  queries.price = price;
  onFilterApply();
}

function onChangeProcessing(option) {
  queries.processing = option;
  onFilterApply();
}

//function to start the search
function onFilterApply() {
  const pureObject = { ...queries };

  router.push({
    query: {
      category: pureObject.category,
      price: pureObject.price,
      processing: pureObject.processing,
    },
  });
}

function removeAllFilters() {
  queries.category = undefined;
  queries.price = undefined;
  queries.processing = undefined;

  router.push({
    query: {
      category: undefined,
      price: undefined,
      processing: undefined,
    },
  });
}
</script>

<template>
  <div>
    <div class="search-bar">
      <div>
        <h3>Category</h3>
        <ul>
          <li @click="onChangeCategory(undefined)">All Categories</li>
          <li
            v-for="category in categories"
            @click="onChangeCategory(category)"
          >
            {{ formatString(category) }}
          </li>
        </ul>
      </div>

      <div>
        <h3>Price</h3>
        <ul>
          <li @click="onChangePrice(undefined)">All Prices</li>
          <li @click="onChangePrice(price)" v-for="price in prices">
            $ {{ price }}
          </li>
        </ul>
      </div>

      <div>
        <h3>Processing</h3>
        <ul>
          <li @click="onChangeProcessing(undefined)">All Processings</li>
          <li @click="onChangeProcessing(option)" v-for="option in processing">
            {{ option }}
          </li>
        </ul>
      </div>
      <button class="filter-remove" @click="removeAllFilters">
        Remove Filters
      </button>
    </div>
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
  margin-left: 3rem;
  z-index: 1000;
}
.search-bar h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  text-align: center;
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

@media (orientation: portrait) {
  .search-bar {
    font-size: 1.4rem;
    line-height: 1.4;
    margin-left: 1.5rem;
  }
  .search-bar h3 {
    font-size: 1.5rem;
    width: 90%;
    padding-bottom: 0.2rem;
  }
  .filter-remove {
    font-size: 1.1rem;
  }
}
</style>
