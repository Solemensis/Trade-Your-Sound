import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const audio = await prisma.AudioListings.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!audio) {
    throw createError({
      statusCode: 404,
      statusMessage: `Audio with ID of ${id} does not exist`,
    });
  }
  return audio;
});
