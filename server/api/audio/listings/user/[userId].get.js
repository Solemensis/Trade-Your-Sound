import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { userId } = event.context.params;

  //database event
  return prisma.AudioListings.findMany({
    where: {
      lister_id: userId,
    },
    select: {
      audio: true,
      id: true,
      name: true,
      price: true,
    },
  });
});
