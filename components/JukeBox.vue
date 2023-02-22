<script setup>
const props = defineProps({
  src: String,
});
const supabase = useSupabaseClient();

//custom audio input logic
const player = ref(null);
const seekSlider = ref(null);

async function play() {
  if (!player.value.paused) {
    player.value.pause();
    return;
  } else if (player.value.src) {
    player.value.play();
    return;
  } else {
    const { error } = await supabase.storage
      .from("audios")
      .download(`public/${getSubstring(props.src)}`);

    const audioUrl = URL.createObjectURL(data);
    player.value.src = audioUrl;

    player.value.play();
  }
}

const timeline = ref(0);

function updateTimelineValue() {
  if (player.value && player.value.currentTime)
    timeline.value = player.value.currentTime;
}

function seekAudio() {
  // player.value.pause();
  player.value.currentTime = seekSlider.value.value;
}

function onMetadata() {
  seekSlider.value.max = player.value.duration;
  seekSlider.value.step = player.value.duration / 100;
}
</script>

<template>
  <div>
    <audio
      @loadedmetadata="onMetadata"
      ref="player"
      @timeupdate="updateTimelineValue"
      type="audio/mpeg"
    />

    <div class="jukebox">
      <div class="buttons">
        <button :class="{ invis: player && !player.paused }" @click="play">
          <img src="@/assets/play-but.svg" alt="" />
        </button>
        <button :class="{ invis: player && player.paused }" @click="play">
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
}
.jukebox {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.buttons {
  position: relative;
}
.buttons:active {
  animation: button-pop 0.3s ease-out;
}
.jukebox button {
  background-color: transparent;
  border: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -47%);

  transition: 0.3s;
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
