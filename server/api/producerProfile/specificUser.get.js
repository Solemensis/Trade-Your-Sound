import { prisma } from "../../utils/prisma.js";
import { serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);

  // Get user ID (Supabase returns it as 'sub' in JWT or 'id' in user object)
  const userId = user?.id || user?.sub;

  // Return null if user is not authenticated
  if (!userId) {
    return null;
  }

  //database event
  const producerProfile = await prisma.producerProfile.findUnique({
    where: {
      lister_id: userId,
    },
  });

  return producerProfile;
});
