export enum Field {
  NAME = "name",
  EMAIL = "email",
  USERNAME = "username",
  PASSWORD = "password",
}

export enum ActionType {
  UPDATE = "UPDATE",
  SET_ERRORS = "SET_ERRORS",
  SUBMIT_START = "SUBMIT_START",
  SUBMIT_END = "SUBMIT_END",
  RESET = "RESET",
}

export interface State {
  name?: string;
  email: string;
  username?: string;
  password: string;
  loading: boolean;
  errors: Partial<Record<Field, string>>;
}

export type Action =
  | { type: ActionType.UPDATE; field: Field; value: string }
  | { type: ActionType.SET_ERRORS; errors: State["errors"] }
  | { type: ActionType.SUBMIT_START }
  | { type: ActionType.SUBMIT_END }
  | { type: ActionType.RESET };

export type AuthFormMode = "signup" | "login";
