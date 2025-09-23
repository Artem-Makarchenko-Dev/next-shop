"use client";

import { useUpdateQuery } from "@/shared/lib/useUpdateQuery";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import {
  CategoryOptions,
  FiltersAction,
  FiltersActions,
  FiltersState,
  SortOptions,
} from "../productFilters.types";
import { FilterTag } from "./FilterTag";

interface ActiveFiltersProps {
  filters: FiltersState;
  dispatch: React.Dispatch<FiltersAction>;
}

export default function ActiveFilters({ filters, dispatch }: ActiveFiltersProps) {
  const t = useTranslations("products");
  const router = useRouter();
  const updateQuery = useUpdateQuery();

  const clearAll = () => {
    router.replace("?");
    dispatch({ type: FiltersActions.RESET });
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.search && (
        <FilterTag
          label={t("chips.search", { query: filters.search })}
          onClear={() => {
            dispatch({ type: FiltersActions.SET_SEARCH, payload: "" });
            updateQuery("search", "");
          }}
        />
      )}

      {filters.category !== CategoryOptions.ALL && (
        <FilterTag
          label={t(`categoryOptions.${filters.category}`)}
          onClear={() => {
            dispatch({ type: FiltersActions.SET_CATEGORY, payload: CategoryOptions.ALL });
            updateQuery("category", "");
          }}
        />
      )}

      {filters.sort && filters.sort !== SortOptions.NONE && (
        <FilterTag
          label={filters.sort === SortOptions.ASC ? t("chips.sortAsc") : t("chips.sortDesc")}
          onClear={() => {
            dispatch({ type: FiltersActions.SET_SORT, payload: SortOptions.NONE });
            updateQuery("sort", "");
          }}
        />
      )}

      {(filters.search || filters.category !== CategoryOptions.ALL || filters.sort) && (
        <button
          onClick={clearAll}
          className="text-sm text-foreground-600 hover:underline ml-2 cursor-pointer"
        >
          {t("chips.clearAll")}
        </button>
      )}
    </div>
  );
}
