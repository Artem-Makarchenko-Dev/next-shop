export const CONFIG = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "https://fakestoreapi.com",
  defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? "en",
  availableLocales: (process.env.NEXT_PUBLIC_AVAILABLE_LOCALES ?? "en,uk,pl").split(","),
  enableCartDiscounts: process.env.NEXT_PUBLIC_ENABLE_CART_DISCOUNTS === "true",
} as const;
