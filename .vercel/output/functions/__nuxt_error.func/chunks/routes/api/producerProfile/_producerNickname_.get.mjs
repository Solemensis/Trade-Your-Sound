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

const _producerNickname__get = defineEventHandler(async (event) => {
  const { producerNickname } = event.context.params;
  const producerProfile = await prisma.ProducerProfile.findUnique({
    where: {
      user_name: producerNickname
    }
  });
  if (!producerProfile) {
    throw createError({
      statusCode: 404,
      statusMessage: `User with that nickname does not exist`
    });
  }
  return producerProfile;
});

export { _producerNickname__get as default };
//# sourceMappingURL=_producerNickname_.get.mjs.map
