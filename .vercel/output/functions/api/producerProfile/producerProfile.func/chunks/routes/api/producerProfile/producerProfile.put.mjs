import { d as defineEventHandler, r as readBody, c as createError, a as prisma } from '../../../_/nitro.mjs';
import { J as Joi } from '../../../virtual/index.mjs';
import '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@hapi/hoek/lib/assert';
import '@hapi/hoek/lib/clone';
import '@hapi/hoek/lib/error';
import '@hapi/hoek/lib/escapeHtml';
import '@sideway/formula';
import '@hapi/hoek/lib/reach';
import '@hapi/hoek/lib/deepEqual';
import '@sideway/pinpoint';
import '@hapi/hoek/lib/merge';
import '@hapi/hoek/lib/ignore';
import '@hapi/hoek/lib/applyToDefaults';
import '@hapi/topo';
import '@sideway/address/lib/domain';
import '@sideway/address/lib/email';
import '@sideway/address/lib/ip';
import '@hapi/hoek/lib/escapeRegex';
import '@sideway/address/lib/tlds';
import '@sideway/address/lib/uri';

const schema = Joi.object({
  categories: Joi.array().items(Joi.string().required()),
  equipment: Joi.array().items(Joi.string().required()),
  relatedLinks: Joi.array().required(),
  description: Joi.string().min(10).required(),
  lister_id: Joi.string().required(),
  LFopportunity: Joi.boolean().required(),
  showProfile: Joi.boolean().required()
});
const producerProfile_put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { error, value } = await schema.validate(body);
  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message
    });
  }
  const {
    categories,
    equipment,
    relatedLinks,
    description,
    lister_id,
    LFopportunity,
    showProfile
  } = body;
  const producerProfile = await prisma.ProducerProfile.update({
    where: {
      lister_id
    },
    data: {
      categories,
      equipment,
      relatedLinks,
      description,
      LFopportunity,
      showProfile
    }
  });
  return producerProfile;
});

export { producerProfile_put as default };
//# sourceMappingURL=producerProfile.put.mjs.map
