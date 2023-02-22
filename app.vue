<template>
  <div>
    <NavBar />
    <div class="opening-animation">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap");

.opening-animation {
  opacity: 0;
  animation: opacity-grow 1.5s ease-in;
  animation-fill-mode: forwards;
}

@keyframes opacity-grow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

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
  background-image: linear-gradient(#00000086, #00000086),
    url("@/assets/images/11.webp");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  overflow-x: hidden;
}
html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
}

/* SPANS */
.w400-green-span {
  color: #3fcf8e;
  font-weight: 400;
}

.green-span {
  color: #3fcf8e;
}

.purple-span {
  color: #a753bc;
}
/* BUTTONS */
.hero-button {
  background-color: transparent;
  padding: 0.9rem 2.9rem;
  color: white;
  border: #2c9163 2px solid;
  border-radius: 0.5rem;
  transition: 0.2s;
  font-size: 1.4rem;
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
  font-size: 1.4rem;
}

.delete-button:hover {
  border: #ec0c0c 2px solid;
  transform: translateY(-3%);
}

/* button pop animation */
@keyframes button-pop {
  0% {
    transform: scale(0.94);
  }
  40% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}

/* INPUTS */
input[type="text"],
input[type="password"],
textarea,
select,
input[type="file"] {
  height: 2.8rem;
  width: 100%;
  /* background-color: #313131; */
  background-color: #313131cd;
  border: none;
  padding: 0.5rem;
  border-radius: 1rem;
  font-size: 1.4rem;
}

input[type="text"]:focus,
input[type="password"]:focus,
textarea:focus,
select:focus,
input[type="file"]:focus {
  outline: #8c00ffa7 2px solid;
}

textarea {
  height: 10rem;
  width: 50rem;
  /* background-color: #313131; */
  background-color: #313131cd;
  border: none;
  padding: 0.5rem;
  border-radius: 1rem;
}
label {
  font-size: 1.3rem;
  color: #989898;
}

/* checkbox style */
.checkbox {
  position: relative;
  top: 0.1rem;
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 3px;
  appearance: none;
  background-color: #888;
  transition: all 0.1s;
  font-size: 1.2rem;
}
.checkbox:hover {
  background-color: #555;
}

.disabled-checkbox:hover {
  background-color: #888;
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

/* scroll bar  */
::-webkit-scrollbar {
  width: 1rem;
  /* border-radius: 0.5rem; */
  background-color: #232323;
  /* position: absolute; */
}
::-webkit-scrollbar-thumb {
  /* border-radius: 0.5rem; */
  background-color: #454545;
}
::-webkit-scrollbar-thumb:active {
  background-color: #454545;
}

/* responsive*/

@media (min-width: 2500px) {
  html {
    font-size: 110%;
  }
}

@media (max-width: 2499px) {
  html {
    font-size: 100%;
  }
}

@media (max-width: 2300px) {
  html {
    font-size: 95%;
  }
}

@media (max-width: 2100px) {
  html {
    font-size: 85%;
  }
}

@media (max-width: 1920px) {
  html {
    font-size: 79%;
  }
}

@media (max-width: 1820px) {
  html {
    font-size: 70%;
  }
}

@media (max-width: 1720px) {
  html {
    font-size: 66%;
  }
}

@media (max-width: 1580px) {
  html {
    font-size: 62.5%;
  }
}

@media (max-width: 1280px) {
  html {
    font-size: 50%;
  }
}

@media (max-width: 1024px) {
  html {
    font-size: 35%;
  }
}

/* loading animation */
.lds-dual-ring {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.6;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 4px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.6s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
