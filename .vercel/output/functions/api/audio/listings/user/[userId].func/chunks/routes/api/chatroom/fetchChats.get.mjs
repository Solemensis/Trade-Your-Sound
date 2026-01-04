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

const fetchChats_get = defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
  const userRelatedChatRooms = await prisma.ChatRooms.findMany({
    where: {
      OR: [
        { user1_deleted: { equals: { userId: user.id, deleted: false } } },
        { user2_deleted: { equals: { userId: user.id, deleted: false } } }
      ]
    }
  });
  return userRelatedChatRooms;
});

export { fetchChats_get as default };
//# sourceMappingURL=fetchChats.get.mjs.map
