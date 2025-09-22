"use client";

import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/auth/authSlice";
import type { User } from "@/store/slices/auth/authSlice.types";
import { useMutation } from "@tanstack/react-query";
import { apiLogin } from "../api/auth.api";
import { saveToken } from "../lib/persistAuth";
import type { LoginPayload, LoginResponse } from "../model/types";

export function useLoginMutation() {
  const dispatch = useAppDispatch();

  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: (payload) => apiLogin(payload),
    onSuccess: ({ token }) => {
      saveToken(token);

      const user: User = {
        id: 0,
        name: "Demo User",
        email: "demo@fakestoreapi.com",
      };

      dispatch(login(user));
    },
  });
}
