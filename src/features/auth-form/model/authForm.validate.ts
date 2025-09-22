import { AuthFormMode, Field, State } from "./authForm.types";

export function validateAuthForm(
  state: State,
  mode: AuthFormMode,
  t: (key: string) => string,
): State["errors"] {
  const errors: State["errors"] = {};

  if (mode === "signup" && !state.name?.trim()) {
    errors[Field.NAME] = t("errors.required");
  }

  if (!state.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    errors[Field.EMAIL] = t("errors.invalidEmail");
  }

  if (state.password.length < 6) {
    errors[Field.PASSWORD] = t("errors.shortPassword");
  }

  return errors;
}
