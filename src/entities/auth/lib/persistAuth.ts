"use client";

import Cookies from "js-cookie";

const TOKEN_KEY = "token";

export function saveToken(token: string) {
  Cookies.set(TOKEN_KEY, token, {
    expires: 7,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
}

export function getToken(): string | null {
  return Cookies.get(TOKEN_KEY) || null;
}

export function clearToken() {
  Cookies.remove(TOKEN_KEY, { path: "/" });
}
