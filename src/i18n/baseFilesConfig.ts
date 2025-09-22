export const baseFiles = [
  { name: "common", url: "/common.json" },
  { name: "auth", url: "/auth.json" },
  { name: "cart", url: "/cart.json" },
  { name: "checkout", url: "/checkout.json" },
  { name: "contacts", url: "/contacts.json" },
  { name: "about", url: "/about.json" },
  { name: "faqs", url: "/faqs.json" },
  { name: "home", url: "/home.json" },
  { name: "privacy-policy", url: "/privacy-policy.json" },
  { name: "product", url: "/product.json" },
  { name: "products", url: "/products.json" },
  { name: "shipping-and-returns", url: "/shipping-and-returns.json" },
  { name: "terms-of-service", url: "/terms-of-service.json" },
  { name: "order-decline", url: "/order-decline.json" },
  { name: "order-success", url: "/order-success.json" },
];

export type BaseFile = (typeof baseFiles)[number];
