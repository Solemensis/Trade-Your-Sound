import { m as defineNuxtRouteMiddleware, b as useSupabaseUser, o as executeAsync, n as navigateTo } from './server.mjs';
import 'vue';
import '../_/nitro.mjs';
import '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/ssr';
import 'vue/server-renderer';

const requireProfile = defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  const user = useSupabaseUser();
  if (!user.value) {
    return;
  }
  const specificUser = ([__temp, __restore] = executeAsync(() => $fetch("/api/producerProfile/specificUser")), __temp = await __temp, __restore(), __temp);
  if (!specificUser || !specificUser.user_name) {
    return navigateTo("/profile");
  }
  return;
});

export { requireProfile as default };
//# sourceMappingURL=require-profile-BKbwcmsJ.mjs.map
