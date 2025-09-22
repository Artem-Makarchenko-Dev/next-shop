"use client";

import { Product } from "../model/types";
import ProductCard from "./ProductСard/ProductCard";

interface Props {
  products: Product[];
  onSelect?: (product: Product) => void;
}

export default function ProductsGrid({ products, onSelect }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => onSelect && onSelect(product)}
          className="cursor-pointer"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
