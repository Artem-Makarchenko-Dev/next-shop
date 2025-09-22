"use client";

import { useEffect, useMemo, useReducer, useState } from "react";
import { useProductsQuery } from "@/entities/product/api/useProductsQuery";
import { Product } from "@/entities/product/model/types";
import ProductsGrid from "@/entities/product/ui/ProductsGrid";
import { filterProducts } from "@/features/product-filters/modal/filterProducts";
import {
  initialFilters,
  productFiltersReducer,
} from "@/features/product-filters/modal/productFiltersReducer";
import { FiltersActions } from "@/features/product-filters/productFilters.types";
import ProductsPageFilters from "@/features/product-filters/ui/ProductFilters";
import { ProductQuickViewModal } from "@/features/product-quick-view/ui/ProductQuickViewModal";
import { withLoading } from "@/shared/lib/withLoading";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

const ProductsGridWithLoading = withLoading(ProductsGrid);

export default function ProductsPageClient() {
  const { data: products, isLoading, isError } = useProductsQuery();
  const searchParams = useSearchParams();
  const [filters, dispatch] = useReducer(productFiltersReducer, initialFilters);
  const [selectedItem, setSelectedItem] = useState<Product | null>(null);
  const t = useTranslations("products");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) dispatch({ type: FiltersActions.SET_CATEGORY, payload: category });
  }, [searchParams]);

  const filtered = useMemo(() => filterProducts(products ?? [], filters), [products, filters]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold mb-10 text-foreground-900">{t("title")}</h1>
      <ProductsPageFilters filters={filters} dispatch={dispatch} />
      <ProductsGridWithLoading
        products={filtered ?? []}
        onSelect={setSelectedItem}
        isLoading={isLoading}
        isError={isError}
      />
      <ProductQuickViewModal product={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
