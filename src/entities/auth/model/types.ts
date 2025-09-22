export type Username = string;
export type Password = string;

export interface LoginPayload {
  username: Username;
  password: Password;
}

export interface LoginResponse {
  token: string;
}

export interface RegisterPayload {
  id?: number;
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  id: number;
  username: string;
  email: string;
  password: string;
}
