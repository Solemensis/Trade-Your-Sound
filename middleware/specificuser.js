export default async function defineNuxtRouteMiddleware(to, from) {
  const user = useSupabaseUser();

  const specificUser = await $fetch("/api/producerProfile/specificUser");

  if (specificUser.user_name) {
    return navigateTo(`/profile/${specificUser.user_name}`);
  }
  return;
}
