"use client";

import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/auth/authSlice";
import type { User } from "@/store/slices/auth/authSlice.types";
import { useMutation } from "@tanstack/react-query";
import { apiRegister } from "../api/auth.api";
import { saveToken } from "../lib/persistAuth";
import type { RegisterPayload, RegisterResponse } from "../model/types";

export function useRegisterMutation() {
  const dispatch = useAppDispatch();

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
    },
  });
}
