import { Action, PaymentMethod, СheckoutFormInitialState } from "./checkoutForm.types";

export const initialState: СheckoutFormInitialState = {
  fullName: "",
  email: "",
  address: "",
  city: "",
  paymentMethod: PaymentMethod.NONE,
  loading: false,
  errors: {},
};

export function checkoutFormReducer(
  state: СheckoutFormInitialState,
  action: Action,
): СheckoutFormInitialState {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: undefined },
      };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "SUBMIT_START":
      return { ...state, loading: true };
    case "SUBMIT_END":
      return { ...state, loading: false };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
