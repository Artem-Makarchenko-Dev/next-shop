import { I18N_NAMESPACES } from "@/shared/config/i18nNamespaces";
import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { SupportedLocale, loadDictionaries } from "./dictionaries";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const headerStore = await headers();

  const cookieLocale = cookieStore.get("locale")?.value;
  const browserLocale = headerStore.get("accept-language")?.split(",")[0].slice(0, 2);

  const locale: SupportedLocale = cookieLocale === "uk" || browserLocale === "uk" ? "uk" : "en";

  const dictionaries = await loadDictionaries();
  const messages = Object.fromEntries(I18N_NAMESPACES.map((ns) => [ns, dictionaries[locale][ns]]));

  return {
    locale,
    messages,
  };
});
