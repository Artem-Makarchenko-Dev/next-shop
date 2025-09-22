"use client";

import { selectCartItems } from "@/store/slices/cart/cartSlice.selectors";
import CartItem from "./CartItem";

export function CartList({ items }: { items: ReturnType<typeof selectCartItems> }) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-background rounded-2xl shadow-sm p-6 flex items-center gap-6 hover:shadow-md transition"
        >
          <CartItem cartItem={item} />
        </div>
      ))}
    </div>
  );
}
