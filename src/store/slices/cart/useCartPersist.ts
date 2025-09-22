import { useEffect, useRef } from "react";
import { STORAGE_KEYS } from "@/shared/config/storageKeys";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { hydrateCart } from "./cartSlice";
import { selectCartItems } from "./cartSlice.selectors";

export function useCartPersist() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const hydrated = useRef(false);

  useEffect(() => {
    if (!hydrated.current) {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.CART);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed?.cart?.items) {
            dispatch(hydrateCart(parsed.cart));
          }
        }
      } catch {
        throw new Error("Cart wasn`t hydrated");
      }
      hydrated.current = true;
    }
  }, [dispatch]);

  useEffect(() => {
    if (!hydrated.current) return;
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify({ cart: { items } }));
    } catch {
      throw new Error("Cart wasn`t updated");
    }
  }, [items]);
}
