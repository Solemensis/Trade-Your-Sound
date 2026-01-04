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

  //control if there's new message
  const newMessage = await prisma.messages.findFirst({
    where: {
      lister_id: {
        not: userId,
      },
      read: false,
    },
  });
  return newMessage;
});
