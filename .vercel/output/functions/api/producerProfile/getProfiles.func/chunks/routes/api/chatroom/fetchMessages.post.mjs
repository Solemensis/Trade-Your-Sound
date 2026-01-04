import { d as defineEventHandler, r as readBody, a as prisma } from '../../../_/nitro.mjs';
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

const fetchMessages_post = defineEventHandler(async (event) => {
  const chatroom_id = await readBody(event);
  const fetchMessage = await prisma.Messages.findMany({
    where: {
      room_id: chatroom_id
    },
    orderBy: [
      {
        created_at: "asc"
      }
    ]
  });
  return fetchMessage;
});

export { fetchMessages_post as default };
//# sourceMappingURL=fetchMessages.post.mjs.map
