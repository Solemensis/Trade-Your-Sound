import Joi from "joi";
import { prisma } from "../../utils/prisma.js";

const schema = Joi.object({
  categories: Joi.array().items(Joi.string().required()),
  equipment: Joi.array().items(Joi.string().required()),
  relatedLinks: Joi.array().required(),
  description: Joi.string().min(10).required(),
  lister_id: Joi.string().required(),
  LFopportunity: Joi.boolean().required(),
  showProfile: Joi.boolean().required(),
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
    relatedLinks,
    description,
    lister_id,
    LFopportunity,
    showProfile,
  } = body;

  //database event
  const producerProfile = await prisma.ProducerProfile.update({
    where: {
      lister_id: lister_id,
    },
    data: {
      categories: categories,
      equipment,
      relatedLinks,
      description,
      LFopportunity,
      showProfile,
    },
  });

  return producerProfile;
});
