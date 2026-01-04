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

const postMessage_post = defineEventHandler(async (event) => {
  const message = await readBody(event);
  const { content, lister_id, room_id } = message;
  const createMessage = await prisma.Messages.create({
    data: {
      content,
      lister_id,
      room_id,
      read: false
    }
  });
  return createMessage;
});

export { postMessage_post as default };
//# sourceMappingURL=postMessage.post.mjs.map
