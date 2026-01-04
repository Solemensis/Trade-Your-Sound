import { d as defineEventHandler, r as readBody, c as createError, a as prisma } from '../../../_/nitro.mjs';
import { J as Joi } from '../../../virtual/index.mjs';
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
import '@hapi/hoek/lib/assert';
import '@hapi/hoek/lib/clone';
import '@hapi/hoek/lib/error';
import '@hapi/hoek/lib/escapeHtml';
import '@sideway/formula';
import '@hapi/hoek/lib/reach';
import '@hapi/hoek/lib/deepEqual';
import '@sideway/pinpoint';
import '@hapi/hoek/lib/merge';
import '@hapi/hoek/lib/ignore';
import '@hapi/hoek/lib/applyToDefaults';
import '@hapi/topo';
import '@sideway/address/lib/domain';
import '@sideway/address/lib/email';
import '@sideway/address/lib/ip';
import '@hapi/hoek/lib/escapeRegex';
import '@sideway/address/lib/tlds';
import '@sideway/address/lib/uri';

const schema = Joi.object({
  room_name: Joi.string().required(),
  user1_id: Joi.string().required(),
  user2_id: Joi.string().required(),
  user1_deleted: Joi.object().required(),
  user2_deleted: Joi.object().required(),
  user1_nick: Joi.string().required(),
  user2_nick: Joi.string().required(),
  listing_path: Joi.string().allow("")
});
const createChat_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { error, value } = await schema.validate(body);
  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message
    });
  }
  const {
    room_name,
    user1_id,
    user2_id,
    user1_deleted,
    user2_deleted,
    user1_nick,
    user2_nick,
    listing_path
  } = body;
  const existingRoom = await prisma.ChatRooms.findFirst({
    where: { room_name, user1_id, user2_id }
  });
  if (existingRoom) {
    throw createError({
      statusCode: 412,
      statusMessage: "There is a same chatbox"
    });
  } else {
    const ChatRoom = await prisma.ChatRooms.create({
      data: {
        room_name,
        user1_id,
        user2_id,
        user1_deleted,
        user2_deleted,
        user1_nick,
        user2_nick,
        listing_path
      }
    });
    return ChatRoom;
  }
});

export { createChat_post as default };
//# sourceMappingURL=createChat.post.mjs.map
