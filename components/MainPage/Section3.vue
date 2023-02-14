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
  <div class="text-container">
    <h2 class="heading">
      The Things <span style="color: orangered">You Can't Do...</span>
    </h2>
    <div class="paragraphs">
      <p>
        Sadly, this app currently cannot accept audios longer than 30 seconds,
        and there are limitations to uploadable file formats as some of them are
        huge. Additionally, there is a 4 audio listing limit per user and some
        sound categories are forbidden due to their length.
      </p>
      <p>
        <span class="green-span">The reason</span> to these problems is that our
        database is running on free bandwidth right now, which has strict data
        size limitations, and audios are usually large file types.
      </p>
      <p>
        That's why soundscapes, ambiances, environmental sounds, musical pieces
        etc are not a part of listable audio categories as they are usually
        audio types longer than 30 seconds. Plus, only accepted file format is
        mp3 for now.
      </p>
      <p>
        Yet, there is no active-passive listing functionality. So if you want
        your audio listing to be unlisted/paused but still remain in your
        account to be editable and re-listed again, you can't do that and you
        need to delete your listing instead. Purpose of this is to keep database
        clean from unused audios and create space. For now this limitation is
        necessery.
      </p>
      <p>
        So if this project gets interest and a need to scale, i might start a
        "buymecoffee" funding account for database
        extension-hosting-maintenance-feature development expenses.
      </p>
    </div>
  </div>
</template>

<style scoped>
.text-container {
  width: 50%;
  margin-inline: auto;
  margin-bottom: 25rem;
}
.heading {
  font-size: 3.5rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 5rem;
}
.paragraphs {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  font-size: 1.8rem;
}
.paragraphs p {
  color: #ccc;
  line-height: 1.3;
}
</style>
