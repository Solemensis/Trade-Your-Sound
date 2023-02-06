<template>
  <div class="hero-section">
    <div class="hero-text-box">
      <h1 class="hero-secondary-heading">Audio Trading App</h1>
      <h3 class="hero-heading">
        Pick your <span class="green-span">sound</span>
      </h3>

      <p class="hero-description">
        <span class="green-span">Sell</span> your sounds, contact producers
        across the globe. <br />Just click the button to learn more!
      </p>
      <button class="hero-button">What is This?</button>
    </div>
    <img class="hero-img" src="@/assets/images/1.png" alt="" />
  </div>
</template>

<style scoped>
.hero-section {
  width: 100%;
  height: 105vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6rem;
}
.hero-text-box {
  color: #ededed;
  width: 50%;
}
.hero-heading {
  font-size: 6rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
}
.hero-secondary-heading {
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 0.4rem;
  color: #989898;
}
.hero-description {
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 3rem;
  line-height: 1.5;
  color: #b8b8b8;
  width: clamp(50%, 50rem, 80%);
}
.hero-img {
  height: 25%;
  animation: hue-rotate alternate 20s infinite linear;
}
@keyframes hue-rotate {
  0% {
    filter: hue-rotate(0);
  }
  100% {
    filter: hue-rotate(240deg);
  }
}
</style>
