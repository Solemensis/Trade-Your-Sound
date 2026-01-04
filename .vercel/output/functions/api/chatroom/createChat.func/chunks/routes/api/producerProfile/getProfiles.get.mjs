import { d as defineEventHandler, g as getQuery, a as prisma } from '../../../_/nitro.mjs';
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

const getProfiles_get = defineEventHandler(async (event) => {
  const { category } = getQuery(event);
  const { opportunity } = getQuery(event);
  const { updated } = getQuery(event);
  let filters = {
    showProfile: true,
    //this is just to make sure that user filled his/her profile's necessery inputs
    description: {
      not: ""
    }
  };
  let orderby = {};
  switch (opportunity) {
    case "looking":
      filters.LFopportunity = true;
      break;
    case "not-looking":
      filters.LFopportunity = false;
      break;
  }
  if (Boolean(category) == true) {
    filters.categories = {
      has: category
    };
  }
  switch (updated) {
    case "descending":
      orderby.updated_at = "desc";
      break;
    case "ascending":
      orderby.updated_at = "asc";
      break;
  }
  const producerProfile = await prisma.ProducerProfile.findMany({
    where: filters,
    orderBy: orderby,
    select: {
      updated_at: true,
      user_name: true,
      categories: true,
      description: true,
      relatedLinks: true,
      LFopportunity: true
    }
  });
  return producerProfile;
});

export { getProfiles_get as default };
//# sourceMappingURL=getProfiles.get.mjs.map
