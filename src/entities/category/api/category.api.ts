import { axiosClient } from "@/shared/api/axiosClient";

export async function fetchCategories(): Promise<string[]> {
  const { data } = await axiosClient.get<string[]>("/products/categories");
  return data;
}
