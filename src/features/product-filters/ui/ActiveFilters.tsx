"use client";

import { useTranslations } from "next-intl";
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

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.search && (
        <FilterTag
          label={t("chips.search", { query: filters.search })}
          onClear={() => dispatch({ type: FiltersActions.SET_SEARCH, payload: "" })}
        />
      )}

      {filters.category !== CategoryOptions.ALL && (
        <FilterTag
          label={t(`categoryOptions.${filters.category}`)}
          onClear={() =>
            dispatch({ type: FiltersActions.SET_CATEGORY, payload: CategoryOptions.ALL })
          }
        />
      )}

      {filters.sort && (
        <FilterTag
          label={filters.sort === SortOptions.ASC ? t("chips.sortAsc") : t("chips.sortDesc")}
          onClear={() => dispatch({ type: FiltersActions.SET_SORT, payload: "" })}
        />
      )}

      {(filters.search || filters.category !== CategoryOptions.ALL || filters.sort) && (
        <button
          onClick={() => dispatch({ type: FiltersActions.RESET })}
          className="text-sm text-foreground-600 hover:underline ml-2 cursor-pointer"
        >
          {t("chips.clearAll")}
        </button>
      )}
    </div>
  );
}
