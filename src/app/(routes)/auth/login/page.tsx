import AuthForm from "@/features/auth-form/ui/AuthForm";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function LoginPage() {
  const t = await getTranslations("auth");

  return (
    <section className="max-w-md mx-auto px-6 py-20">
      <div className="bg-background rounded-2xl shadow-sm p-10 space-y-6">
        <h1 className="text-3xl font-bold text-foreground-900 text-center">{t("login.title")}</h1>

        <AuthForm mode="login" />

        <p className="text-sm text-center text-foreground-500">
          {t("login.noAccount")}{" "}
          <Link href="/auth/signup" className="text-foreground-900 hover:underline">
            {t("actions.signUp")}
          </Link>
        </p>
      </div>
    </section>
  );
}
