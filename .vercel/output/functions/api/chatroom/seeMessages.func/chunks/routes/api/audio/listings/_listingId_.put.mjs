import { d as defineEventHandler, r as readBody, c as createError, a as prisma } from '../../../../_/nitro.mjs';
import { J as Joi } from '../../../../virtual/index.mjs';
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
  name: Joi.string().required(),
  price: Joi.number().min(0).required(),
  category: Joi.string().required(),
  processing: Joi.string().required(),
  description: Joi.string().min(10).required(),
  lister_id: Joi.string().required(),
  audio: Joi.string().required()
});
const _listingId__put = defineEventHandler(async (event) => {
  const { listingId } = event.context.params;
  const body = await readBody(event);
  const { error, value } = await schema.validate(body);
  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message
    });
  }
  const { name, price, category, processing, description, lister_id, audio } = body;
  const AudioListing = await prisma.AudioListings.update({
    where: {
      id: parseInt(listingId)
    },
    data: {
      name,
      price,
      category,
      processing,
      description,
      lister_id,
      audio
    }
  });
  return AudioListing;
});

export { _listingId__put as default };
//# sourceMappingURL=_listingId_.put.mjs.map
