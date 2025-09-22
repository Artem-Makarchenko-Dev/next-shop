export enum Field {
  FULL_NAME = "fullName",
  EMAIL = "email",
  ADDRESS = "address",
  CITY = "city",
  PAYMENT_METHOD = "paymentMethod",
}

export enum PaymentMethod {
  CARD = "card",
  COD = "cod",
  PAYPAL = "paypal",
  NONE = "",
}

export enum СheckoutFormActionType {
  UPDATE = "UPDATE",
  SET_ERRORS = "SET_ERRORS",
  SUBMIT_START = "SUBMIT_START",
  SUBMIT_END = "SUBMIT_END",
  RESET = "RESET",
}

export interface СheckoutFormInitialState {
  fullName: string;
  email: string;
  address: string;
  city: string;
  paymentMethod: PaymentMethod;
  loading: boolean;
  errors: Partial<Record<Field, string>>;
}

export type Action =
  | { type: СheckoutFormActionType.UPDATE; field: Field; value: string }
  | { type: СheckoutFormActionType.SET_ERRORS; errors: СheckoutFormInitialState["errors"] }
  | { type: СheckoutFormActionType.SUBMIT_START }
  | { type: СheckoutFormActionType.SUBMIT_END }
  | { type: СheckoutFormActionType.RESET };
