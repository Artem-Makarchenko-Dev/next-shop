import { getTranslations } from "next-intl/server";

export const revalidate = false;

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-foreground-900 mb-10">{t("title")}</h1>
      <div className="bg-background rounded-2xl shadow-sm p-10 space-y-6">
        <p className="text-lg text-foreground-700 leading-relaxed">
          {t("description.first-paragraph")}
        </p>
        <p className="text-lg text-foreground-700 leading-relaxed">
          {t("description.second-paragraph")}
        </p>
        <p className="text-lg text-foreground-700 leading-relaxed">
          {t("description.third-paragraph")}
        </p>
      </div>
    </section>
  );
}
