import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  //database event
  return prisma.AudioListings.findMany({
    where: {
      lister_id: body.userId,
    },
    select: {
      audio: true,
      id: true,
      name: true,
      price: true,
    },
  });
});
