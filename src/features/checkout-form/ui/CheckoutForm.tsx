"use client";

import { useReducer } from "react";
import { showToast } from "@/shared/lib/showToast";
import FieldInput from "@/shared/ui/FieldInput";
import { useAppDispatch } from "@/store/hooks";
import { clearCart } from "@/store/slices/cart/cartSlice";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { getPaymentOptions } from "../model/checkoutForm.constants";
import { checkoutFormReducer, initialState } from "../model/checkoutForm.reducer";
import {
  Field,
  СheckoutFormActionType,
  СheckoutFormInitialState,
} from "../model/checkoutForm.types";

export function CheckoutForm() {
  const [state, dispatch] = useReducer(checkoutFormReducer, initialState);
  const router = useRouter();
  const t = useTranslations("checkout");
  const tCommon = useTranslations("common");
  const paymentOptions = getPaymentOptions(t);
  const reduxDispatch = useAppDispatch();

  const validate = (): СheckoutFormInitialState["errors"] => {
    const errors: СheckoutFormInitialState["errors"] = {};
    if (!state.fullName.trim()) errors.fullName = t("errors.required");
    if (!state.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = t("errors.invalidEmail");
    if (!state.address.trim()) errors.address = t("errors.required");
    if (!state.city.trim()) errors.city = t("errors.required");
    if (!state.paymentMethod) errors.paymentMethod = t("errors.chooseMethod");
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: СheckoutFormActionType.SUBMIT_START });
    const errors = validate();
    if (Object.keys(errors).length) {
      dispatch({ type: СheckoutFormActionType.SET_ERRORS, errors });
      dispatch({ type: СheckoutFormActionType.SUBMIT_END });
      return;
    }

    setTimeout(() => {
      dispatch({ type: СheckoutFormActionType.RESET });
      reduxDispatch(clearCart());
      showToast(tCommon("toasts.success"), "success");
      router.push("/order-success");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-background rounded-2xl shadow-sm p-10 space-y-6">
      <h1 className="text-4xl font-bold text-foreground-900 mb-6">{t("title")}</h1>

      <FieldInput
        label={t("form.fullName")}
        value={state.fullName}
        error={state.errors.fullName}
        onChange={(v) =>
          dispatch({ type: СheckoutFormActionType.UPDATE, field: Field.FULL_NAME, value: v })
        }
      />

      <FieldInput
        label={t("form.email")}
        type="email"
        value={state.email}
        error={state.errors.email}
        onChange={(v) =>
          dispatch({ type: СheckoutFormActionType.UPDATE, field: Field.EMAIL, value: v })
        }
      />

      <FieldInput
        label={t("form.address")}
        value={state.address}
        error={state.errors.address}
        onChange={(v) =>
          dispatch({ type: СheckoutFormActionType.UPDATE, field: Field.ADDRESS, value: v })
        }
      />

      <FieldInput
        label={t("form.city")}
        value={state.city}
        error={state.errors.city}
        onChange={(v) =>
          dispatch({ type: СheckoutFormActionType.UPDATE, field: Field.CITY, value: v })
        }
      />

      <div>
        <label className="block text-sm font-medium text-foreground-700 mb-1">
          {t("form.paymentMethod")}
        </label>
        <select
          value={state.paymentMethod}
          onChange={(e) =>
            dispatch({
              type: СheckoutFormActionType.UPDATE,
              field: Field.PAYMENT_METHOD,
              value: e.target.value,
            })
          }
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-background focus:outline-none focus:ring-2 focus:ring-gray-900"
        >
          {paymentOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {state.errors.paymentMethod && (
          <p className="mt-1 text-sm text-red-600">{state.errors.paymentMethod}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={state.loading}
        className="w-full px-6 py-4 bg-gray-900 text-white rounded-xl shadow hover:shadow-lg hover:bg-black transition disabled:opacity-50 cursor-pointer"
      >
        {state.loading ? t("actions.placingOrder") : t("actions.placeOrder")}
      </button>
    </form>
  );
}
