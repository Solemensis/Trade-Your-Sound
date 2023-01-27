<script setup>
const { categories } = useCategories();
const { prices } = useCategories();
const { processing } = useCategories();

const route = useRoute();
const router = useRouter();

function onChangeCategory(category) {
  if (route.query.price != undefined) {
    navigateTo(`/shop/${category}?price=${route.query.price}`);
  } else {
    navigateTo(`/shop/${category}/`);
  }
}
function onResetCategory() {
  if (route.query.price != undefined) {
    navigateTo(`/shop/all-categories?price=${route.query.price}`);
  } else {
    navigateTo(`/shop/all-categories/`);
  }
}

function onChangePrice(price) {
  router.push({
    query: {
      price: price,
    },
  });
}

function onChangeProcessing(option) {
  router.push({
    query: {
      processing: option,
    },
  });
}
</script>

<template>
  <div>
    <div class="p-5 relative cursor-pointer border-b">
      <h3>Category</h3>
      <ul class="border top-1 m-1 bg-white">
        <li @click="onResetCategory()">All Categories</li>
        <li v-for="category in categories" @click="onChangeCategory(category)">
          {{ formatString(category) }}
        </li>
      </ul>
    </div>

    <div class="p-5 relative cursor-pointer border-b">
      <h3>Price</h3>

      <ul class="border top-1 m-1 bg-white">
        <li @click="onChangePrice(price)" v-for="price in prices">
          {{ price }}
        </li>
      </ul>
    </div>

    <div class="p-5 relative cursor-pointer border-b">
      <h3>Processing</h3>

      <ul class="border top-1 m-1 bg-white">
        <li @click="onChangeProcessing(option)" v-for="option in processing">
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>
