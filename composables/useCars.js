import cars from "@/data/cars.json";
import categories from "@/data/categories.json";
import listings from "@/data/listings.json";
import prices from "@/data/prices.json";

export function useCars() {
  return {
    cars,
    categories,
    listings,
    prices,
  };
}
