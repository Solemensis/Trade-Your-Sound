import { prisma } from "../../utils/prisma.js";
import { serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);

  // Get user ID (Supabase returns it as 'sub' in JWT or 'id' in user object)
  const userId = user?.id || user?.sub;

  if (!userId) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }

  //database event
  const userRelatedChatRooms = await prisma.chatRooms.findMany({
    where: {
      OR: [
        { user1_deleted: { equals: { userId: userId, deleted: false } } },
        { user2_deleted: { equals: { userId: userId, deleted: false } } },
      ],
    },
  });

  return userRelatedChatRooms;
});
