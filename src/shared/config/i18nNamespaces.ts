export const I18N_NAMESPACES = [
  "common",
  "auth",
  "cart",
  "checkout",
  "contacts",
  "about",
  "faqs",
  "home",
  "privacy-policy",
  "product",
  "products",
  "shipping-and-returns",
  "terms-of-service",
  "order-decline",
  "order-success",
] as const;

export type I18nNamespace = (typeof I18N_NAMESPACES)[number];
