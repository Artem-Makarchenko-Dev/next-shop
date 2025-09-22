import { Suspense, lazy } from "react";
import { Loader } from "@/shared/ui/Loader";

const CheckoutPageClient = lazy(() => import("@/pages-client/CheckoutPageClient"));

export default function CheckoutPage() {
  return (
    <Suspense fallback={<Loader />}>
      <CheckoutPageClient />
    </Suspense>
  );
}
