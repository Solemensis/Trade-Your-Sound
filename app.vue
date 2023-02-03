<template>
  <div>
    <NavBar />
    <!-- <NuxtLayout> -->
    <NuxtPage />
    <!-- </NuxtLayout> -->
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap");

/* transitions */

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* GENERAL */

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
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

/* SPANS */
.w400-green-span {
  color: #3fcf8e;
  font-weight: 400;
}

.green-span {
  color: #3fcf8e;
}

/* BUTTONS */
.hero-button {
  background-color: transparent;
  padding: 0.9rem 2.9rem;
  color: white;
  border: #2c9163 2px solid;
  border-radius: 0.5rem;
  transition: 0.2s;
}

.hero-button:hover {
  border: #39ba80 2px solid;
  transform: translateY(-3%);
}

.delete-button {
  background-color: transparent;
  padding: 0.9rem 2.9rem;
  color: white;
  border: #d81a1a 2px solid;
  border-radius: 0.5rem;
  transition: 0.2s;
}

.delete-button:hover {
  border: #ec0c0c 2px solid;
  transform: translateY(-3%);
}

/* INPUTS */
input[type="text"],
textarea,
select,
input[type="file"] {
  height: 2.8rem;
  width: 100%;
  background-color: #313131;
  border: none;
  padding: 0.5rem;
  border-radius: 1rem;
}

input[type="text"]:focus,
textarea:focus,
select:focus,
input[type="file"]:focus {
  outline: #8c00ffa7 2px solid;
}

textarea {
  height: 10rem;
  width: 50rem;
  background-color: #313131;
  border: none;
  padding: 0.5rem;
  border-radius: 1rem;
}
label {
  font-size: 1.3rem;
  color: #989898;
}

/* checkbox style */
/* input style logic */
.categories div label {
  font-size: 1.3rem;
}
.categories div {
  position: relative;
}

.checkbox {
  position: relative;
  top: 0.2rem;
  margin-right: 0.5rem;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 3px;
  appearance: none;
  background-color: #888;
  transition: all 0.1s;
}
.checkbox:hover {
  background-color: #555;
}

.checkbox::before {
  content: "";
  position: absolute;
  border: solid #fff;
  display: block;
  width: 0.3em;
  height: 0.6em;
  border-width: 0 0.2em 0.2em 0;
  z-index: 1;
  opacity: 0;
  right: calc(50% - 0.3em);
  top: calc(50% - 0.6em);
  transform: rotate(0deg);
  transition: all 0.2s;
  transform-origin: center center;
}

.checkbox:checked {
  animation: a 0.3s ease-in forwards;
  background-color: #a753bc;
}
.checkbox:checked:hover {
  background-color: #781f8f;
}

.checkbox:checked::before {
  opacity: 1;
  transform: rotate(405deg);
}
</style>
