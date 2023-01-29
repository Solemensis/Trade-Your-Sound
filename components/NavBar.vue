<script setup>
const user = useSupabaseUser();
const client = useSupabaseAuthClient();

async function logout() {
  client.auth.signOut();
  navigateTo("/");
}
</script>

<template>
  <div>
    <header>
      <div class="nav-link-container" v-if="user">
        <div class="left-grouping">
          <NuxtLink class="logo" to="/">Sound Trader</NuxtLink>
          <NuxtLink to="/find-producer/">Producers</NuxtLink>
          <NuxtLink to="/shop">Shop</NuxtLink>
        </div>
        <div class="right-grouping">
          <NuxtLink to="/chat">Messages</NuxtLink>
          <NuxtLink to="/profile/listings">My Listings</NuxtLink>
          <NuxtLink to="/profile/">My Profile</NuxtLink>
          <p @click="logout">Logout</p>
        </div>
      </div>
      <div class="nav-link-container" v-else>
        <NuxtLink to="/">Sound Trader</NuxtLink>
        <NuxtLink to="/shop">Shop</NuxtLink>
        <NuxtLink to="/find-producer/">Producers</NuxtLink>
        <NuxtLink to="/login">Login</NuxtLink>
      </div>
    </header>
  </div>
</template>

<style scoped>
header {
  border-bottom: #262626 1px solid;
  height: 6rem;
  width: 100%;
  padding: 0 10rem;
  position: fixed;
}
header,
a,
a:active {
  color: #ededed;
}
.logo {
  color: #3fcf8e;
}

.nav-link-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.right-grouping,
.left-grouping {
  display: flex;
  align-items: center;
}
.right-grouping *,
.left-grouping * {
  margin-right: 3rem;
  font-size: 1.4rem;
  font-weight: 500;
  transition: 0.1s;
}
.right-grouping *:hover,
.left-grouping *:hover {
  color: #3fcf8e;
}
.right-grouping *:last-child {
  margin-right: 0;
}
.left-grouping *:first-child {
  font-weight: 600;
  font-size: 2.5rem;
  margin-right: 6rem;
}
</style>
