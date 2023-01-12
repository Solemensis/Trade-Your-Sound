// import cars from "@/data/cars.json";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler((event) => {
  const { city } = event.context.params;
  const { make, minPrice, maxPrice } = getQuery(event);

  // let filteredCars = cars;
  const filters = {
    city: city.toLowerCase(),
  };

  // filteredCars = filteredCars.filter((car) => {
  //   return car.city.toLowerCase() === city.toLowerCase();
  // });

  if (make) {
    // filteredCars = filteredCars.filter((car) => {
    //   return car.make.toLowerCase() === make.toLowerCase();
    // });
    filters.make = make;
  }

  if (minPrice || maxPrice) {
    filters.price = {};
  }
  if (minPrice) {
    filters.price.gte = parseInt(minPrice);
  }
  if (minPrice) {
    filters.price.lte = parseInt(maxPrice);
  }

  // if (minPrice) {
  //   filteredCars = filteredCars.filter((car) => {
  //     return car.price >= parseInt(minPrice);
  //   });
  // }
  // if (maxPrice) {
  //   filteredCars = filteredCars.filter((car) => {
  //     return car.price <= parseInt(maxPrice);
  //   });
  // }

  // return filteredCars;

  return prisma.car.findMany({
    // where: {
    //   city: city,
    //   make: "Toyota",
    //   price: {
    //     gte: 50000,
    //     lte: 145000,
    //   },
    // },
    where: filters,
  });
});
