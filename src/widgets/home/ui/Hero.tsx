"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const t = useTranslations("home");

  return (
    <section className="max-w-6xl mx-auto mt-12 mb-16 px-6 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1">
        <Image
          src="/images/baner_1.png"
          alt={t("hero.imgAlt")}
          width={600}
          height={400}
          priority
          className="rounded-2xl object-cover"
        />
      </div>

      <div className="flex flex-1 text-center md:text-left flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground-900 text-center">
          {t("hero.title")}
        </h1>
        <p className="text-lg text-foreground-600 mb-8 text-center">{t("hero.subtitle")}</p>
        <div className="flex justify-center">
          <Link
            href="/products"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-xl shadow hover:shadow-lg hover:bg-black transition text-center w-50"
          >
            {t("hero.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
