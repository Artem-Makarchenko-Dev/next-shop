"use client";

import { useAppDispatch } from "@/store/hooks";
import { removeItem, updateItemQuantity } from "@/store/slices/cart/cartSlice";
import type { CartItemType } from "@/store/slices/cart/cartSlice.types";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CartItem({ cartItem }: { cartItem: CartItemType }) {
  const dispatch = useAppDispatch();
  const t = useTranslations("cart.actions");

  return (
    <div className="w-full flex justify-between items-center">
      <Image
        src={cartItem.image}
        alt={cartItem.name}
        width={64}
        height={64}
        className="object-contain mr-10"
      />

      <div className="flex-1">
        <p className="font-medium">{cartItem.name}</p>
        <p className="text-foreground-500 text-sm">${cartItem.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() =>
            dispatch(
              updateItemQuantity({
                ...cartItem,
                quantity: cartItem.quantity - 1,
              }),
            )
          }
          aria-label={t("update")}
        >
          <Minus className="w-5 h-5 cursor-pointer" />
        </button>

        <span>{cartItem.quantity}</span>

        <button
          onClick={() =>
            dispatch(
              updateItemQuantity({
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }),
            )
          }
          aria-label={t("update")}
        >
          <Plus className="w-5 h-5 cursor-pointer" />
        </button>
      </div>

      <div className="w-20 text-right">${(cartItem.price * cartItem.quantity).toFixed(2)}</div>

      <button onClick={() => dispatch(removeItem(cartItem))} aria-label={t("remove")}>
        <Trash2 className="w-5 h-5 ml-4 cursor-pointer" />
      </button>
    </div>
  );
}
