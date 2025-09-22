import { Suspense, lazy } from "react";
import { Loader } from "@/shared/ui/Loader";

const CartPageClient = lazy(() => import("@/pages-client/CartPageClient"));

export default function CartPage() {
  return (
    <Suspense fallback={<Loader />}>
      <CartPageClient />
    </Suspense>
  );
}
