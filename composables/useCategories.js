import categories from "@/data/categories.json";
import prices from "@/data/prices.json";

export function useCategories() {
  return {
    categories,
    prices,
  };
}
