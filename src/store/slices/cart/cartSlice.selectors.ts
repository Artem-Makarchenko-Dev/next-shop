import { RootState } from "@/store";
import { CartItemType } from "./cartSlice.types";

export const selectCartItems = (s: RootState): CartItemType[] => s.cart.items;

export const selectItemCount = (s: RootState): number =>
  s.cart.items.reduce((sum, i) => sum + i.quantity, 0);

export const selectTotal = (s: RootState): number =>
  s.cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
