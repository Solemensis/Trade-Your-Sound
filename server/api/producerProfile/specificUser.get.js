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
  const producerProfile = await prisma.ProducerProfile.findUnique({
    where: {
      lister_id: user.id,
    },
  });

  return producerProfile;
});
