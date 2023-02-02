<script setup>
const props = defineProps({
  src: String,
});

//custom audio input logic
const player = ref(null);
const seekSlider = ref(null);

const timeline = ref(0);

function updateTimelineValue() {
  timeline.value = player.value.currentTime;
}

function seekAudio() {
  player.value.pause();
  player.value.currentTime = seekSlider.value.value;
}

function onMetadata() {
  seekSlider.value.max = player.value.duration;
  seekSlider.value.step = player.value.duration / 8;
}
</script>

<template>
  <div>
    <audio
      @loadedmetadata="onMetadata"
      ref="player"
      @timeupdate="updateTimelineValue"
      :src="src"
      type="audio/mpeg"
    />

    <div class="jukebox">
      <div class="buttons">
        <button
          :class="{ invis: player && !player.paused }"
          @click="player.play()"
        >
          <img src="@/assets/play-but.svg" alt="" />
        </button>
        <button
          :class="{ invis: player && player.paused }"
          @click="player.pause()"
        >
          <img src="@/assets/pause-but.svg" alt="" />
        </button>
      </div>

      <input
        class="timeline"
        @input="seekAudio"
        ref="seekSlider"
        v-model="timeline"
        type="range"
      />
    </div>
  </div>
</template>

<style scoped>
.invis {
  opacity: 0;
  z-index: -999;
}
.jukebox {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.buttons {
  position: relative;
}
.jukebox button {
  background-color: transparent;
  border: none;
  transition: 0.3s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -47%);
}
.jukebox img {
  width: 4rem;
}

/* range input style */
.timeline[type="range"] {
  width: 25rem;
  -webkit-appearance: none;
  height: 3px;
  background-color: #fff;
  border-radius: 5px;
  outline: none;
  transition: 0.2s;
  opacity: 0.7;
}
.timeline[type="range"]:hover {
  opacity: 0.9;
}
.timeline[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background-color: #818181;
  height: 15px;
  width: 15px;
  border-radius: 50%;
}

.timeline[type="range"]::-moz-range-thumb {
  background-color: #818181;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: none;
}
</style>
