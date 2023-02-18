import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const chatroom_id = await readBody(event);

  //database event
  const fetchMessage = await prisma.Messages.findMany({
    where: {
      room_id: chatroom_id,
    },
    orderBy: [
      {
        created_at: "asc",
      },
    ],
  });

  return fetchMessage;
});
