<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const client = useSupabaseAuthClient();

async function logout() {
  client.auth.signOut();
  navigateTo("/");
}

const userName = useState("userName", () => "");

//fetch userprofile
onMounted(async () => {
  setTimeout(async () => {
    if (user.value && user.value.id) {
      const { data, error, refresh } = await useFetch(
        "/api/producerProfile/specificUser"
      );

      if (error.value) {
        error.value = null;
        refresh();
      } else if (data.value) {
        userName.value = data.value.user_name;
      }
    }
  }, 1);
});

function goToProfile() {
  if (userName.value) {
    navigateTo(`/profile/${userName.value}`);
  } else {
    navigateTo("/profile");
  }
}

// const newMessage = ref(false);

// onMounted(async () => {
//   if (user) {
//     const data = await $fetch("/api/chatroom/newMessages");

//     if (Boolean(data)) {
//       newMessage.value = true;
//     }
//   }

//   // Listen to database message inserts
//   supabase
//     .channel("custom-filter-channel")
//     .on(
//       "postgres_changes",
//       {
//         event: "INSERT",
//         schema: "public",
//         table: "Messages",
//       },
//       async (payload) => {
//         if (user) {
//           // //payload bilgisi eşleşiyosa mesajın read:false'unu fetchle
//           // if (payload) {
//           // }

//           const data = await $fetch("/api/chatroom/newMessages", {
//             method: "post",
//             body: user.value.id,
//           });

//           if (Boolean(data)) {
//             newMessage.value = true;
//           }
//         }
//       }
//     )
//     .subscribe();
// });

//adding-removing opacity class from mobile-menu
function openMobileMenu() {
  if (menuOpenOpacity.value) {
    menuOpenOpacity.value = null;
  } else {
    menuOpenOpacity.value = "opacity";
  }
}
const menuOpenOpacity = ref(null);
function closeMobileMenu() {
  menuOpenOpacity.value = null;
}
</script>

<template>
  <div class="container">
    <header>
      <h4
        style="
          position: absolute;
          left: 0.5rem;
          bottom: 0.3rem;
          font-size: 0.9rem;
          color: rgb(81, 81, 81);
        "
      >
        @2023 Solemensis
      </h4>
      <div class="nav-link-container" v-if="user">
        <div class="left-grouping">
          <NuxtLink class="logo" to="/" @click="closeMobileMenu"
            >Sound Trader</NuxtLink
          >
          <NuxtLink to="/find-producer/" @click="closeMobileMenu"
            >Producers</NuxtLink
          >
          <NuxtLink to="/shop" @click="closeMobileMenu">Shop</NuxtLink>
        </div>
        <div class="right-grouping">
          <NuxtLink to="/chat">
            <!-- <span v-if="newMessage">@</span> -->
            Messages</NuxtLink
          >
          <NuxtLink to="/profile/listings">My Listings</NuxtLink>
          <p style="cursor: pointer" @click="goToProfile">My Profile</p>
          <p style="cursor: pointer" @click="logout">Logout</p>
        </div>
        <img
          @click="openMobileMenu"
          class="hamburger-menu-ico"
          src="@/assets/hamburger.svg"
          alt="menu button"
        />
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
        <div class="right-grouping-mobile">
          <NuxtLink class="login-button" to="/login">Login</NuxtLink>
        </div>
      </div>
    </header>
    <Teleport v-if="user" to="body">
      <div
        :class="[menuOpenOpacity]"
        @click="closeMobileMenu"
        class="mobile-menu"
      >
        <NuxtLink to="/chat">Messages</NuxtLink>
        <NuxtLink to="/profile/listings">My Listings</NuxtLink>
        <p @click="goToProfile">My Profile</p>
        <p @click="logout">Logout</p>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
header {
  border-bottom: #262626 1px solid;
  height: 6rem;
  width: 100%;
  padding: 0 8rem;
  position: fixed;
  backdrop-filter: blur(0.3rem);
  z-index: 10000;
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
.right-grouping-mobile * {
  font-size: 1.4rem;
  font-weight: 500;
  z-index: 9999;
}
.right-grouping-mobile {
  display: none;
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

.hamburger-menu-ico {
  width: 2rem;
  display: none;
}
.mobile-menu {
  display: none;
}
.opacity {
  opacity: 1 !important;
}

@media (orientation: portrait) {
  .hamburger-menu-ico {
    display: block;
  }
  .mobile-menu {
    display: block;
    position: absolute;
    right: 0;
    top: 6rem;
    background-color: #6036547f;
    padding: 2rem 2rem;
    text-align: center;
    border-bottom-left-radius: 1rem;
    opacity: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: 0.2s;
    z-index: 9999;
  }
  .mobile-menu * {
    font-size: 1.4rem;
    font-weight: 500;
  }

  .right-grouping {
    display: none;
  }
  .right-grouping-mobile {
    display: block;
  }
  header {
    padding: 0 3rem;
  }

  .left-grouping *:first-child {
    margin-right: 4rem;
  }
  .left-grouping * {
    margin-right: 2rem;
  }
}
</style>
