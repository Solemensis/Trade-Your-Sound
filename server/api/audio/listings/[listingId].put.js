import Joi from "joi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const schema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().min(0).required(),
  category: Joi.string().required(),
  processing: Joi.string().required(),
  description: Joi.string().min(10).required(),
  lister_id: Joi.string().required(),
  audio: Joi.string().required(),
});

export default defineEventHandler(async (event) => {
  const { listingId } = event.context.params;

  const body = await readBody(event);

  const { error, value } = await schema.validate(body);

  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message,
    });
  }

  //body destructure'ı ile yapmak
  const { name, price, category, processing, description, lister_id, audio } =
    body;

  //database event
  const AudioListing = await prisma.AudioListings.update({
    where: {
      id: parseInt(listingId),
    },
    data: {
      name,
      price,
      category,
      processing,
      description,
      lister_id,
      audio,
    },
  });

  return AudioListing;
});
