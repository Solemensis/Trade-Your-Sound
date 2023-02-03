import Joi from "joi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const schema = Joi.object({
  categories: Joi.array().items(Joi.string().required()),
  equipment: Joi.array().items(Joi.string().required()),
  related_link1: Joi.string().allow("", null),
  related_link2: Joi.string().allow("", null),
  related_link3: Joi.string().allow("", null),
  related_link1_desc: Joi.string().allow("", null),
  related_link2_desc: Joi.string().allow("", null),
  related_link3_desc: Joi.string().allow("", null),
  description: Joi.string().min(10).required(),
  lister_id: Joi.string().required(),
  LFopportunity: Joi.boolean().required(),
  whatsappCountry: Joi.string().allow("", null),
  whatsappGsm: Joi.string().allow("", null),
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
    related_link3,
    related_link1_desc,
    related_link2_desc,
    related_link3_desc,
    description,
    lister_id,
    LFopportunity,
    whatsappCountry,
    whatsappGsm,
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
      related_link3,
      related_link1_desc,
      related_link2_desc,
      related_link3_desc,
      description,
      LFopportunity,
      whatsappCountry,
      whatsappGsm,
    },
  });

  return producerProfile;
});
