import { Product } from "../model/types";

export async function fetchProductServer(
  id: number,
  options?: RequestInit,
): Promise<Product | null> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    ...options,
  });
  if (!res.ok) return null;
  return res.json();
}
