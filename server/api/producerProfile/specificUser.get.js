import { prisma } from "../../utils/prisma.js";
import { serverSupabaseUser } from "#supabase/server";

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
