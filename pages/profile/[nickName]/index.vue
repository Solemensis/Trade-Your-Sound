<script setup>
definePageMeta({
  layout: "custom",
  // middleware: ["auth"],
});
const route = useRoute();
const user = useSupabaseUser();

//fetch profile information of the logged user
const { data, refresh, error } = await useFetch(
  `/api/producerProfile/${route.params.nickName}`
);

const profileEditToggle = useState("profileEditToggle", () => false);

const carryRefetchSignal = useState("carryRefetchSignal");
watch(
  () => carryRefetchSignal.value,
  () => {
    refresh();
  }
);
</script>

<template>
  <div>
    <div>
      <h1>profile: {{ data.user_name }}</h1>
      <div
        @click="profileEditToggle = !profileEditToggle"
        v-if="user && user.id === data.lister_id"
      >
        <button v-if="!profileEditToggle">edit page</button>
      </div>
      <h3>created: {{ cutString(data.created_at) }}</h3>
      <h3>updated: {{ cutString(data.updated_at) }}</h3>
    </div>

    <!-- editable data -->
    <div v-if="!profileEditToggle">
      <h2>{{ data.user_name }}</h2>
      <div>
        <p v-for="category in data.categories">✔️{{ category }}</p>
      </div>
      <div>
        <p v-for="item in data.equipment">✔️{{ item }}</p>
      </div>

      <h2>{{ data.related_link1_desc }}</h2>
      <a :href="data.related_link1">Link1</a>
      <h2>{{ data.related_link2_desc }}</h2>
      <a :href="data.related_link2">Link2</a>

      <p>{{ data.description }}</p>
    </div>
    <div v-else>
      <EditModesProfileEditMode :data="data" />
    </div>
  </div>
</template>
