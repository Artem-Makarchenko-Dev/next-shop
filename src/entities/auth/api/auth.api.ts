import { axiosClient } from "@/shared/api/axiosClient";
import type {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from "../model/types";

export async function apiLogin(payload: LoginPayload): Promise<LoginResponse> {
  const { data } = await axiosClient.post<LoginResponse>("/auth/login", payload);
  return data;
}

export async function apiRegister(payload: RegisterPayload): Promise<RegisterResponse> {
  const { data } = await axiosClient.post<RegisterResponse>("/users", payload);
  return data;
}
