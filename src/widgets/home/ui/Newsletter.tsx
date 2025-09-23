"use client";

import { useState } from "react";
import { showToast } from "@/shared/lib/showToast";
import { useTranslations } from "next-intl";

export function Newsletter() {
  const t = useTranslations("");
  const [email, setEmail] = useState("");
  const subscribtionHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    showToast(t("common.toasts.success"), "success");
    setEmail("");
  };

  return (
    <section className="max-w-3xl mx-auto px-6 text-center py-16 bg-background text-foreground-900 rounded-2xl shadow-sm">
      <h2 className="text-3xl font-bold mb-4">{t("home.newsletter.title")}</h2>
      <p className="text-foreground-500 mb-8">{t("home.newsletter.description")}</p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("home.newsletter.placeholder")}
          className="px-5 py-3 w-full sm:w-72 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
        <button
          onClick={subscribtionHandler}
          className="px-6 py-3 rounded-xl bg-gray-900 text-white font-medium shadow hover:shadow-lg hover:bg-black transition cursor-pointer"
        >
          {t("home.newsletter.button")}
        </button>
      </div>
    </section>
  );
}
