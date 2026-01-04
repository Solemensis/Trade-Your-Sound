import { m as defineNuxtRouteMiddleware, b as useSupabaseUser, n as navigateTo } from './server.mjs';
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

const auth = defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  if (user.value) {
    return;
  }
  return navigateTo("/login");
});

export { auth as default };
//# sourceMappingURL=auth-BJCnqWYl.mjs.map
