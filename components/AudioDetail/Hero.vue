<script setup>
const props = defineProps({
  audio: Object,
});

const config = useRuntimeConfig();

function landToListerPage() {
  navigateTo(`/profile/${props.audio.user_name}`);
}
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
      <p class="price"><span class="dollar-sign">$</span>{{ audio.price }}</p>

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
  font-size: 4.8rem;
  margin-right: 2rem;
}

.creator-tag {
  border: #267c55 1px solid;
  border-radius: 1rem;
  text-align: center;
  padding: 1.6rem;
}
.creator-box {
  font-size: 2rem;
  margin-bottom: 0.7rem;
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
  margin-bottom: 4rem;
  padding-left: 2.3rem;
  position: relative;
}

.description {
  font-size: 1.7rem;
}
</style>
