import Joi from "joi";
import { prisma } from "../../../utils/prisma.js";

const schema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().min(0).required(),
  category: Joi.string().required(),
  processing: Joi.string().required(),
  description: Joi.string().min(10).required(),
  lister_id: Joi.string().required(),
  audio: Joi.string().required(),
  user_name: Joi.string().required(),
  producer_id: Joi.number().required(),
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
    name,
    price,
    category,
    processing,
    description,
    lister_id,
    audio,
    user_name,
    producer_id,
  } = body;

  //database event
  const AudioListing = await prisma.AudioListings.create({
    data: {
      name,
      price,
      category,
      processing,
      description,
      lister_id,
      audio,
      user_name,
      producer_id,
    },
  });

  return AudioListing;
});
