"use client";

import { useTranslations } from "next-intl";

export function Newsletter() {
  const t = useTranslations("home.newsletter");

  return (
    <section className="max-w-3xl mx-auto px-6 text-center py-16 bg-background text-foreground-900 rounded-2xl shadow-sm">
      <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
      <p className="text-foreground-500 mb-8">{t("description")}</p>

      <form className="flex flex-col sm:flex-row gap-3 justify-center">
        <input
          type="email"
          placeholder={t("placeholder")}
          className="px-5 py-3 w-full sm:w-72 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
        <button className="px-6 py-3 rounded-xl bg-gray-900 text-white font-medium shadow hover:shadow-lg hover:bg-black transition cursor-pointer">
          {t("button")}
        </button>
      </form>
    </section>
  );
}
