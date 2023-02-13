<script setup>
const route = useRoute();

const category = computed(() => route.query.category);
const LFopportunity = computed(() => route.query.opportunity);

const { data: profiles, refresh } = await useFetch(
  "/api/producerProfile/getProfiles",
  {
    query: {
      category: category,
      opportunity: LFopportunity,
    },
  }
);
watch(
  () => route.query,
  () => refresh()
);

const opportunityActive = ref(false);
</script>

<template>
  <div>
    <FindProducerSideBar />

    <div class="flex-box-center">
      <div style="position: relative" class="cards">
        <h2 class="find-producer">
          Find <span class="green-span">Producers</span>
        </h2>

        <div
          v-if="profiles && profiles.length"
          class="flex-box"
          v-for="profile in profiles"
          :key="profile.id"
        >
          <NuxtLink
            v-if="profiles.length"
            :to="`/profile/${profile.user_name}`"
          >
            <div class="profile-card">
              <h2>
                {{ profile.user_name }}
              </h2>
              <p class="description">
                {{ truncateString(profile.description) }}
              </p>
              <div>
                <ul>
                  <li
                    class="categories"
                    v-for="category in profile.categories"
                    :key="category"
                  >
                    ✔️ {{ formatString(category) }}
                  </li>
                </ul>

                <div v-if="profile.related_link1_desc" class="related-link">
                  <span class="purple-span" style="font-size: 1.5rem">➜</span>
                  <p>{{ truncateShortString(profile.related_link1_desc) }}</p>
                </div>

                <div
                  class="fire"
                  @mouseenter="opportunityActive = true"
                  @mouseout="opportunityActive = false"
                  v-if="profile.LFopportunity"
                >
                  🔥
                  <transition name="page">
                    <p
                      :key="profile.id"
                      v-show="opportunityActive"
                      class="opportunity"
                      v-if="profile.LFopportunity"
                    >
                      User currently looking for opportunities!
                    </p>
                  </transition>
                </div>

                <p class="updated">
                  Updated at {{ cutString(profile.updated_at) }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
        <h2 style="color: #ff4545; grid-column-start: span 2" v-else>
          No Producer Found With These Filters
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.find-producer {
  position: absolute;
  width: 80vw;
  text-align: center;
  left: 50%;
  top: -11rem;
  transform: translateX(-50%);
  font-weight: 500;
  font-size: 3.7rem;
  color: #bbb;
}
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
}
.flex-box-center {
  display: flex;
  justify-content: center;
  padding-top: 25rem;
  margin-left: 5rem;
}
.profile-card {
  background-color: #232323;
  border-radius: 0.8rem;
  padding: 1.8rem;
  position: relative;
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: 0.2s;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.profile-card:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transform: translateY(-1%);
}

.profile-card h2 {
  color: #3fcf8e;
  font-size: 2.3rem;
  margin-bottom: 1.3rem;
  font-weight: 500;
  transition: 0.2s;
}

.profile-card ul {
  list-style: none;
  font-size: 1.2rem;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 0.6rem;
  grid-row-gap: 0.2rem;
  margin-bottom: 2rem;
}
.profile-card ul li {
  color: #888;
  white-space: nowrap;
}
.description {
  font-size: 1.3rem;
  color: #aaa;
  margin-bottom: 2rem;
}
.related-link {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.related-link p {
  color: #999;
  font-size: 1.1rem;
  transition: 0.2s;
}

.fire {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  font-size: 1.5rem;
}
.opportunity {
  position: absolute;
  background-color: #510d32;
  transition: 0.2s;
  border-radius: 0.3rem;
  top: -0.8rem;
  right: 3rem;
  font-size: 1.2rem;
  width: 15rem;
  padding: 0.5rem 1rem;
  color: #ddd;
}
.updated {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  color: #989898;
  font-size: 0.9rem;
}
</style>
