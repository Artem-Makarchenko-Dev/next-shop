import { axiosClient } from "@/shared/api/axiosClient";

export interface Category {
  id: number;
  slug: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export async function fetchCategories(): Promise<string[]> {
  const { data } = await axiosClient.get<Category[]>("/categories");
  return data.map((category) => category.name);
}
