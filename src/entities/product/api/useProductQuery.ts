import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Product } from "../model/types";
import { fetchProduct } from "./product.api";
import { productsKeys } from "./product.keys";

type OptionsType = Omit<UseQueryOptions<Product>, "queryKey" | "queryFn">;

export function useProductQuery(id: number, options?: OptionsType) {
  return useQuery<Product>({
    queryKey: productsKeys.detail(id),
    queryFn: () => fetchProduct(id),
    enabled: !!id,
    ...options,
  });
}
