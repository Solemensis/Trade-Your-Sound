import Joi from "joi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const schema = Joi.object({
  categories: Joi.array().items(Joi.string()).required(),
  equipment: Joi.array().items(Joi.string()).required(),
  related_link1: Joi.string().allow("", null),
  related_link2: Joi.string().allow("", null),
  related_link1_desc: Joi.string().allow("", null),
  related_link2_desc: Joi.string().allow("", null),
  description: Joi.string().required(),
  lister_id: Joi.string().required(),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { error, value } = await schema.validate(body);

  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message,
    });
  }

  //body destructure'ı ile yapmak
  const {
    categories,
    equipment,
    related_link1,
    related_link2,
    related_link1_desc,
    related_link2_desc,
    description,
    lister_id,
  } = body;

  //database event
  const producerProfile = await prisma.ProducerProfile.update({
    where: {
      lister_id: lister_id,
    },
    data: {
      categories: categories,
      equipment,
      related_link1,
      related_link2,
      related_link1_desc,
      related_link2_desc,
      description,
    },
  });

  return producerProfile;
});
