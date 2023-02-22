import { PrismaClient } from "@prisma/client";
import { serverSupabaseUser } from "#supabase/server";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const userId = await serverSupabaseUser(event);

  //database event
  const userRelatedChatRooms = await prisma.ChatRooms.findMany({
    where: {
      OR: [
        { user1_deleted: { equals: { userId: userId.id, deleted: false } } },
        { user2_deleted: { equals: { userId: userId.id, deleted: false } } },
      ],
    },
  });

  return userRelatedChatRooms;
});
