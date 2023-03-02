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
  <div class="container">
    <h2>{{ error.statusCode }}</h2>
    <p>{{ error.message }}</p>
    <button class="hero-button" @click="handleError">Back to main page</button>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h2 {
  font-size: 4rem;
  color: #ddd;
  margin-bottom: 0.33rem;
}
p {
  font-size: 2rem;
  color: #bbb;
  margin-bottom: 2.5rem;
}
</style>
