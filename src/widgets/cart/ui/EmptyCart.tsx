"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export function EmptyCart() {
  const t = useTranslations("cart.empty");

  return (
    <div className="text-center mt-24 space-y-6">
      <p className="text-xl text-foreground-500">{t("message")}</p>
      <Link
        href="/products"
        className="inline-block bg-gray-900 text-white px-8 py-3 rounded-xl shadow hover:shadow-lg hover:bg-black transition"
      >
        {t("action")}
      </Link>
    </div>
  );
}
