<template>
  <div class="flex-whole">
    <div class="flex-left">
      <div>
        <h3 class="green-span">You can share your opinions with me.</h3>
        <p>
          In addition to database limitations, this website is at closed-beta
          stage right now:
        </p>
      </div>
      <p>
        What this means is that all the user data will be deleted after the beta
        ends. The reason i need this beta stage is to detect bugs, fix them and
        implement necessery features before making this webapp a reality.
      </p>
      <p>
        You can play a role in this aswell by just filling your profile with
        some empty fill-in information, creating an audio listing with a sample
        file, and just surfing the functionality of the web in general.
      </p>
      <p>
        And as a conclusion, you can write me the functional struggles-user
        interface design/accessibility problems you've experienced, or the
        features you would want to be added.
      </p>
      <p>
        Plus, i would appreciate legal assistance about writing terms of usage
        of the webapp, and guidance between my rights and the audio uploaders
        rights with the uploaded file, and information in licensing uploaded
        files.
      </p>
    </div>
    <div class="textarea-and-button">
      <textarea class="textarea"></textarea>
      <button class="hero-button">Send Message</button>
    </div>
  </div>
</template>

<style scoped>
.flex-left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 45%;
  margin-inline: auto;
}
.flex-left h3 {
  font-size: 2rem;
  margin-bottom: 2.5rem;
  font-weight: 500;
}
.flex-left p {
  font-size: 1.7rem;
  color: #ccc;
  line-height: 1.4;
}
.flex-whole {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 10rem;
  gap: 4rem;
}
textarea {
  height: 15rem;
  border-radius: 0.5rem;
  width: 100%;
}
.textarea-and-button {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin-inline: auto;
  width: 45%;
}
.textarea-and-button button {
  padding: 0.5rem 5rem;
  color: #ddd;
}
</style>
