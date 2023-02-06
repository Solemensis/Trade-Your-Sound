<template>
  <div>
    <h2>Please, share your opinion</h2>
    <div class="flex-whole">
      <div class="flex-left">
        <p>
          This website is in closed-beta stage right now, which means all the
          data will be deleted after beta ends, the reason we need this beta is
          to detect bugs and implement features before making this webapp a
          reality.
        </p>
        <p>
          So that's where your role comes to play. Can you just try the app
          functionality; login, fill your profile, try to add a sample mp3 file,
          scroll through producer profiles, send message to each other, etc?
        </p>
        <p>
          And as a conclusion, can you write me the struggles you had, or the
          features you want to be added?
        </p>
      </div>
      <div class="textarea-and-button">
        <textarea class="textarea"></textarea>
        <button class="hero-button">Send</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 5rem;
  font-size: 3.5rem;
  color: #dddddd;
  font-weight: 500;
}
.flex-left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 40%;
}
.flex-left p {
  font-size: 1.5rem;
  color: #bbb;
}
.flex-whole {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 10rem;
  gap: 4rem;
}
textarea {
  height: 15rem;
  border-radius: 0.5rem;
}
.textarea-and-button {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
.textarea-and-button button {
  padding: 0.5rem 5rem;
  color: #ddd;
}
</style>
