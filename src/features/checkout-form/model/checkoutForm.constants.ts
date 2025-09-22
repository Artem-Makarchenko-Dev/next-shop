import { useTranslations } from "next-intl";

export const getPaymentOptions = (t: ReturnType<typeof useTranslations>) => [
  { value: "", label: t("form.choose") },
  { value: "card", label: t("payment.card") },
  { value: "cod", label: t("payment.cod") },
  { value: "paypal", label: t("payment.paypal") },
];
