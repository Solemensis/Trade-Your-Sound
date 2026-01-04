export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useSupabaseUser();

  // If not logged in, let the auth middleware handle it
  if (!user.value) {
    return;
  }

  // Fetch user's profile
  const specificUser = await $fetch("/api/producerProfile/specificUser");

  // If user doesn't have a profile or username, redirect to profile page
  if (!specificUser || !specificUser.user_name) {
    return navigateTo("/profile");
  }

  // User has a profile, continue to the requested page
  return;
});
