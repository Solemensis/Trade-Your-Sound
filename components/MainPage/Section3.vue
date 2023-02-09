<script setup>
import bow from "@/assets/audios2/bow.wav";
import potion from "@/assets/audios2/potion.mp3";
import shuriken from "@/assets/audios/shuriken.mp3";

function playAudio(name, audio) {
  name = new Audio(audio);
  name.play();
}
</script>

<template>
  <div style="position: relative" class="flex">
    <h2 class="heading">
      The Things <span style="color: orangered">You Can't Do...</span>
    </h2>
    <div data-aos="zoom-in">
      <p>
        this website currently cannot accept audios longer than 30 seconds, and
        there are limitations to uploadable file formats as some of them are
        huge.
      </p>
    </div>

    <div data-aos="zoom-in">
      <p>
        Additionally, there is a 5 audio listing limit per user. The reason to
        these problems is that our database is on free bandwidth right now,
        which has strict data size limitations, and audios are usually large
        file types.
      </p>
    </div>
    <div data-aos="zoom-in">
      <p>
        that's why soundscape, environmental sounds, ambiances and musical
        pieces etc. are not in the categories as they are usually audio types
        longer than 30 seconds. So if this project gets interest and a need to
        scale, i might start a "buymecoffee" funding account for
        database-hosting-maintainence-feature development expenses.
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
  bottom: 3rem;
  width: 90%;
  line-height: 1.3;
}
</style>

<!-- 
      
    
   -->
