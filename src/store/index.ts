import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth/authSlice";
import { cartReducer } from "./slices/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
