"use client";

import { FiltersAction, FiltersState } from "../productFilters.types";
import ActiveFilters from "./ActiveFilters";
import ProductFiltersForm from "./ProductFiltersForm";

interface ProductFiltersProps {
  filters: FiltersState;
  dispatch: React.Dispatch<FiltersAction>;
}

export default function ProductFilters({ filters, dispatch }: ProductFiltersProps) {
  return (
    <>
      <ProductFiltersForm filters={filters} dispatch={dispatch} />
      <ActiveFilters filters={filters} dispatch={dispatch} />
    </>
  );
}
