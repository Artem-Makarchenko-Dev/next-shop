"use client";

import { useTranslations } from "next-intl";

export default function FaqsPageClient() {
  const t = useTranslations("faqs");

  const questions = [
    {
      q: t("questions.shipping.q"),
      a: t("questions.shipping.a"),
    },
    {
      q: t("questions.returns.q"),
      a: t("questions.returns.a"),
    },
    {
      q: t("questions.payments.q"),
      a: t("questions.payments.a"),
    },
    {
      q: t("questions.support.q"),
      a: t("questions.support.a"),
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 space-y-4">
      <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
      <div className="space-y-8">
        {questions.map(({ q, a }, idx) => (
          <div key={idx} className="bg-background rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-foreground-900 mb-3">{q}</h2>
            <p className="text-foreground-600 leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
