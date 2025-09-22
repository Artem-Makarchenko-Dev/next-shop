"use client";

import { useEffect, useState } from "react";
import { CartList } from "@/entities/cart/ui/CartList";
import { Loader } from "@/shared/ui/Loader";
import { useAppSelector } from "@/store/hooks";
import { selectCartItems, selectTotal } from "@/store/slices/cart/cartSlice.selectors";
import { CartSummary } from "@/widgets/cart/ui/CartSummary";
import { EmptyCart } from "@/widgets/cart/ui/EmptyCart";
import { useTranslations } from "next-intl";

export default function CartPageClient() {
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectTotal);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("cart");

  useEffect(() => setMounted(true), []);

  if (!mounted) return <Loader />;
  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-14">
      <h1 className="text-4xl font-bold text-foreground-900">{t("title")}</h1>
      <CartList items={items} />
      <CartSummary total={total} />
    </section>
  );
}
