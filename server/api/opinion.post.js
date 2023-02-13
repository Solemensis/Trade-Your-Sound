import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const textContent = await readBody(event);

  //database event
  const opinion = await prisma.Opinions.create({
    data: {
      content: textContent,
    },
  });
  return opinion;
});
