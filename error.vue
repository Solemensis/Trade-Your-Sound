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
  <div class="flex h-screen justify-center items-center flex-col">
    <h2 class="text-9xl">{{ error.statusCode }}</h2>
    <p class="mt-7 text-4xl">{{ error.message }}</p>
    <button
      @click="handleError"
      class="rounded mt-7 text-2xl bg-blue-400 px-7 py-4 text-white"
    >
      Go Back
    </button>
  </div>
</template>

<style scoped></style>
