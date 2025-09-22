import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function OrderDeclinePage() {
  const t = await getTranslations("order-decline");

  return (
    <div className="max-w-lg mx-auto mt-24 text-center">
      <h1 className="text-2xl font-semibold">{t("title")}</h1>

      <p className="mt-3 text-foreground-600 text-sm leading-relaxed">{t("message")}</p>

      <div className="mt-8 flex justify-center gap-3">
        <Link
          href="/"
          className="px-5 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
        >
          {t("actions.home")}
        </Link>

        <Link
          href="/products"
          className="px-5 py-2 rounded-md border border-gray-300 text-sm font-medium text-foreground-800 hover:bg-gray-50 transition"
        >
          {t("actions.retry")}
        </Link>
      </div>
    </div>
  );
}
