import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { listingId } = event.context.params;

  return prisma.AudioListings.delete({
    where: {
      id: parseInt(listingId),
    },
  });
});
