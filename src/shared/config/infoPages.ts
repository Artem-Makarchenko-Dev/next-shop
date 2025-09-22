import { JSX, lazy } from "react";

export const infoPages: Record<
  string,
  { title: string; component: React.LazyExoticComponent<() => JSX.Element> }
> = {
  "shipping-and-returns": {
    title: "Shipping & Returns",
    component: lazy(() => import("@/pages-client/ShippingAndReturnsPageClient")),
  },
  faqs: {
    title: "FAQs",
    component: lazy(() => import("@/pages-client/FaqsPageClient")),
  },
  "privacy-policy": {
    title: "Privacy Policy",
    component: lazy(() => import("@/pages-client/PrivacyPolicyPageClient")),
  },
  "terms-of-service": {
    title: "Terms of Service",
    component: lazy(() => import("@/pages-client/TermsOfServicePageClient")),
  },
};
