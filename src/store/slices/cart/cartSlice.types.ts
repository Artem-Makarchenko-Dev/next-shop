import { Product } from "@/entities/product/model/types";

export interface CartItemType extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItemType[];
}
