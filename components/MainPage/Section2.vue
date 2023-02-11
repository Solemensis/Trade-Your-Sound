<script setup>
//audio files
import eggCrackAudio from "@/assets/audios2/eggCrack.mp3";
import cauldronAudio from "@/assets/audios2/cauldron.wav";
import axeAudio from "@/assets/audios2/axe.mp3";
import manAudio from "@/assets/audios2/man.wav";
import womanAudio from "@/assets/audios2/woman.wav";
import grimReaperAudio from "@/assets/audios2/grimReaper.wav";
import ui1Audio from "@/assets/audios2/ui1.mp3";
import ui2Audio from "@/assets/audios2/ui2.wav";
import ui3Audio from "@/assets/audios2/ui3.wav";
import fireSpellAudio from "@/assets/audios2/fireSpell.wav";
import windyScrollAudio from "@/assets/audios2/windyScroll.wav";
import spellBookAudio from "@/assets/audios2/spellBook.wav";

//refs to audios from template
const eggCrack = ref(null);
const cauldron = ref(null);
const axe = ref(null);
const man = ref(null);
const woman = ref(null);
const grimReaper = ref(null);
const ui1 = ref(null);
const ui2 = ref(null);
const ui3 = ref(null);
const fireSpell = ref(null);
const windyScroll = ref(null);
const spellBook = ref(null);

//player
function play(audio) {
  if (!audio.paused) {
    audio.pause();
    return;
  }
  audio.load();
  audio.play();
}

//booleans for playing state
const playing = reactive({
  eggCrack: false,
  cauldron: false,
  axe: false,
  man: false,
  woman: false,
  grimReaper: false,
  ui1: false,
  ui2: false,
  ui3: false,
  fireSpell: false,
  windyScroll: false,
  spellBook: false,
});
</script>

