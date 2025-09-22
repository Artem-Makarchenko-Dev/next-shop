"use client";

import { useReducer } from "react";
import FieldInput from "@/shared/ui/FieldInput";
import { useTranslations } from "next-intl";
import { authFormReducer, initialAuthState } from "../model/authForm.reducer";
import { ActionType, AuthFormMode, Field } from "../model/authForm.types";
import { validateAuthForm } from "../model/authForm.validate";

interface AuthFormProps {
  mode: AuthFormMode;
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [state, dispatch] = useReducer(authFormReducer, initialAuthState);
  const t = useTranslations("auth");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: ActionType.SUBMIT_START });

    const errors = validateAuthForm(state, mode, t);
    if (Object.keys(errors).length) {
      dispatch({ type: ActionType.SET_ERRORS, errors });
      dispatch({ type: ActionType.SUBMIT_END });
      return;
    }

    setTimeout(() => {
      dispatch({ type: ActionType.SUBMIT_END });
    }, 1200);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {mode === "signup" && (
        <FieldInput
          label={t("form.name")}
          placeholder={t("placeholders.name")}
          value={state.name || ""}
          onChange={(v) => dispatch({ type: ActionType.UPDATE, field: Field.NAME, value: v })}
          error={state.errors[Field.NAME]}
        />
      )}

      <FieldInput
        label={t("form.email")}
        placeholder={t("placeholders.email")}
        value={state.email}
        onChange={(v) => dispatch({ type: ActionType.UPDATE, field: Field.EMAIL, value: v })}
        error={state.errors[Field.EMAIL]}
        type="email"
      />

      <FieldInput
        label={t("form.password")}
        placeholder={t("placeholders.password")}
        value={state.password}
        onChange={(v) => dispatch({ type: ActionType.UPDATE, field: Field.PASSWORD, value: v })}
        error={state.errors[Field.PASSWORD]}
        type="password"
      />

      <button
        type="submit"
        disabled={state.loading}
        className="w-full px-6 py-3 bg-gray-900 text-white rounded-xl shadow hover:shadow-lg hover:bg-black transition cursor-pointer"
      >
        {state.loading
          ? mode === "signup"
            ? t("actions.creating")
            : t("actions.signingIn")
          : mode === "signup"
            ? t("actions.signUp")
            : t("actions.signIn")}
      </button>
    </form>
  );
}
