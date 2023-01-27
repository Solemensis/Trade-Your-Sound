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
  <div class="mt-32 flex">
    <FindProducerSideBar />
    <div v-for="profile in profiles" :key="profile.id">
      <NuxtLink :to="`/profile/${profile.user_name}`"
        ><div
          style="text-align: center"
          class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
        >
          <h2 style="font-size: 2rem">
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
