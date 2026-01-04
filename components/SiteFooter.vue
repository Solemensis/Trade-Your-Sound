<script setup>
const user = useSupabaseUser();
const userName = useState("userName", () => "");

const profileHref = computed(() => {
  return userName.value ? `/profile/${userName.value}` : "/profile";
});
</script>

<template>
  <footer class="footer">
    <div class="inner">
      <div class="left">
        <NuxtLink class="logo" to="/">Sound Trader</NuxtLink>
        <nav class="links" aria-label="Footer">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/find-producer/">Producers</NuxtLink>
          <NuxtLink to="/shop">Shop</NuxtLink>
          <NuxtLink v-if="user" to="/chat">Messages</NuxtLink>
          <NuxtLink v-if="user" to="/profile/listings">My Listings</NuxtLink>
          <NuxtLink v-if="user" :to="profileHref">My Profile</NuxtLink>
          <NuxtLink v-else to="/login">Login</NuxtLink>
        </nav>
      </div>

      <div class="right">
        <p class="copyright">@2023 Solemensis</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: #262626 1px solid;
  width: 100%;
  backdrop-filter: blur(0.3rem);
}

.inner {
  max-width: 120rem;
  margin: 0 auto;
  padding: 2rem 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.left {
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
}

.logo {
  color: #3fcf8e;
  font-weight: 600;
  font-size: 1.8rem;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.links a {
  font-size: 1.3rem;
  font-weight: 500;
  transition: 0.1s;
}

.links a:hover {
  color: #3fcf8e;
}

.copyright {
  font-size: 1.1rem;
  color: rgb(81, 81, 81);
}

@media (orientation: portrait) {
  .inner {
    padding: 2rem 3rem;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
