import { Instagram, Linkedin, Twitter } from "lucide-react";

export const navLinks = [
  { href: "/products", key: "products" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export const supportLinks = [
  { href: "/info/shipping-and-returns", key: "shipping" },
  { href: "/info/faqs", key: "faqs" },
  { href: "/info/privacy-policy", key: "privacy" },
  { href: "/info/terms-of-service", key: "terms" },
] as const;

export const socialLinks = [
  { href: "https://www.instagram.com", key: "instagram", Icon: Instagram },
  { href: "https://linkedin.com", key: "linkedin", Icon: Linkedin },
  { href: "https://x.com", key: "twitter", Icon: Twitter },
] as const;
