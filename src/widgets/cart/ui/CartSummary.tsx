"use client";

import SummaryRow from "@/shared/ui/SummaryRow";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function CartSummary({ total }: { total: number }) {
  const t = useTranslations("cart");

  const taxes = +(total * 0.1).toFixed(2);
  const shipping = 5;
  const grandTotal = (total + taxes + shipping).toFixed(2);

  return (
    <div className="bg-background rounded-2xl shadow-sm p-8 space-y-4">
      <SummaryRow label={t("summary.subtotal")} value={`$${total.toFixed(2)}`} />
      <SummaryRow label={t("summary.taxes")} value={`$${taxes}`} />
      <SummaryRow label={t("summary.shipping")} value={`$${shipping.toFixed(2)}`} />
      <SummaryRow
        label={t("summary.total")}
        value={`$${grandTotal}`}
        bold
        className="border-t pt-4 mt-4"
      />

      <Link
        href="/checkout"
        className="block w-full text-center mt-6 bg-gray-900 text-white px-8 py-4 rounded-xl shadow hover:shadow-lg hover:bg-black transition"
      >
        {t("actions.checkout")}
      </Link>
    </div>
  );
}
