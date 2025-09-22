"use client";

import { Product } from "@/entities/product/model/types";
import { ProductDetails } from "@/entities/product/ui/ProductDetails/ProductDetails";
import { ErrorBoundary } from "@/shared/ui/ErrorBoundary";
import { notFound } from "next/navigation";

interface ProductDetailsProps {
  id: number;
  initialProduct: Product | null;
}

export default function ProductDetailsPageClient({ id, initialProduct }: ProductDetailsProps) {
  if (!initialProduct || Number.isNaN(id)) {
    notFound();
  }

  return (
    <ErrorBoundary>
      <ProductDetails id={initialProduct.id} initialProduct={initialProduct} />
    </ErrorBoundary>
  );
}
