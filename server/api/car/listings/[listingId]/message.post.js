import Joi from "joi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const schema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required(),
  phone: Joi.string()
    .pattern(/^[0-9]+$/)
    .required(),
  name: Joi.string().required(),
  message: Joi.string().min(10).required(),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { listingId } = event.context.params;

  const { error, value } = await schema.validate(body);

  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message,
    });
  }

  //body destructure'lamadan yapmak
  return prisma.message.create({
    data: {
      message: body.message,
      email: body.email,
      name: body.name,
      phone: body.phone,
      listingId: parseInt(listingId),
    },
  });
});
