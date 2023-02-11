import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import Joi, { allow } from "joi";

const schema = Joi.object({
  terms: Joi.boolean().invalid(false).required(),
  user_name: Joi.string().required(),
  lister_id: Joi.string().required(),
  admin: Joi.boolean().invalid(true).required(),
  LFopportunity: Joi.boolean(),
  showProfile: Joi.boolean().required(),
  relatedLinks: Joi.array().required(),
  description: Joi.string().allow(""),
});

export default defineEventHandler(
  async (event) => {
    const body = await readBody(event);

    const { error, value } = await schema.validate(body);

    if (error) {
      throw createError({
        statusCode: 412,
        statusMessage: error.message,
      });
    }

    // if (body.terms === true && body.user_name) {
    return prisma.ProducerProfile.create({
      data: {
        user_name: body.user_name,
        lister_id: body.lister_id,
        admin: false,
        LFopportunity: false,
        showProfile: false,
        terms: Boolean(body.terms),
        relatedLinks: body.relatedLinks,
        description: body.description,
      },
    });
  }
  // }
);
