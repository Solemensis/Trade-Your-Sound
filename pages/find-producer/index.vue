<script setup>
const route = useRoute();

const category = computed(() => route.query.category);
const LFopportunity = computed(() => route.query.opportunity);
const updated = computed(() => route.query.updated);

const profiles = ref([]);
onMounted(async () => {
  // setTimeout dışında çalışmıyor, setTimeout'suz birtek $fetch çalışıyor onMounted içinde.
  setTimeout(async () => {
    const { data, error, refresh } = await useFetch(
      "/api/producerProfile/getProfiles",
      {
        query: {
          category: category.value,
          opportunity: LFopportunity.value,
          updated: updated.value,
        },
      }
    );
    if (!data.value && error.value) {
      refresh();
      error.value = null;
    }
    profiles.value = data.value;
  }, 1);
});

watch(
  () => route.query,
  async () => {
    const { data } = await useFetch("/api/producerProfile/getProfiles", {
      query: {
        category: category.value,
        opportunity: LFopportunity.value,
        updated: updated.value,
      },
    });

    profiles.value = data.value;
  }
);
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
          <NuxtLink :to="`/profile/${profile.user_name}`">
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

                <div
                  v-if="
                    profile.relatedLinks &&
                    profile.relatedLinks[0].relatedLink1Desc
                  "
                  class="related-link"
                >
                  <span class="purple-span" style="font-size: 1.5rem">➜</span>
                  <p>
                    {{
                      truncateShortString(
                        profile.relatedLinks[0].relatedLink1Desc
                      )
                    }}
                  </p>
                </div>

                <div
                  class="fire"
                  v-if="profile.LFopportunity"
                  :key="profile.id"
                >
                  🔥
                  <p :key="profile.id" class="opportunity">
                    User currently looking for opportunities!
                  </p>
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
  width: 96vw;
  text-align: center;
  left: 50%;
  top: -10rem;
  transform: translateX(-50%);
  font-weight: 500;
  font-size: 3.7rem;
  color: #bbb;
  padding-left: 20rem;
}
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  padding-left: 20rem;
}
.flex-box-center {
  display: flex;
  justify-content: center;
  padding-top: 27rem;
  margin-left: 5rem;
}
.profile-card {
  /* background-color: #232323; */
  background-color: #25252587;
  border-radius: 0.8rem;
  padding: 1.8rem;
  position: relative;
  width: 30rem;
  height: 21rem;
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
  margin-bottom: 0.9rem;
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
  margin-bottom: 1.5rem;
}
.profile-card ul li {
  color: #888;
  white-space: nowrap;
}
.description {
  font-size: 1.3rem;
  color: #aaa;
  margin-bottom: 1.5rem;
  word-wrap: break-word;
  word-break: break-word;
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
.fire:hover .opportunity {
  opacity: 1;
}

.opportunity {
  opacity: 0;
  position: absolute;
  background-color: #5e2544;
  transition: 0.2s;
  border-radius: 0.3rem;
  top: -0.8rem;
  right: 3rem;
  font-size: 1.2rem;
  width: 15rem;
  padding: 0.5rem 1rem;
  color: #ddd;
}
.opportunity:hover {
  opacity: 0 !important;
}
.updated {
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
  color: #989898;
  font-size: 0.9rem;
}
</style>
