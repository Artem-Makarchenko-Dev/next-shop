import type { RegisterPayload, RegisterResponse } from "../model/types";
import {axiosClient} from "@/shared/api/axiosClient";
import axios from "axios";

export async function apiLogin(payload: { email: string; password: string }) {
  try {
    const { data } = await axiosClient.post("/auth/login", payload);
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      throw new Error(error.response?.data?.message ?? "Login failed");
    }
    throw new Error("Unexpected error occurred");
  }
}

export async function apiRegister(payload: RegisterPayload): Promise<RegisterResponse> {
  const res = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      password: payload.password,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to register user");
  }

  return res.json();
}
