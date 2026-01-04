import { prisma } from "../../utils/prisma.js";
import { serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }

  //database event
  const userRelatedChatRooms = await prisma.ChatRooms.findMany({
    where: {
      OR: [
        { user1_deleted: { equals: { userId: user.id, deleted: false } } },
        { user2_deleted: { equals: { userId: user.id, deleted: false } } },
      ],
    },
  });

  return userRelatedChatRooms;
});
