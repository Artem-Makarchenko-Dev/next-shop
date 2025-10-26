export type Username = string;
export type Password = string;

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    name: string;
    email: string;
    dateOfBirthday: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    roles: string[];
    refreshToken: string;
  };
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
