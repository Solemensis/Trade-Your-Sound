export default function defineNuxtRouteMiddleware(to, from) {
  const user = useSupabaseUser();
  if (user.value) {
    return;
  }
  return navigateTo("/login");
}
