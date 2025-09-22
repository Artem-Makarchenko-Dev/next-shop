"use client";

import AddToCartButton from "@/features/add-to-cart/ui/AddToCartButton";
import { RatingStars } from "@/shared/ui/RatingStars";
import { useTranslations } from "next-intl";
import { Product } from "../../model/types";

export function ProductMainInfo({ product }: { product: Product }) {
  const t = useTranslations("product.details");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground-900">{product.title}</h1>
      <RatingStars rate={product.rating.rate} count={product.rating.count} />
      <p className="text-foreground-600 text-md">{product.description}</p>

      <p className="text-sm text-foreground-500 capitalize">
        {t("category", { category: product.category })}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold text-foreground-900">
          {t("price", { price: product.price })}
        </span>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
