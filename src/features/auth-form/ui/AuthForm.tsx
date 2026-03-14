"use client";

import { useEffect, useReducer } from "react";
import { useLoginMutation } from "@/entities/auth/mutations/useLoginMutation";
import { useRegisterMutation } from "@/entities/auth/mutations/useRegisterMutation";
import FieldInput from "@/shared/ui/FieldInput";
import type { Route } from "next";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { authFormReducer, initialAuthState } from "../model/authForm.reducer";
import { ActionType, AuthFormMode, Field } from "../model/authForm.types";

interface AuthFormProps {
  mode: AuthFormMode;
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [state, dispatch] = useReducer(authFormReducer, initialAuthState);
  const t = useTranslations("auth");
  const router = useRouter();
  const searchParams = useSearchParams();

  const loginMutation = useLoginMutation();
  const registerMutation = useRegisterMutation();

  const redirectTo: string = searchParams.get("redirectTo") || "/";

  useEffect(() => {
    if (loginMutation.isSuccess || registerMutation.isSuccess) {
      router.push(redirectTo as Route);
    }
  }, [loginMutation.isSuccess, registerMutation.isSuccess, router, redirectTo]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: ActionType.SUBMIT_START });

    // const errors = validateAuthForm(state, mode, t);

    // if (Object.keys(errors).length) {
    //   dispatch({ type: ActionType.SET_ERRORS, errors });
    //   dispatch({ type: ActionType.SUBMIT_END });
    //   return;
    // }

    if (mode === "login") {
      loginMutation.mutate(
        { email: state.email, password: state.password },
        {
          onSettled: () => dispatch({ type: ActionType.SUBMIT_END }),
        },
      );
    } else {
      registerMutation.mutate(
        {
          email: state.email,
          name: state.name || "User",
          password: state.password,
        },
        {
          onSettled: () => dispatch({ type: ActionType.SUBMIT_END }),
        },
      );
    }
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
        label={`${t("form.password")} ${mode === "login" && "(83r5^_)"}`}
        placeholder={t("placeholders.password")}
        value={state.password}
        onChange={(v) => dispatch({ type: ActionType.UPDATE, field: Field.PASSWORD, value: v })}
        error={state.errors[Field.PASSWORD]}
      />

      <button
        type="submit"
        disabled={state.loading || loginMutation.isPending || registerMutation.isPending}
        className="w-full px-6 py-3 bg-gray-900 text-white rounded-xl shadow hover:shadow-lg hover:bg-black transition cursor-pointer"
      >
        {state.loading || loginMutation.isPending || registerMutation.isPending
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
