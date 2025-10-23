"use client";

import Cookies from "js-cookie";
import { LoginResponse } from "../model/types";

const USER = "user";

export function saveUser(user: LoginResponse) {
  Cookies.set(USER, JSON.stringify(user));
}

export function getUser(): string | null {
  return Cookies.get(USER) || null;
}

export function clearUser() {
  Cookies.remove(USER, { path: "/" });
}
