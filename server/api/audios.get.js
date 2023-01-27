import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler((event) => {
  const { category } = getQuery(event);
  const { price } = getQuery(event);
  const { processing } = getQuery(event);

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
    case "0-50":
      filters.price = {
        gte: 0,
        lte: 50,
      };
      break;
    case "50-100":
      filters.price = {
        gte: 50,
        lte: 100,
      };
      break;
    case "100-200":
      filters.price = {
        gte: 100,
        lte: 200,
      };
      break;
    case "200>":
      filters.price = {
        gte: 200,
        lte: 5000,
      };
      break;
  }

  //database event

  return prisma.AudioListings.findMany({
    where: filters,
  });
});
