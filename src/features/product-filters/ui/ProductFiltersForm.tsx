"use client";

import { useCallback, useMemo } from "react";
import { useCategoriesQuery } from "@/entities/category/api/useCategoriesQuery";
import { useUpdateQuery } from "@/shared/lib/useUpdateQuery";
import { ErrorState } from "@/shared/ui/ErrorState";
import { Loader } from "@/shared/ui/Loader";
import { useTranslations } from "next-intl";
import {
  CategoryOptions,
  FiltersAction,
  FiltersActions,
  FiltersState,
  SortOptionType,
  SortOptions,
} from "../productFilters.types";

interface ProductFiltersFormProps {
  filters: FiltersState;
  dispatch: React.Dispatch<FiltersAction>;
}

export default function ProductFiltersForm({ filters, dispatch }: ProductFiltersFormProps) {
  const t = useTranslations("products");
  const updateQuery = useUpdateQuery();

  const {
    data: categoriesData,
    isLoading: catLoading,
    isError: catError,
    refetch: catRefetch,
  } = useCategoriesQuery();

  const categories = useMemo(
    () => [CategoryOptions.ALL, ...(categoriesData ?? [])],
    [categoriesData],
  );

  const sortOptions = [
    { value: SortOptions.NONE, label: t("filters.sortNone") },
    { value: SortOptions.ASC, label: t("filters.sortAsc") },
    { value: SortOptions.DESC, label: t("filters.sortDesc") },
  ];

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: FiltersActions.SET_SEARCH, payload: e.target.value });
      updateQuery("search", e.target.value);
    },
    [dispatch, updateQuery],
  );

  const handleCategory = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch({ type: FiltersActions.SET_CATEGORY, payload: e.target.value });
      updateQuery("category", e.target.value);
    },
    [dispatch, updateQuery],
  );

  const handleSort = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch({ type: FiltersActions.SET_SORT, payload: e.target.value as SortOptionType });
      updateQuery("sort", e.target.value);
    },
    [dispatch, updateQuery],
  );

  if (catLoading) return <Loader />;
  if (catError) return <ErrorState onRetry={catRefetch} />;

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder={t("filters.searchPlaceholder")}
        value={filters.search}
        onChange={handleSearch}
        className="flex-1 px-5 py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
      />

      <select
        value={filters.category}
        onChange={handleCategory}
        className="px-5 py-3 rounded-xl border border-gray-200 shadow-sm bg-background text-foreground-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {t(`categoryOptions.${category.toLowerCase()}`)}
          </option>
        ))}
      </select>

      <select
        value={filters.sort}
        onChange={handleSort}
        className="px-5 py-3 rounded-xl border border-gray-200 shadow-sm bg-background text-foreground-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
