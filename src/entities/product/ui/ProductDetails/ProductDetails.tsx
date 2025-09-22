"use client";

import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { ProductSkeleton } from "@/shared/ui/ProductSkeleton";
import { useProductQuery } from "../../api/useProductQuery";
import { useProductsByCategoryQuery } from "../../api/useProductsQuery";
import { Product } from "../../model/types";
import { ProductGallery } from "../ProductGallery";
import { ProductMainInfo } from "./ProductMainInfo";
import { ProductRelated } from "./ProductRelated";
import { ProductReviews } from "./ProductReviews";

interface ProductDetailsProps {
  id: number;
  initialProduct: Product;
}

export function ProductDetails({ id, initialProduct }: ProductDetailsProps) {
  const {
    data: product,
    isLoading,
    isError,
  } = useProductQuery(id ?? initialProduct.id, {
    initialData: initialProduct,
    enabled: !!(id ?? initialProduct?.id),
  });

  const { data: relatedProducts } = useProductsByCategoryQuery(
    product?.category || initialProduct.category,
    4,
  );

  if (isLoading) return <ProductSkeleton />;
  if (isError || !product)
    return <p className="text-center mt-10 text-foreground-500">Product not found</p>;

  return (
    <section className="max-w-6xl mx-auto px-6 py-6 space-y-16">
      <Breadcrumbs category={product.category} title={product.title} />

      <div className="bg-background rounded-2xl shadow-sm p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <ProductGallery images={Array(4).fill(product.image)}>
          <ProductGallery.Main />
          <ProductGallery.Thumbnails images={Array(4).fill(product.image)} />
        </ProductGallery>

        <ProductMainInfo product={product} />
      </div>

      <ProductReviews />

      {relatedProducts && !!relatedProducts.length && <ProductRelated products={relatedProducts} />}
    </section>
  );
}
