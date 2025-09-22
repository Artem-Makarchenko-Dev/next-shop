"use client";

import { useProductsQuery } from "@/entities/product/api/useProductsQuery";
import ProductsGrid from "@/entities/product/ui/ProductsGrid";
import { Loader } from "@/shared/ui/Loader";
import { useTranslations } from "next-intl";

export function FeaturedProducts() {
  const t = useTranslations("home.featured");
  const { data: products, isLoading } = useProductsQuery(4);

  return (
    <section className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">{t("title")}</h2>
      {isLoading ? <Loader /> : <ProductsGrid products={products ?? []} />}
    </section>
  );
}
