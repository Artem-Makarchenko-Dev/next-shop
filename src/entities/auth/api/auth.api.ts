import type { RegisterPayload, RegisterResponse } from "../model/types";

export async function apiLogin(payload: { email: string; password: string }) {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Login failed");
  }

  return res.json();
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
