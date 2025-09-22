"use client";

import { useTranslations } from "next-intl";

interface Link {
  href: string;
  key: string;
}

export default function FooterLinksList({ links }: { links: readonly Link[] }) {
  const t = useTranslations("common.links");

  return (
    <ul className="space-y-2 text-sm">
      {links.map(({ href, key }) => (
        <li key={key}>
          <a href={href} className="text-foreground transition">
            {t(key)}
          </a>
        </li>
      ))}
    </ul>
  );
}
