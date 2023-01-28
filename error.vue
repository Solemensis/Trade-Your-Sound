<script setup>
function handleError() {
  // navigateTo("/");
  clearError({
    redirect: "/",
  });
}

const error = useError();
</script>
<template>
  <div>
    <h2>{{ error.statusCode }}</h2>
    <p>{{ error.message }}</p>
    <button @click="handleError">Go Back</button>
  </div>
</template>

<style scoped></style>
