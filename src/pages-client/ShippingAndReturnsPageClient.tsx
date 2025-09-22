"use client";

import { useTranslations } from "next-intl";

export default function ShippingAndReturnsPageClient() {
  const t = useTranslations("shipping-and-returns");

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 space-y-4">
      <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>

      <p className="text-lg text-foreground-700">{t("content.shipping")}</p>
      <p className="text-lg text-foreground-700">{t("content.cost")}</p>
      <p className="text-lg text-foreground-700">{t("content.returns")}</p>
      <p className="text-lg text-foreground-700">{t("content.process")}</p>
    </section>
  );
}
