<script setup>
const props = defineProps({
  audio: Object,
});

const config = useRuntimeConfig();

function landToListerPage() {
  navigateTo(`/profile/${props.audio.user_name}`);
}

const reRenderComponent = ref(true);
</script>
<template>
  <div>
    <p class="category-processing">
      {{ audio.category }} | {{ audio.processing }}
    </p>
    <div class="name-box">
      <h2 class="listing-name">{{ audio.name }}</h2>
      <div class="creator-tag">
        <p class="creator-box" @click="landToListerPage">
          Created by: <span class="creator">{{ audio.user_name }}</span>
        </p>
        <div>
          <p class="created-updated">
            Listed: {{ cutString(audio.created_at) }} - Updated:
            {{ cutString(audio.updated_at) }}
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="price-file-box">
        <p class="price"><span class="dollar-sign">$</span>{{ audio.price }}</p>

        <AudioDetailFile :audio="audio.audio" v-if="reRenderComponent" />
      </div>
      <p class="description">
        {{ audio.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.name-box {
  display: flex;
  align-items: center;
}
.listing-name {
  font-size: 3.5rem;
  margin-right: 1rem;
  margin-bottom: 4rem;
  font-weight: 500;
}

.creator-tag {
  border: #353535 1px solid;
  border-radius: 1rem;
  text-align: center;
  padding: 1.2rem;
  position: absolute;
  right: 0.5rem;
  top: 0;
}

.creator-box {
  font-size: 1.8rem;
  margin-bottom: 0.6rem;
}
.creator {
  color: #c5f;
  transition: 0.2s;
}
.creator:hover {
  cursor: pointer;
}
.created-updated {
  color: #a8a8a8;
}

.category-processing {
  display: flex;
  font-size: 1.6rem;
  color: #a8a8a8;
  margin-bottom: 1.5rem;
}

.dollar-sign {
  position: absolute;
  left: 1rem;
  top: 1.7rem;
  font-size: 1.7rem;
  font-weight: 500;
  color: #ededed;
}
.price {
  font-size: 3rem;
  background-color: #206847;
  color: #ededed;
  display: inline-block;
  padding: 1.1rem 1.5rem;
  border-radius: 1rem;
  font-weight: 700;
  padding-left: 2.3rem;
  position: relative;
}
.price-file-box {
  display: flex;
  align-items: center;
  margin-bottom: 6rem;
  justify-content: space-between;
}

.description {
  font-size: 1.6rem;
  margin-bottom: 4.5rem;
  color: #ccc;
  line-height: 1.3;
}
</style>
