import { d as defineEventHandler, a as prisma } from '../../../../_/nitro.mjs';
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

const _listingId__delete = defineEventHandler(async (event) => {
  const { listingId } = event.context.params;
  return prisma.AudioListings.delete({
    where: {
      id: parseInt(listingId)
    }
  });
});

export { _listingId__delete as default };
//# sourceMappingURL=_listingId_.delete.mjs.map
