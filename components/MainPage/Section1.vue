<script setup>
import sword from "@/assets/audios/sword.mp3";
import armor from "@/assets/audios/armor.mp3";
import shuriken from "@/assets/audios/shuriken.mp3";

function playAudio(name, audio) {
  name = new Audio(audio);
  name.play();
}
</script>

<template>
  <div class="flex">
    <div @mouseenter="playAudio('sword', sword)" data-aos="zoom-in">
      <img src="@/assets/audios/sword.svg" alt="" />
      <h3>Create your producer profile</h3>
      <p>
        Pick a username and fill your profile information to display your
        producer profile on producer profiles page!
      </p>
    </div>

    <div @mouseenter="playAudio('shuriken', shuriken)" data-aos="zoom-in">
      <img src="@/assets/audios/shuriken.svg" alt="" />
      <h3>Sell your audios</h3>
      <p>
        Sell commercial licences of your audios to people who wanna buy them,
        and make a passive income.
      </p>
    </div>
    <div @mouseenter="playAudio('armor', armor)" data-aos="zoom-in">
      <img src="@/assets/audios/armor.svg" alt="" />
      <h3>Scroll through producer profiles</h3>
      <p>
        Instead scrolling general social media, scroll here to see who is onto
        what, and chat with producers like you!
      </p>
    </div>
  </div>
</template>

<style scoped>
.flex {
  margin-bottom: 27rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}
.flex div {
  width: 28rem;
  height: 20rem;
  border-radius: 1.5rem;
  background-color: #222222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
}
.flex div:hover img {
  transform: translateY(-7%);
}
.flex div img {
  width: 11rem;
  transition: 0.3s;
  position: absolute;
  top: -6rem;
}
.flex div h3 {
  text-align: center;
  font-size: 1.7rem;
  font-weight: 500;
  color: #d14040;
  margin-bottom: 1rem;
  position: absolute;
  bottom: 8rem;
}
.flex div p {
  text-align: center;
  font-size: 1.3rem;
  color: #ddd;
  font-weight: 400;
  position: absolute;
  bottom: 3.5rem;
  width: 90%;
}
</style>
