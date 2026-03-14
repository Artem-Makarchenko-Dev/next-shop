import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "./category.api";
import { categoryKeys } from "./category.keys";

export function useCategoriesQuery() {
  return useQuery<string[]>({
    queryKey: categoryKeys.all,
    queryFn: fetchCategories,
  });
}