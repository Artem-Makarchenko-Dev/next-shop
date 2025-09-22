import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchProductsByCategory } from "./product.api";
import { productsKeys } from "./product.keys";

export function useProductsQuery(limit?: number) {
  return useQuery({
    queryKey: productsKeys.all,
    queryFn: () => fetchProducts(limit),
  });
}

export function useProductsByCategoryQuery(category: string, limit?: number) {
  return useQuery({
    queryKey: productsKeys.byCategory,
    queryFn: () => fetchProductsByCategory(category, limit),
  });
}
