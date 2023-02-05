import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { category } = getQuery(event);
  const { opportunity } = getQuery(event);

  let filters = {
    //this is just to make sure that user filled his/her profile's necessery inputs
    description: {
      not: "",
    },
  };

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
      has: category,
    };
  }

  const producerProfile = await prisma.ProducerProfile.findMany({
    where: filters,
  });

  return producerProfile;
});
