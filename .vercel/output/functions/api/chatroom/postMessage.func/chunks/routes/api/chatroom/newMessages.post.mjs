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

const newMessages_post = defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
  const newMessage = await prisma.Messages.findFirst({
    where: {
      lister_id: {
        not: user.id
      },
      read: false
    }
  });
  return newMessage;
});

export { newMessages_post as default };
//# sourceMappingURL=newMessages.post.mjs.map
