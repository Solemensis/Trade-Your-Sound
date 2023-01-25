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

function cutString(str) {
  let index = str.indexOf("T");
  if (index === -1) {
    return str;
  }
  return str.slice(0, index);
}

const editToggle = useState("editToggle", () => false);

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
    <div class="mt-24">
      <h1 class="text-6xl">My Profile</h1>
      <div
        @click="editToggle = !editToggle"
        v-if="user && user.id === data.lister_id"
      >
        <button
          v-if="!editToggle"
          class="bg-purple-400 text-white rounded py-2 px-7 mt-3"
        >
          edit page
        </button>
      </div>
      <h3>created: {{ cutString(data.created_at) }}</h3>
      <h3>updated: {{ cutString(data.updated_at) }}</h3>
    </div>

    <!-- editable data -->
    <div
      v-if="!editToggle"
      class="shadow rounded p-3 mt-5 flex flex-wrap justify-between"
    >
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
