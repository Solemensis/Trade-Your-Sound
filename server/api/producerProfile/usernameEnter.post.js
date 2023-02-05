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
        related_link1: body.related_link1,
        related_link2: body.related_link2,
        related_link3: body.related_link3,
        related_link1_desc: body.related_link1_desc,
        related_link2_desc: body.related_link2_desc,
        related_link3_desc: body.related_link3_desc,
        description: body.description,
      },
    });
  }
});
