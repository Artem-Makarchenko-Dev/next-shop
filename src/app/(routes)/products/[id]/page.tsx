import { Suspense, lazy } from "react";
import { fetchProductServer } from "@/entities/product/api/fetchProduct.server";
import { generateProductMetadata } from "@/entities/product/lib/generateProductMetadata";
import { Loader } from "@/shared/ui/Loader";

const ProductDetailsPageClient = lazy(() => import("@/pages-client/ProductDetailsPageClient"));

export async function generateMetadata({ params }: { params: { id: string } }) {
  return generateProductMetadata(params.id);
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const id = +params.id;
  const product = await fetchProductServer(id, { cache: "no-store" });

  return (
    <Suspense fallback={<Loader />}>
      <ProductDetailsPageClient id={id} initialProduct={product} />
    </Suspense>
  );
}
