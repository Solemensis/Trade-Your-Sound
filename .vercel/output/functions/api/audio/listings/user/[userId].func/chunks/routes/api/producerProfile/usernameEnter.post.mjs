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
  terms: Joi.boolean().invalid(false).required(),
  user_name: Joi.string().required(),
  lister_id: Joi.string().required(),
  admin: Joi.boolean().invalid(true).required(),
  LFopportunity: Joi.boolean(),
  showProfile: Joi.boolean().required(),
  relatedLinks: Joi.array().required(),
  description: Joi.string().allow("")
});
const usernameEnter_post = defineEventHandler(
  async (event) => {
    const body = await readBody(event);
    const { error, value } = await schema.validate(body);
    if (error) {
      throw createError({
        statusCode: 412,
        statusMessage: error.message
      });
    }
    return prisma.ProducerProfile.create({
      data: {
        user_name: body.user_name,
        lister_id: body.lister_id,
        admin: false,
        LFopportunity: false,
        showProfile: false,
        terms: Boolean(body.terms),
        relatedLinks: body.relatedLinks,
        description: body.description
      }
    });
  }
  // }
);

export { usernameEnter_post as default };
//# sourceMappingURL=usernameEnter.post.mjs.map
