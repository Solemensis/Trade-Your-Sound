<script setup>
const supabase = useSupabaseClient();

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
async function play(audio, audioName) {
  if (!audio.paused) {
    audio.pause();
    return;
  } else if (audio.src) {
    audio.load();
    audio.play();
    return;
  } else {
    playing[audioName] = null;

    const { data, error } = await supabase.storage
      .from("audios")
      .download(`example/${audioName}.mp3`);

    const audioUrl = URL.createObjectURL(data);

    audio.src = audioUrl;
    audio.volume = 0.7;

    audio.load();
    audio.play();
  }
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
    <h2 class="heading">
      Categorization of <span class="green-span">Sounds</span>
    </h2>
    <div class="general-grid">
      <div data-aos="zoom-out" data-aos-duration="700" class="ico-grid">
        <div
          :class="{ playing: playing.eggCrack }"
          @click="play(eggCrack, 'eggCrack')"
        >
          <img src="@/assets/audios2/eggCrack.svg" alt="" />
          <span v-if="playing.eggCrack == null" class="lds-dual-ring"></span>

          <audio
            @play="playing.eggCrack = true"
            @pause="playing.eggCrack = false"
            ref="eggCrack"
            type="audio/mpeg"
          />
        </div>
        <div
          :class="{ playing: playing.cauldron }"
          @click="play(cauldron, 'cauldron')"
        >
          <img src="@/assets/audios2/cauldron.svg" alt="" />
          <span v-if="playing.cauldron == null" class="lds-dual-ring"></span>

          <audio
            @play="playing.cauldron = true"
            @pause="playing.cauldron = false"
            ref="cauldron"
            type="audio/mpeg"
          />
        </div>
        <div :class="{ playing: playing.axe }" @click="play(axe, 'axe')">
          <img src="@/assets/audios2/axe.svg" alt="" />
          <span v-if="playing.axe == null" class="lds-dual-ring"></span>

          <audio
            @play="playing.axe = true"
            @pause="playing.axe = false"
            ref="axe"
            type="audio/mpeg"
          />
        </div>
      </div>
      <div data-aos="zoom-out" data-aos-duration="700" class="text-box">
        <h3>Foley Sounds</h3>
        <ul>
          <li>
            These are artificially created sounds that mimic real-life noises
            and enhance the audio library of movies, TV shows, video games, etc.
          </li>
        </ul>
      </div>
      <div data-aos="zoom-out" data-aos-duration="700" class="text-box">
        <h3>Dialogue</h3>
        <ul>
          <li>
            Anything that contains audible words, Human speach, or fictional
            races like orc, demon etc
          </li>
        </ul>
      </div>
      <div data-aos="zoom-out" data-aos-duration="700" class="ico-grid">
        <div :class="{ playing: playing.man }" @click="play(man, 'man')">
          <img src="@/assets/audios2/man.svg" alt="" />
          <span v-if="playing.man == null" class="lds-dual-ring"></span>

          <audio
            @play="playing.man = true"
            @pause="playing.man = false"
            ref="man"
            type="audio/mpeg"
          />
        </div>
        <div :class="{ playing: playing.woman }" @click="play(woman, 'woman')">
          <img src="@/assets/audios2/woman.svg" alt="" />
          <span v-if="playing.woman == null" class="lds-dual-ring"></span>

          <audio
            @play="playing.woman = true"
            @pause="playing.woman = false"
            ref="woman"
            type="audio/mpeg"
          />
        </div>
        <div
          :class="{ playing: playing.grimReaper }"
          @click="play(grimReaper, 'grimReaper')"
        >
          <img src="@/assets/audios2/grimReaper.svg" alt="" />
          <span v-if="playing.grimReaper == null" class="lds-dual-ring"></span>

          <audio
            @play="playing.grimReaper = true"
            @pause="playing.grimReaper = false"
            ref="grimReaper"
            type="audio/mpeg"
          />
        </div>
      </div>
      <div data-aos="zoom-out" data-aos-duration="700" class="ico-grid">
        <div :class="{ playing: playing.ui1 }" @click="play(ui1, 'ui1')">
          <img src="@/assets/audios2/ui1.svg" alt="" />
          <span v-if="playing.ui1 == null" class="lds-dual-ring"></span>

          <audio
            @play="playing.ui1 = true"
            @pause="playing.ui1 = false"
            ref="ui1"
            type="audio/mpeg"
          />
        </div>
        <div :class="{ playing: playing.ui2 }" @click="play(ui2, 'ui2')">
          <img src="@/assets/audios2/ui2.svg" alt="" />
          <span v-if="playing.ui2 == null" class="lds-dual-ring"></span>

          <audio
            @play="playing.ui2 = true"
            @pause="playing.ui2 = false"
            ref="ui2"
            type="audio/mpeg"
          />
        </div>
        <div :class="{ playing: playing.ui3 }" @click="play(ui3, 'ui3')">
          <img src="@/assets/audios2/ui3.svg" alt="" />
          <span v-if="playing.ui3 == null" class="lds-dual-ring"></span>

          <audio
            @play="playing.ui3 = true"
            @pause="playing.ui3 = false"
            ref="ui3"
            type="audio/mpeg"
          />
        </div>
      </div>
      <div data-aos="zoom-out" data-aos-duration="700" class="text-box">
        <h3>UI Sounds</h3>
        <ul>
          <li>
            When receiving something, activating something, deleting something,
            or an event happens in an app, we can be notified in audial way.
            These are user interface sounds.
          </li>
        </ul>
      </div>
      <div data-aos="zoom-out" data-aos-duration="700" class="text-box">
        <h3>Sound Effects</h3>
        <ul>
          <li>
            Similar to foley sounds, artificially created but rather than
            mimicing the real-life noises, these are mimicing non real-life
            sounds, so sound effects
          </li>
        </ul>
      </div>
      <div data-aos="zoom-out" data-aos-duration="700" class="ico-grid">
        <div
          :class="{ playing: playing.fireSpell }"
          @click="play(fireSpell, 'fireSpell')"
        >
          <img src="@/assets/audios2/fireSpell.svg" alt="" />
          <span v-if="playing.fireSpell == null" class="lds-dual-ring"></span>

          <audio
            @play="playing.fireSpell = true"
            @pause="playing.fireSpell = false"
            ref="fireSpell"
            type="audio/mpeg"
          />
        </div>
        <div
          :class="{ playing: playing.windyScroll }"
          @click="play(windyScroll, 'windyScroll')"
        >
          <img src="@/assets/audios2/windyScroll.svg" alt="" />
          <span v-if="playing.windyScroll == null" class="lds-dual-ring"></span>

          <audio
            @play="playing.windyScroll = true"
            @pause="playing.windyScroll = false"
            ref="windyScroll"
            type="audio/mpeg"
          />
        </div>
        <div
          :class="{ playing: playing.spellBook }"
          @click="play(spellBook, 'spellBook')"
        >
          <img src="@/assets/audios2/spellBook.svg" alt="" />
          <span v-if="playing.spellBook == null" class="lds-dual-ring"></span>

          <audio
            @play="playing.spellBook = true"
            @pause="playing.spellBook = false"
            ref="spellBook"
            type="audio/mpeg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.heading {
  text-align: center;
  margin-bottom: 10rem;
  font-size: 3.5rem;
  font-weight: 500;
}
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  position: relative;
  /* background-color: #202020; */
  background-color: #3030307c;
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
  /* background-color: #252525; */
  background-color: #3535357c;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  box-shadow: #343434 3px 3px 6px 0px inset, #05050580 -3px -3px 6px 1px inset;
}

.ico-grid div:active {
  animation: button-pop 0.3s ease-out;
}
img {
  height: 8rem;
}

@media (orientation: portrait) {
  .ico-grid {
    grid-column-gap: 2rem;
  }
  img {
    height: 6rem;
  }
  .text-box ul li {
    font-size: 1.5rem;
  }
}
</style>
