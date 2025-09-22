"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/auth/authSlice";
import { User } from "@/store/slices/auth/authSlice.types";
import Cookies from "js-cookie";

export function useAuthPersist() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const user: User = {
        id: 0,
        name: "Demo User",
        email: "demo@fakestoreapi.com",
      };
      dispatch(login(user));
    }
  }, [dispatch]);
}
