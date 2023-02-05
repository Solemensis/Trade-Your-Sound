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
          <p style="cursor: pointer" @click="logout">Logout</p>
        </div>
      </div>
      <div class="nav-link-container" v-else>
        <div class="left-grouping">
          <NuxtLink class="logo" to="/">Sound Trader</NuxtLink>
          <NuxtLink to="/find-producer/">Producers</NuxtLink>
          <NuxtLink to="/shop">Shop</NuxtLink>
        </div>
        <div class="right-grouping">
          <NuxtLink class="login-button" to="/login">Login</NuxtLink>
        </div>
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
  z-index: 100;
  backdrop-filter: blur(0.3rem);
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

.login-button {
  background-image: linear-gradient(
    to right,
    #9918b3 0%,
    #6a24a7 51%,
    #9918b3 100%
  );
  padding: 0.5rem 1rem;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  border-radius: 0.5rem;
  display: block;
}

.login-button:hover {
  background-position: right center;
  color: #ededed;
}
</style>
