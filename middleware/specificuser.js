export default async function defineNuxtRouteMiddleware(to, from) {
  const user = useSupabaseUser();

  const userId = {
    userId: user.value.id,
  };

  const specificUser = await $fetch("/api/producerProfile/specificUser", {
    method: "post",
    body: userId,
  });

  if (specificUser.user_name) {
    return navigateTo(`/profile/${specificUser.user_name}`);
  }
  return;
}
