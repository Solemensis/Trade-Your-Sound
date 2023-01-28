<script setup>
const route = useRoute();

const category = computed(() => route.query.category);

const { data: profiles, error } = await useFetch(
  "/api/producerProfile/getProfiles",
  {
    query: {
      category: category,
    },
  }
);
</script>

<template>
  <div>
    <FindProducerSideBar />
    <div v-for="profile in profiles" :key="profile.id">
      <NuxtLink :to="`/profile/${profile.user_name}`"
        ><div>
          <h2>
            {{ profile.user_name }}
          </h2>
          <div>
            <p>{{ profile.categories }}</p>
            <p>{{ profile.equipment.length ? profile.equipment : "" }}</p>
            <p>{{ cutString(profile.updated_at) }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
