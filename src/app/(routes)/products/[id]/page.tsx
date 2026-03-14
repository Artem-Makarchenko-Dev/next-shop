import { Suspense, lazy } from "react";
import { fetchProductServer } from "@/entities/product/api/fetchProduct.server";
import { generateProductMetadata } from "@/entities/product/lib/generateProductMetadata";
import { Loader } from "@/shared/ui/Loader";

const ProductDetailsPageClient = lazy(() => import("@/pages-client/ProductDetailsPageClient"));

type ProductPageProps = Promise<{ id: string }>

export async function generateMetadata(props: { params: ProductPageProps }) {
  const params = await props.params;
  return generateProductMetadata(params.id);
}

export default async function ProductPage(props: { params: ProductPageProps }) {
  const params = await props.params;
  const id = Number(params.id);
  const product = await fetchProductServer(id, { cache: "no-store" });

  return (
    <Suspense fallback={<Loader />}>
      <ProductDetailsPageClient id={id} initialProduct={product} />
    </Suspense>
  );
}
