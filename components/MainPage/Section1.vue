<script setup>
import bow from "@/assets/audios2/bow.mp3";
import potion from "@/assets/audios2/potion.mp3";
import shuriken from "@/assets/audios2/shuriken.mp3";

function playAudio(name, audio) {
  name = new Audio(audio);
  name.volume = 0.4;
  name.play();
}
</script>

<template>
  <div style="position: relative" class="flex">
    <p
      id="things-you-can-do"
      style="position: absolute; left: 0; top: -35rem; opacity: 0"
    >
      things-you-can-do
    </p>
    <h2 class="heading">
      The Things <span class="green-span">You Can Do...</span>
    </h2>
    <div
      @mouseenter="playAudio('bow', bow)"
      data-aos="fade-down"
      data-aos-duration="2200"
      data-aos-easing="ease-out-back"
    >
      <img src="@/assets/audios2/bow.svg" />
      <h3>Create your profile</h3>
      <p>
        Fill your profile to display it on "producer profiles" page for
        potential opportunities!
      </p>
    </div>

    <div
      @mouseenter="playAudio('potion', potion)"
      data-aos="fade-down"
      data-aos-duration="2200"
      data-aos-easing="ease-out-back"
      data-aos-delay="300"
    >
      <img src="@/assets/audios2/potion.svg" alt="" />

      <h3>Sell your audios</h3>
      <p>
        Sell commercial licences of your audios to people who wanna buy them,
        and make a passive income.
      </p>
    </div>
    <div
      @mouseenter="playAudio('shuriken', shuriken)"
      data-aos="fade-down"
      data-aos-duration="2200"
      data-aos-easing="ease-out-back"
      data-aos-delay="600"
    >
      <img src="@/assets/audios2/shuriken.svg" alt="" />
      <h3>Get inspirations</h3>
      <p>
        Instead scrolling general social media; scroll here to get audial
        inspirations, and meet people who loves sfx!
      </p>
    </div>
  </div>
</template>

<style scoped>
.heading {
  position: absolute;
  top: -18rem;
  color: #ddd;
  font-size: 3.5rem;
  font-weight: 500;
}
.flex {
  margin-top: 20rem;
  margin-bottom: 27rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  width: 70%;
  margin-inline: auto;
}
.flex div {
  width: 28rem;
  height: 20rem;
  border-radius: 1.5rem;
  /* background-color: #222222;  */
  background-color: #3030307c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
}
.flex div:hover img {
  transform: translateY(-8%);
}
.flex div img {
  width: 11rem;
  transition: 0.2s;
  position: absolute;
  top: -5rem;
}
.flex div h3 {
  text-align: center;
  font-size: 1.7rem;
  font-weight: 500;
  color: #da5883;
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
  bottom: 3rem;
  width: 90%;
  line-height: 1.3;
}

@media (orientation: portrait) {
  .flex {
    margin-top: 20rem;
    margin-bottom: 27rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 8rem;
    width: 100vw;
  }
  .flex div:last-child {
    grid-column-start: 1;
    grid-column-end: 3;
    width: 24rem;
  }
  .flex div {
    height: 15rem;
    width: 23rem;
  }
  .flex div img {
    width: 9rem;
  }
  .flex div h3 {
    bottom: 6rem;
    font-size: 1.6rem;
  }
  .flex div p {
    bottom: 1.5rem;
    font-size: 1.2rem;
  }
}
</style>
