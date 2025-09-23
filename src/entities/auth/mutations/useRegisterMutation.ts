"use client";

import { showToast } from "@/shared/lib/showToast";
import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/auth/authSlice";
import type { User } from "@/store/slices/auth/authSlice.types";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { apiRegister } from "../api/auth.api";
import { saveToken } from "../lib/persistAuth";
import type { RegisterPayload, RegisterResponse } from "../model/types";

export function useRegisterMutation() {
  const dispatch = useAppDispatch();
  const t = useTranslations("common.toasts");

  return useMutation<RegisterResponse, Error, RegisterPayload>({
    mutationFn: (payload) => apiRegister(payload),
    onSuccess: (response) => {
      saveToken("mock-token");

      const user: User = {
        id: response.id,
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
