import AuthForm from "@/features/auth-form/ui/AuthForm";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function SignupPage() {
  const t = await getTranslations("auth");

  return (
    <section className="max-w-md mx-auto px-6 py-20">
      <div className="bg-background rounded-2xl shadow-sm p-10 space-y-6">
        <h1 className="text-3xl font-bold text-foreground-900 text-center">{t("signup.title")}</h1>
        <AuthForm mode="signup" />
        <p className="text-sm text-foreground-500 text-center">
          {t("signup.already")}{" "}
          <Link href="/auth/login" className="text-foreground-900 hover:underline">
            {t("actions.signIn")}
          </Link>
        </p>
      </div>
    </section>
  );
}
