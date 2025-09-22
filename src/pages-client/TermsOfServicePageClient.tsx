"use client";

import { useTranslations } from "next-intl";

export default function TermsOfServicePageClient() {
  const t = useTranslations("terms-of-service");
  const list = t.raw("list") as string[];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 space-y-4">
      <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>

      <div className="bg-background rounded-2xl shadow-sm p-10 space-y-6">
        <ul className="list-disc pl-6 space-y-1">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
