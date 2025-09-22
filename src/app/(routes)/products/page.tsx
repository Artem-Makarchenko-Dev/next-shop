import { fetchProducts } from "@/entities/product/api/product.api";
import ProductsPageClient from "@/pages-client/ProductsPageClient";
import { ErrorBoundary } from "@/shared/ui/ErrorBoundary";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

export const revalidate = 600;

export default async function ProductsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });

  return (
    <ErrorBoundary>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductsPageClient />
      </HydrationBoundary>
    </ErrorBoundary>
  );
}
