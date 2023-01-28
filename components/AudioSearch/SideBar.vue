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
    <div>
      <h3>Category</h3>
      <ul>
        <li @click="onChangeCategory(undefined)">All Categories</li>
        <li v-for="category in categories" @click="onChangeCategory(category)">
          {{ formatString(category) }}
        </li>
      </ul>
    </div>

    <div>
      <h3>Price</h3>

      <ul>
        <li @click="onChangePrice(undefined)">All Prices</li>
        <li @click="onChangePrice(price)" v-for="price in prices">
          {{ price }}
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
    <button @click="removeAllFilters">remove all filters</button>
  </div>
</template>
