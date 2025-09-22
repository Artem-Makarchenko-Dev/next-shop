"use client";

import { TooltipProvider } from "@/shared/ui/TooltipProvider";
import { useAppSelector } from "@/store/hooks";
import { selectItemCount } from "@/store/slices/cart/cartSlice.selectors";
import { ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function CartWidget() {
  const count: number = useAppSelector(selectItemCount);
  const t = useTranslations("common.header");

  return (
    <TooltipProvider>
      {({ isOpen, open, close }) => (
        <div className="relative">
          <Link
            href="/cart"
            onMouseEnter={open}
            onMouseLeave={close}
            className="relative block p-2 rounded-xl transition"
          >
            <ShoppingCart className="w-5 h-5 text-foreground cursor-pointer hover:opacity-80 transition" />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] rounded-full px-1.5">
                {count}
              </span>
            )}
          </Link>

          {isOpen && (
            <div
              className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap 
                    bg-foreground text-background text-xs px-3 py-1 rounded shadow-lg"
            >
              {t("tooltip")}
            </div>
          )}
        </div>
      )}
    </TooltipProvider>
  );
}
