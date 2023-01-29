<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* GENERAL */
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Rubik";
  color: #ededed;
}
body {
  background-color: #1c1c1c;
  user-select: none;
}
html {
  font-size: 62.5%;
}
a {
  text-decoration: none;
}

/* SPANS */
.w400-yellow-span {
  color: #3fcf8e;
  font-weight: 400;
}

.yellow-span {
  color: #3fcf8e;
}

/* BUTTONS */
.hero-button {
  background-color: transparent;
  padding: 0.8rem 2.7rem;
  color: white;
  border: #2c9163 2px solid;
  border-radius: 0.5rem;
  transition: 0.2s;
}

.hero-button:hover {
  border: #39ba80 2px solid;
  transform: translateY(-3%);
}

/* INPUT */
.input {
  background-color: red;
}
</style>
