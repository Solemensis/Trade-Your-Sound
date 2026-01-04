import { prisma } from "../../utils/prisma.js";

export default defineEventHandler(async (event) => {
  const { producerNickname } = event.context.params;

  const producerProfile = await prisma.ProducerProfile.findUnique({
    where: {
      user_name: producerNickname,
    },
  });

  if (!producerProfile) {
    throw createError({
      statusCode: 404,
      statusMessage: `User with that nickname does not exist`,
    });
  }

  return producerProfile;
});
