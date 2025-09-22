import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItemType, CartState } from "./cartSlice.types";

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    hydrateCart: (state, { payload }: PayloadAction<CartState>) => {
      return payload || state;
    },
    addItem: (state, { payload }: PayloadAction<CartItemType>) => {
      const selectedItem = state.items.find((i) => i.id === payload.id);
      if (selectedItem) {
        selectedItem.quantity += payload.quantity;
      } else {
        state.items.push(payload);
      }
    },
    removeItem: (state, { payload }: PayloadAction<CartItemType>) => {
      state.items = state.items.filter((i) => i.id !== payload.id);
    },
    updateItemQuantity: (state, { payload }: PayloadAction<CartItemType>) => {
      const item = state.items.find((i) => i.id === payload.id);
      if (item) {
        item.quantity = payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { hydrateCart, addItem, removeItem, updateItemQuantity, clearCart } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
