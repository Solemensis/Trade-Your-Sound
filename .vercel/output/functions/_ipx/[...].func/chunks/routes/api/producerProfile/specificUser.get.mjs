import { d as defineEventHandler, a as prisma } from '../../../_/nitro.mjs';
import { s as serverSupabaseUser } from '../../../_/serverSupabaseUser.mjs';
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
import '@supabase/ssr';

const specificUser_get = defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
  const producerProfile = await prisma.producerProfile.findUnique({
    where: {
      lister_id: user.id
    }
  });
  return producerProfile;
});

export { specificUser_get as default };
//# sourceMappingURL=specificUser.get.mjs.map
