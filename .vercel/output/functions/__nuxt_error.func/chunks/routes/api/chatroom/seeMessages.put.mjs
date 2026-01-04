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

const seeMessages_put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const readMessage = await prisma.Messages.updateMany({
    where: {
      room_id: body.chatroom,
      lister_id: {
        not: body.userId
      }
    },
    data: {
      read: true
    }
  });
  return readMessage;
});

export { seeMessages_put as default };
//# sourceMappingURL=seeMessages.put.mjs.map
