"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/auth/authSlice";
import { User } from "@/store/slices/auth/authSlice.types";
import Cookies from "js-cookie";

export function useAuthPersist() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      dispatch(login(JSON.parse(user) as User));
    }
  }, [dispatch]);
}
