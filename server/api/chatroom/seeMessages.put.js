import { prisma } from "../../utils/prisma.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  //database event
  const readMessage = await prisma.Messages.updateMany({
    where: {
      room_id: body.chatroom,
      lister_id: {
        not: body.userId,
      },
    },
    data: {
      read: true,
    },
  });

  return readMessage;
});
