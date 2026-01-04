import { d as defineEventHandler, a as prisma, c as createError } from '../../../_/nitro.mjs';
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

const _id__get = defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const audio = await prisma.AudioListings.findUnique({
    where: {
      id: parseInt(id)
    }
  });
  if (!audio) {
    throw createError({
      statusCode: 404,
      statusMessage: `Audio with ID of ${id} does not exist`
    });
  }
  return audio;
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
