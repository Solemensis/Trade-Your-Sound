import { d as defineEventHandler, a as prisma } from '../../../../../_/nitro.mjs';
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

const _userId__get = defineEventHandler(async (event) => {
  const { userId } = event.context.params;
  return prisma.AudioListings.findMany({
    where: {
      lister_id: userId
    },
    select: {
      audio: true,
      id: true,
      name: true,
      price: true
    }
  });
});

export { _userId__get as default };
//# sourceMappingURL=_userId_.get.mjs.map
