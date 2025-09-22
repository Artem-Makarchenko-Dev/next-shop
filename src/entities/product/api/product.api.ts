import { axiosClient } from "@/shared/api/axiosClient";
import { Product } from "../model/types";

export async function fetchProduct(id: number): Promise<Product> {
  const { data } = await axiosClient.get(`/products/${id}`);
  return data;
}

export async function fetchProducts(limit?: number): Promise<Product[]> {
  const { data } = await axiosClient.get<Product[]>(`/products`, {
    params: { limit },
  });
  return data;
}

export async function fetchProductsByCategory(
  category: string,
  limit?: number,
): Promise<Product[]> {
  const { data } = await axiosClient.get<Product[]>(
    `/products/category/${encodeURIComponent(category)}`,
    {
      params: { limit },
    },
  );
  return data;
}

export async function fetchCategories(): Promise<string[]> {
  const { data } = await axiosClient.get<string[]>("/products/categories");
  return data;
}
