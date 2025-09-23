"use client";

import { showToast } from "@/shared/lib/showToast";
import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/auth/authSlice";
import type { User } from "@/store/slices/auth/authSlice.types";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { apiLogin } from "../api/auth.api";
import { saveToken } from "../lib/persistAuth";
import type { LoginPayload, LoginResponse } from "../model/types";

export function useLoginMutation() {
  const dispatch = useAppDispatch();
  const t = useTranslations("common.toasts");

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

      showToast(t("success"), "success");
    },
    onError: (error) => {
      showToast(error.message, "error");
    },
  });
}
