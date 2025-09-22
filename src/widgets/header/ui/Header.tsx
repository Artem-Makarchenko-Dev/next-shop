"use client";

import AuthButton from "@/features/auth/ui/AuthButton";
import { LocaleSwitcher } from "@/features/change-lang/ui/LocaleSwitcher";
import { ThemeToggle } from "@/features/theme-toggle/ui/ThemeToggle";
import { CartWidget } from "@/widgets/cart/ui/CartWidget";
import { useTranslations } from "next-intl";
import Link from "next/link";
import HeaderNav from "./HeaderNav";

export function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center rounded-b-2xl">
        <Link href="/" className="text-2xl font-bold text-foreground hover:opacity-80 transition">
          {t("common.appName")}
        </Link>

        <HeaderNav />

        <div className="flex items-center gap-4">
          <LocaleSwitcher />
          <ThemeToggle />
          <CartWidget />
          <AuthButton />
        </div>
      </div>
    </header>
  );
}
