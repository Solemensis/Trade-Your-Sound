import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler((event) => {
  const { category } = event.context.params;
  const { price } = getQuery(event);

  const filters = {
    category: category,
  };

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
  if (category == "all-categories" && !price) {
    return prisma.AudioListings.findMany();
  } else if (category == "all-categories" && price) {
    return prisma.AudioListings.findMany({
      where: {
        price: filters.price,
      },
    });
  } else {
    return prisma.AudioListings.findMany({
      where: filters,
    });
  }
});
