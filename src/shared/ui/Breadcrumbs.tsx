"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface BreadcrumbsProps {
  category: string;
  title: string;
}

export function Breadcrumbs({ category, title }: BreadcrumbsProps) {
  const router = useRouter();
  const t = useTranslations("product.breadcrumbs");

  const handleCategoryClick = () => {
    router.push(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <nav className="text-sm text-foreground-500 space-x-1 mb-6">
      <Link href="/" className="hover:underline hover:text-foreground-700 transition">
        {t("home")}
      </Link>

      <span> / </span>

      <Link href="/products" className="hover:underline hover:text-foreground-700 transition">
        {t("products")}
      </Link>

      <span> / </span>

      <button
        onClick={handleCategoryClick}
        className="hover:underline hover:text-foreground-700 capitalize transition cursor-pointer"
      >
        {category}
      </button>

      <span> / </span>

      <span className="text-foreground-900">{title}</span>
    </nav>
  );
}
