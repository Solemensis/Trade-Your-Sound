import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  //body destructure'lamadan database event

  if (body.terms === true && body.user_name) {
    return prisma.ProducerProfile.create({
      data: {
        user_name: body.user_name,
        lister_id: body.lister_id,
        admin: false,
        LFopportunity: false,
        terms: Boolean(body.terms),
      },
    });
  }
});
