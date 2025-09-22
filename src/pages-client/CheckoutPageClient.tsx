"use client";

import { CheckoutForm } from "@/features/checkout-form/ui/CheckoutForm";
import { CheckoutSummary } from "@/features/checkout-form/ui/CheckoutSummary";

export default function CheckoutPageClient() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="md:col-span-2">
        <CheckoutForm />
      </div>
      <CheckoutSummary />
    </section>
  );
}
