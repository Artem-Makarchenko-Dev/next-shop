"use client";

import { useState } from "react";
import { Product } from "@/entities/product/model/types";
import { showToast } from "@/shared/lib/showToast";
import { useAppDispatch } from "@/store/hooks";
import { addItem } from "@/store/slices/cart/cartSlice";
import { Check, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import styles from "./AddToCartIconButton.module.scss";

interface AddToCartIconButtonProps {
  product: Product;
}

export function AddToCartIconButton({ product }: AddToCartIconButtonProps) {
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const [added, setAdded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addItem({ ...product, quantity: 1 }));
    showToast(t("common.toasts.success"), "success");
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.button} ${added ? styles.added : ""}`}
    >
      {added ? <Check className={styles.icon} /> : <Plus className={styles.icon} />}
    </button>
  );
}
