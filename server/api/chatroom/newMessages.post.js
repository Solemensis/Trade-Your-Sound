import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const userId = await readBody(event);
  //control if there's new message
  const newMessage = await prisma.Messages.findFirst({
    where: {
      lister_id: {
        not: userId,
      },
      read: false,
    },
  });
  return newMessage;
});
