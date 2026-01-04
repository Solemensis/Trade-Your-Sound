import { prisma } from "../../utils/prisma.js";
import { serverSupabaseUser } from "#supabase/server";

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
