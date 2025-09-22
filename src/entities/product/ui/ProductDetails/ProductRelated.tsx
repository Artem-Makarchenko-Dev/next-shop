"use client";

import { useTranslations } from "next-intl";
import { Product } from "../../model/types";
import ProductsGrid from "../ProductsGrid";

export function ProductRelated({ products }: { products: Product[] }) {
  const t = useTranslations("product.related");

  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground-900 mb-6">{t("title")}</h2>
      <ProductsGrid products={products} />
    </section>
  );
}
