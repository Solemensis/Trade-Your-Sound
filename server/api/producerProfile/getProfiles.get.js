import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { category } = getQuery(event);

  let filters = {};

  switch (category) {
    case "sound-effects":
      filters.categories = "sound-effects";
      break;
    case "environmental-sounds":
      filters.categories = "environmental-sounds";
      break;
    case "ui-sounds":
      filters.categories = "ui-sounds";
      break;
    case "foley-sounds":
      filters.categories = "foley-sounds";
      break;
    case "dialogue":
      filters.categories = "dialogue";
      break;
    case "soundscapes":
      filters.categories = "soundscapes";
      break;
  }

  let producerProfile;
  if (category != undefined) {
    producerProfile = await prisma.ProducerProfile.findMany({
      where: {
        categories: {
          has: category,
        },
      },
    });
  } else {
    producerProfile = await prisma.ProducerProfile.findMany();
  }
  return producerProfile;
});
