import categories from "@/data/categories.json";
import prices from "@/data/prices.json";
import processing from "@/data/processing.json";

export function useCategories() {
  return {
    categories,
    prices,
    processing,
  };
}
