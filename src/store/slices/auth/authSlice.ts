import { clearUser } from "@/entities/auth/lib/persistAuth";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState, User } from "./authSlice.types";

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
      clearUser();
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
