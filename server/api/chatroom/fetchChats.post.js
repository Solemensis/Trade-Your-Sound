import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const userId = await readBody(event);
  //database event
  const userRelatedChatRooms = await prisma.ChatRooms.findMany({
    where: {
      OR: [
        { user1_deleted: { equals: { userId: userId, deleted: false } } },
        { user2_deleted: { equals: { userId: userId, deleted: false } } },
      ],
    },
  });

  if (!userRelatedChatRooms) {
    throw createError({
      statusCode: 404,
      statusMessage: `No chatroom exists with current user`,
    });
  }
  return userRelatedChatRooms;
});
