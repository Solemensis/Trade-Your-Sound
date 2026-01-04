import { d as defineEventHandler, r as readBody, a as prisma } from '../../_/nitro.mjs';
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

const opinion_post = defineEventHandler(async (event) => {
  const textContent = await readBody(event);
  const opinion = await prisma.Opinions.create({
    data: {
      content: textContent
    }
  });
  return opinion;
});

export { opinion_post as default };
//# sourceMappingURL=opinion.post.mjs.map
