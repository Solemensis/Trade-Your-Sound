import { prisma } from "../../utils/prisma.js";

export default defineEventHandler(async (event) => {
  const message = await readBody(event);

  //body destructure
  const { content, lister_id, room_id } = message;

  //database event
  const createMessage = await prisma.Messages.create({
    data: {
      content: content,
      lister_id: lister_id,
      room_id: room_id,
      read: false,
    },
  });

  return createMessage;
});
