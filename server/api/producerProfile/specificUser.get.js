import { PrismaClient } from "@prisma/client";
import { serverSupabaseUser } from "#supabase/server";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);

  //database event
  const producerProfile = await prisma.producerProfile.findUnique({
    where: {
      lister_id: user.id,
    },
  });

  return producerProfile;
});
