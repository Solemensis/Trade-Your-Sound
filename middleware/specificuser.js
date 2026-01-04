export default defineNuxtRouteMiddleware(async (to, from) => {
  const specificUser = await $fetch("/api/producerProfile/specificUser");

  // If user has a profile with username, redirect to their profile
  if (specificUser && specificUser.user_name) {
    return navigateTo(`/profile/${specificUser.user_name}`);
  }
  // Otherwise, continue to the current route (e.g., profile setup page)
  return;
});
