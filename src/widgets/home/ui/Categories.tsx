"use client";

import { useCategoriesQuery } from "@/entities/category/api/useCategoriesQuery";
import { ErrorState } from "@/shared/ui/ErrorState";
import { Loader } from "@/shared/ui/Loader";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export function Categories() {
  const t = useTranslations("home.categories");
  const router = useRouter();
  const { data: categories, isLoading, isError, refetch } = useCategoriesQuery();

  const handleClick = (cat: string) => {
    router.push(`/products?category=${encodeURIComponent(cat.toLowerCase())}`);
  };

  if (isLoading) return <Loader />;
  if (isError) return <ErrorState onRetry={refetch} />;

  return (
    <section className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">{t("title")}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories?.map((category) => (
          <button
            key={category}
            onClick={() => handleClick(category)}
            className="border border-gray-200 rounded-2xl bg-background px-6 py-8 text-center text-foreground-900 font-medium shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition cursor-pointer capitalize"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
