import Joi from "joi";
import { prisma } from "../../utils/prisma.js";

const schema = Joi.object({
  room_name: Joi.string().required(),
  user1_id: Joi.string().required(),
  user2_id: Joi.string().required(),
  user1_deleted: Joi.object().required(),
  user2_deleted: Joi.object().required(),
  user1_nick: Joi.string().required(),
  user2_nick: Joi.string().required(),
  listing_path: Joi.string().allow(""),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { error, value } = await schema.validate(body);

  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message,
    });
  }

  //body destructure
  const {
    room_name,
    user1_id,
    user2_id,
    user1_deleted,
    user2_deleted,
    user1_nick,
    user2_nick,
    listing_path,
  } = body;

  //database event
  const existingRoom = await prisma.ChatRooms.findFirst({
    where: { room_name: room_name, user1_id: user1_id, user2_id: user2_id },
  });
  if (existingRoom) {
    throw createError({
      statusCode: 412,
      statusMessage: "There is a same chatbox",
    });
  } else {
    const ChatRoom = await prisma.ChatRooms.create({
      data: {
        room_name,
        user1_id,
        user2_id,
        user1_deleted: user1_deleted,
        user2_deleted: user2_deleted,
        user1_nick,
        user2_nick,
        listing_path,
      },
    });
    return ChatRoom;
  }
});
