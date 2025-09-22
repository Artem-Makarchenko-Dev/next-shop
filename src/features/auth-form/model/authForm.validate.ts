import { AuthFormMode, Field, State } from "./authForm.types";

export function validateAuthForm(state: State, mode: AuthFormMode, t: (key: string) => string) {
  const errors: Partial<Record<Field, string>> = {};

  if (mode === "signup") {
    if (!state.name) errors[Field.NAME] = t("errors.required");
    if (!state.email) errors[Field.EMAIL] = t("errors.required");
    else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors[Field.EMAIL] = t("errors.invalidEmail");
    }
  }

  if (mode === "login") {
    if (!state.username) errors[Field.USERNAME] = t("errors.required");
  }

  if (!state.password) errors[Field.PASSWORD] = t("errors.required");
  else if (state.password.length < 6) {
    errors[Field.PASSWORD] = t("errors.shortPassword");
  }

  return errors;
}
