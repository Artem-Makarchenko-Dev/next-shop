import { Suspense, lazy } from "react";
import { fetchProductServer } from "@/entities/product/api/fetchProduct.server";
import { generateProductMetadata } from "@/entities/product/lib/generateProductMetadata";
import { Loader } from "@/shared/ui/Loader";

const ProductDetailsPageClient = lazy(() => import("@/pages-client/ProductDetailsPageClient"));

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps) {
  return generateProductMetadata(params.id);
}

export default async function ProductPage({ params }: ProductPageProps) {
  const id = +params.id;
  const product = await fetchProductServer(id, { cache: "no-store" });

  return (
    <Suspense fallback={<Loader />}>
      <ProductDetailsPageClient id={id} initialProduct={product} />
    </Suspense>
  );
}
