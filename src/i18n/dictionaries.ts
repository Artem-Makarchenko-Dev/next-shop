import { baseFiles } from "./baseFilesConfig";
import { makeLocaleFiles } from "./makeLocaleFiles";

const locales = {
  en: makeLocaleFiles("en", baseFiles),
  uk: makeLocaleFiles("uk", baseFiles),
} as const;

export type SupportedLocale = keyof typeof locales;
export type Namespace = (typeof locales)[SupportedLocale][number]["ns"];

export type MessagesForLocale = {
  [K in Namespace]?: Record<string, unknown>;
};

export type Messages = Record<SupportedLocale, MessagesForLocale>;

export async function loadDictionaries(): Promise<Messages> {
  const out: Partial<Messages> = {};

  for (const [locale, files] of Object.entries(locales) as [
    SupportedLocale,
    (typeof locales)[SupportedLocale],
  ][]) {
    const localeMessages: MessagesForLocale = {};

    for (const f of files) {
      const mod = await f.importFn();
      localeMessages[f.ns] = mod.default;
    }

    out[locale] = localeMessages;
  }

  return out as Messages;
}
