"use client";

import { useTranslations } from "next-intl";

export function ValueProps() {
  const t = useTranslations("home.valueProps");

  const props = [
    { title: t("shipping.title"), text: t("shipping.text") },
    { title: t("support.title"), text: t("support.text") },
    { title: t("returns.title"), text: t("returns.text") },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">{t("title")}</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {props.map((item) => (
          <div
            key={item.title}
            className="border border-gray-200 rounded-2xl bg-background px-8 py-10 text-center shadow-sm transition"
          >
            <h3 className="font-semibold text-foreground-900 text-lg mb-1">{item.title}</h3>
            <p className="text-foreground-500 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