<template>
  <div>
    <h2
      style="
        text-align: center;
        margin-bottom: 10rem;
        font-size: 3.5rem;
        font-weight: 500;
      "
    >
      Categorization of <span class="green-span">Sounds</span>
    </h2>
    <div class="general-grid">
      <div class="ico-grid">
        <div :class="{ playing: playing.eggCrack }" @click="play(eggCrack)">
          <img src="@/assets/audios2/eggCrack.svg" alt="" />
          <audio
            @play="playing.eggCrack = !playing.eggCrack"
            @pause="playing.eggCrack = !playing.eggCrack"
            ref="eggCrack"
            :src="eggCrackAudio"
          />
        </div>
        <div :class="{ playing: playing.cauldron }" @click="play(cauldron)">
          <img src="@/assets/audios2/cauldron.svg" alt="" />
          <audio
            @play="playing.cauldron = !playing.cauldron"
            @pause="playing.cauldron = !playing.cauldron"
            ref="cauldron"
            :src="cauldronAudio"
          />
        </div>
        <div :class="{ playing: playing.axe }" @click="play(axe)">
          <img src="@/assets/audios2/axe.svg" alt="" />
          <audio
            @play="playing.axe = !playing.axe"
            @pause="playing.axe = !playing.axe"
            ref="axe"
            :src="axeAudio"
          />
        </div>
      </div>
      <div class="text-box">
        <h3>Foley Sounds</h3>
        <ul>
          <li>
            These are artificially created sounds that mimic real-life noises
            and enhance the audio library of movies, TV shows, video games, etc.
          </li>
        </ul>
      </div>
      <div class="text-box">
        <h3>Dialogue</h3>
        <ul>
          <li>
            Anything that contains audible words, Human speach, or fictional
            races like orc, demon etc
          </li>
        </ul>
      </div>
      <div class="ico-grid">
        <div :class="{ playing: playing.man }" @click="play(man)">
          <img src="@/assets/audios2/man.svg" alt="" />
          <audio
            @play="playing.man = !playing.man"
            @pause="playing.man = !playing.man"
            ref="man"
            :src="manAudio"
          />
        </div>
        <div :class="{ playing: playing.woman }" @click="play(woman)">
          <img src="@/assets/audios2/woman.svg" alt="" />
          <audio
            @play="playing.woman = !playing.woman"
            @pause="playing.woman = !playing.woman"
            ref="woman"
            :src="womanAudio"
          />
        </div>
        <div :class="{ playing: playing.grimReaper }" @click="play(grimReaper)">
          <img src="@/assets/audios2/grimReaper.svg" alt="" />
          <audio
            @play="playing.grimReaper = !playing.grimReaper"
            @pause="playing.grimReaper = !playing.grimReaper"
            ref="grimReaper"
            :src="grimReaperAudio"
          />
        </div>
      </div>
      <div class="ico-grid">
        <div :class="{ playing: playing.ui1 }" @click="play(ui1)">
          <img src="@/assets/audios2/ui1.svg" alt="" />
          <audio
            @play="playing.ui1 = !playing.ui1"
            @pause="playing.ui1 = !playing.ui1"
            ref="ui1"
            :src="ui1Audio"
          />
        </div>
        <div :class="{ playing: playing.ui2 }" @click="play(ui2)">
          <img src="@/assets/audios2/ui2.svg" alt="" />
          <audio
            @play="playing.ui2 = !playing.ui2"
            @pause="playing.ui2 = !playing.ui2"
            ref="ui2"
            :src="ui2Audio"
          />
        </div>
        <div :class="{ playing: playing.ui3 }" @click="play(ui3)">
          <img src="@/assets/audios2/ui3.svg" alt="" />
          <audio
            @play="playing.ui3 = !playing.ui3"
            @pause="playing.ui3 = !playing.ui3"
            ref="ui3"
            :src="ui3Audio"
          />
        </div>
      </div>
      <div class="text-box">
        <h3>UI Sounds</h3>
        <ul>
          <li>
            When receiving something, activating something, deleting something,
            hovering on something, or an event happens in an app, we can be
            notified in audial way. These are user interface sounds
          </li>
        </ul>
      </div>
      <div class="text-box">
        <h3>Sound Effects</h3>
        <ul>
          <li>
            Similar to foley sounds, artificially created but rather than
            mimicing the real-life noises, these are mimicing non real-life
            sounds, so sound effects
          </li>
        </ul>
      </div>
      <div class="ico-grid">
        <div :class="{ playing: playing.fireSpell }" @click="play(fireSpell)">
          <img src="@/assets/audios2/fireSpell.svg" alt="" />
          <audio
            @play="playing.fireSpell = !playing.fireSpell"
            @pause="playing.fireSpell = !playing.fireSpell"
            ref="fireSpell"
            :src="fireSpellAudio"
          />
        </div>
        <div
          :class="{ playing: playing.windyScroll }"
          @click="play(windyScroll)"
        >
          <img src="@/assets/audios2/windyScroll.svg" alt="" />
          <audio
            @play="playing.windyScroll = !playing.windyScroll"
            @pause="playing.windyScroll = !playing.windyScroll"
            ref="windyScroll"
            :src="windyScrollAudio"
          />
        </div>
        <div :class="{ playing: playing.spellBook }" @click="play(spellBook)">
          <img src="@/assets/audios2/spellBook.svg" alt="" />
          <audio
            @play="playing.spellBook = !playing.spellBook"
            @pause="playing.spellBook = !playing.spellBook"
            ref="spellBook"
            :src="spellBookAudio"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.general-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  margin-inline: auto;
  width: 80%;
  grid-row-gap: 15rem;
  grid-column-gap: 2rem;
  margin-bottom: 27rem;
}

.text-box {
  text-align: center;
}
.text-box h3 {
  font-size: 3rem;
  font-weight: 400;
  color: #ddd;
  margin-bottom: 2rem;
  color: palevioletred;
}
.text-box ul {
  list-style: none;
}
.text-box ul li {
  font-size: 1.7rem;
  color: #bbb;
  width: clamp(1rem, 100%, 45rem);
  margin-inline: auto;
  line-height: 1.3;
}
.ico-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 10rem;
  justify-items: center;
}
.ico-grid div:first-child {
  grid-column-start: span 2;
}

.ico-grid div {
  background-color: #202020;
  border-radius: 0.5rem;
  padding: 1rem;
  transition: 0.2s;
  /* box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px; */
  box-shadow: #343434 3px 3px 6px 0px inset, #05050580 -3px -3px 6px 1px inset;
}

.playing {
  box-shadow: #161616 3px 3px 6px 0px inset, #0b0b0b80 -3px -3px 6px 1px inset !important;
}

.ico-grid div:hover {
  background-color: #252525;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  box-shadow: #343434 3px 3px 6px 0px inset, #05050580 -3px -3px 6px 1px inset;
}

.ico-grid div:active {
  animation: button-pop 0.3s ease-out;
}
img {
  height: 8rem;
}
</style>
