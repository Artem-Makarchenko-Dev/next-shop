"use client";

import { Product } from "@/entities/product/model/types";
import { AddToCartIconButton } from "@/features/add-to-cart/ui/AddToCartIconButton/AddToCartIconButton";
import Modal from "@/shared/ui/Modal";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductQuickViewModal({ product, onClose }: ProductQuickViewModalProps) {
  const t = useTranslations("products");

  return (
    <Modal isOpen={!!product} onClose={onClose}>
      {product && (
        <div className="space-y-6">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={400}
            className="object-contain mx-auto"
          />
          <h2 className="text-xl font-bold text-foreground-900 mb-4">{product.title}</h2>
          <p className="text-foreground-600 text-sm">{product.description}</p>
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold text-foreground-900">
              {t("labels.price")}: ${product.price}
            </div>
            <div className="flex items-center space-x-4">
              <AddToCartIconButton product={product} />
              <Link
                href={`/products/${product.id}`}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 text-white px-4 py-2 rounded-xl shadow hover:bg-black hover:shadow-lg transition text-sm h-10"
              >
                {t("actions.goToProduct")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
