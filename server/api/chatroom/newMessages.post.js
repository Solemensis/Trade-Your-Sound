import { PrismaClient } from "@prisma/client";
import { serverSupabaseUser } from "#supabase/server";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);

  //control if there's new message
  const newMessage = await prisma.Messages.findFirst({
    where: {
      lister_id: {
        not: user.id,
      },
      read: false,
    },
  });
  return newMessage;
});
