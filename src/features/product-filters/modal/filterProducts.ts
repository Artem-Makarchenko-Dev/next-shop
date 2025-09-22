import { Product } from "@/entities/product/model/types";
import { FiltersState } from "../productFilters.types";

export function filterProducts(products: Product[] = [], filters: FiltersState): Product[] {
  let list = [...products];

  if (filters.search.trim()) {
    const term = filters.search.toLowerCase();
    list = list.filter((p) => p.title.toLowerCase().includes(term));
  }

  if (filters.category !== "all") {
    list = list.filter((p) => p.category === filters.category);
  }

  if (filters.sort === "asc") {
    list = list.sort((a, b) => a.price - b.price);
  } else if (filters.sort === "desc") {
    list = list.sort((a, b) => b.price - a.price);
  }

  return list;
}
