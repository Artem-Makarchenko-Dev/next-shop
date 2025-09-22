"use client";

import { useEffect, useState } from "react";
import { Loader } from "@/shared/ui/Loader";
import SummaryRow from "@/shared/ui/SummaryRow";
import { useAppSelector } from "@/store/hooks";
import { selectCartItems, selectTotal } from "@/store/slices/cart/cartSlice.selectors";
import { useTranslations } from "next-intl";

export function CheckoutSummary() {
  const t = useTranslations("checkout.summary");

  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectTotal);
  const [mounted, setMounted] = useState(false);

  const taxes = +(total * 0.1).toFixed(2);
  const shipping = 5;
  const grandTotal = (total + taxes + shipping).toFixed(2);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <Loader />;

  return (
    <div className="bg-background rounded-2xl shadow-sm p-8 h-fit space-y-4">
      <h2 className="text-2xl font-semibold text-foreground-900 mb-4">{t("title")}</h2>

      <ul className="space-y-2 mb-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between text-sm text-foreground-700 border-b pb-1"
          >
            <span>
              {item.title} × {item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <div className="space-y-2 text-sm text-foreground-700">
        <SummaryRow label={t("subtotal")} value={`$${total.toFixed(2)}`} />
        <SummaryRow label={t("taxes")} value={`$${taxes}`} />
        <SummaryRow label={t("shipping")} value={`$${shipping.toFixed(2)}`} />
      </div>

      <div className="flex justify-between border-t pt-4 mt-2 text-lg font-semibold text-foreground-900">
        <span>{t("total")}</span>
        <span>${grandTotal}</span>
      </div>
    </div>
  );
}
