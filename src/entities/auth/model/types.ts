export type Username = string;
export type Password = string;

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  name: string;
  email: string;
}

export interface RegisterPayload {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  id: number;
  name: string;
  email: string;
}
