"use client";

import { memo } from "react";
import { AddToCartIconButton } from "@/features/add-to-cart/ui/AddToCartIconButton/AddToCartIconButton";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../model/types";
import styles from "./ProductCard.module.scss";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.card}>
      <Link href={`/products/${product.id}`} prefetch={true} onClick={(e) => e.stopPropagation()}>
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className={styles.image}
        />
      </Link>

      <div className={styles.content}>
        <Link href={`/products/${product.id}`} onClick={(e) => e.stopPropagation()}>
          <h3 className={styles.title}>{product.title}</h3>
        </Link>

        <p className={styles.description}>{product.description}</p>

        <div className="mt-auto">
          <p className={styles.category}>{product.category}</p>
          <div className={styles.bottom}>
            <span className={styles.price}>${product.price}</span>
            <AddToCartIconButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(
  ProductCard,
  (prevProps, nextProps) => prevProps.product.id === nextProps.product.id,
);
