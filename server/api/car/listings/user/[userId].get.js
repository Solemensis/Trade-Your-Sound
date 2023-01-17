import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { userId } = event.context.params;

  return prisma.AudioListings.findMany({
    where: {
      listerId: userId,
    },
    select: {
      audio: true,
      id: true,
      name: true,
      price: true,
    },
  });
});
