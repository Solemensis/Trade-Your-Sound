<script setup>
import cauldron from "@/assets/1.svg";
import hat from "@/assets/2.svg";
import tree from "@/assets/3.svg";
import cauldron2 from "@/assets/1.svg";
import hat2 from "@/assets/2.svg";
import tree2 from "@/assets/3.svg";
import cauldron3 from "@/assets/1.svg";
import hat3 from "@/assets/2.svg";

const icons = [cauldron, hat, tree, cauldron2, hat2, tree2, cauldron3, hat3];
</script>

<template>
  <div class="container">
    <div class="ico-grid">
      <div v-for="icon in icons">
        <img :src="icon" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
}
.ico-grid {
  display: grid;
  grid-template-columns: repeat(4, 9rem);
  gap: 5rem;
  justify-items: center;
}
.ico-grid div {
  background-color: #252525;
  border-radius: 0.5rem;
  padding: 1rem;
}
img {
  height: 6.5rem;
}
</style>
