import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  //database event
  const producerProfile = await prisma.ProducerProfile.findUnique({
    where: {
      lister_id: body.userId,
    },
  });

  return producerProfile;
});
