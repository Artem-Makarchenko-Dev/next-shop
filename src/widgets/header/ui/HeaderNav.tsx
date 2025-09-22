"use client";

import { Route } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HeaderNav() {
  const t = useTranslations();

  const navLinks = [
    { href: "/products", label: t("common.nav.products") },
    { href: "/about", label: t("common.nav.about") },
    { href: "/contact", label: t("common.nav.contact") },
  ];

  return (
    <nav className="hidden md:flex gap-8 text-sm font-medium">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href as Route}
          className="text-foreground hover:text-brand hover:underline transition"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
