"use client";

import { useTranslations } from "next-intl";

export default function PrivacyPolicyPageClient() {
  const t = useTranslations("privacy-policy");

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 space-y-4">
      <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>

      <p className="text-lg text-foreground-700">{t("content.intro")}</p>
      <p className="text-lg text-foreground-700">{t("content.data")}</p>
      <p className="text-lg text-foreground-700">{t("content.sharing")}</p>
      <p className="text-lg text-foreground-700">{t("content.contact")}</p>
    </section>
  );
}
