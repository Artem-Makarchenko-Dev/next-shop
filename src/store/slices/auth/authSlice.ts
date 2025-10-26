import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tokenService } from "@/shared/lib/tokenService";
import {axiosClient} from "@/shared/api/axiosClient";

export interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      tokenService.clear();
      state.user = null;
      state.isAuthenticated = false;
    },
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;

export const checkAuth = () => async (dispatch: any) => {
  const token = tokenService.getAccess();
  if (!token) return;

  try {
    const { data } = await axiosClient.get("/auth/me");
    dispatch(setUser(data));
  } catch {
    dispatch(logout());
  }
};