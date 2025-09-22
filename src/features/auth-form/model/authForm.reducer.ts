import { Action, ActionType, State } from "./authForm.types";

export const initialAuthState: State = {
  name: "",
  email: "",
  password: "",
  username: "",
  loading: false,
  errors: {},
};

export function authFormReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.UPDATE:
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: undefined },
      };
    case ActionType.SET_ERRORS:
      return { ...state, errors: action.errors };
    case ActionType.SUBMIT_START:
      return { ...state, loading: true };
    case ActionType.SUBMIT_END:
      return { ...state, loading: false };
    case ActionType.RESET:
      return initialAuthState;
    default:
      return state;
  }
}
