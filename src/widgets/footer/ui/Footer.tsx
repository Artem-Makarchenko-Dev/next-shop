"use client";

import { useTranslations } from "next-intl";
import { navLinks, socialLinks, supportLinks } from "../Footer.constants";
import FooterLinksList from "./FooterLinksList";

export function Footer() {
  const t = useTranslations("common");

  return (
    <footer className="mt-12 bg-background text-foreground rounded-t-2xl shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{t("appName")}</h2>
          <p className="text-sm text-foreground">{t("footer.tagline")}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-foreground">
            {t("footer.shop")}
          </h3>
          <FooterLinksList links={navLinks} />
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-foreground">
            {t("footer.support")}
          </h3>
          <FooterLinksList links={supportLinks} />
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-foreground">
            {t("footer.follow")}
          </h3>
          <div className="flex flex-col gap-2 text-sm">
            {socialLinks.map(({ href, key, Icon }) => (
              <a
                key={key}
                href={href}
                className="hover:text-primary-light dark:hover:text-primary-dark transition flex items-center"
              >
                <Icon className="w-5 h-5 mr-2 text-foreground" />
                <span className="capitalize">{key}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-foreground-500 dark:text-foreground-400 flex flex-col md:flex-row justify-center items-center gap-2">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
