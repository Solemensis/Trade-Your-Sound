import { d as defineEventHandler, g as getQuery, r as readBody, a as prisma } from '../../_/nitro.mjs';
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

const audios_post = defineEventHandler(async (event) => {
  const { category } = getQuery(event);
  const { price } = getQuery(event);
  const { processing } = getQuery(event);
  const listingsLength = await readBody(event);
  let filters = {};
  switch (category) {
    case "sound-effects":
      filters.category = "sound-effects";
      break;
    case "environmental-sounds":
      filters.category = "environmental-sounds";
      break;
    case "ui-sounds":
      filters.category = "ui-sounds";
      break;
    case "foley-sounds":
      filters.category = "foley-sounds";
      break;
    case "dialogue":
      filters.category = "dialogue";
      break;
    case "soundscapes":
      filters.category = "soundscapes";
      break;
  }
  switch (processing) {
    case "raw":
      filters.processing = "raw";
      break;
    case "edited":
      filters.processing = "edited";
      break;
    case "mastered":
      filters.processing = "mastered";
      break;
  }
  switch (price) {
    case "0-3":
      filters.price = {
        gte: 0,
        lte: 3
      };
      break;
    case "4-10":
      filters.price = {
        gte: 4,
        lte: 10
      };
      break;
    case "11-20":
      filters.price = {
        gte: 11,
        lte: 20
      };
      break;
    case "21>":
      filters.price = {
        gte: 21,
        lte: 5e3
      };
      break;
  }
  const audioListings = await prisma.AudioListings.findMany({
    skip: listingsLength,
    take: 4,
    where: filters
  });
  return audioListings;
});

export { audios_post as default };
//# sourceMappingURL=audios.post.mjs.map
