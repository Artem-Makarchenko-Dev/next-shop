"use client";

import { Product } from "@/entities/product/model/types";
import { useAppDispatch } from "@/store/hooks";
import { addItem } from "@/store/slices/cart/cartSlice";
import { useTranslations } from "next-intl";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const dispatch = useAppDispatch();
  const t = useTranslations("cart");

  return (
    <button
      onClick={() => dispatch(addItem({ ...product, quantity: 1 }))}
      className="px-6 py-3 bg-gray-900 text-white rounded-xl shadow hover:shadow-lg hover:bg-black transition active:scale-95 cursor-pointer"
    >
      {t("add")}
    </button>
  );
}
