# My pet-project with using React.js and Next.js

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com/)

---

## 🚀 Deployment

The project is deployed on **Vercel**:

[![Demo on Vercel](https://vercel.com/button)](https://artem-makarchenko-next-shop.vercel.app/)

---

## 📑 Table of Contents

- [My pet-project with using React.js and Next.js](#my-pet-project-with-using-reactjs-and-nextjs)
  - [🚀 Deployment](#-deployment)
  - [📖 Project Overview](#-project-overview)
  - [📂 Project Structure](#-project-structure)
  - [⚡ Features](#-features)
  - [🌍 Internationalization Example](#-internationalization-example)
  - [🌟 React & Next.js Features & Examples in This Project](#-react--nextjs-features--examples-in-this-project)
    - [⚛️ React](#️-react)
    - [⚡ Next.js](#-nextjs)
  - [🛠️ Getting Started](#️-getting-started)
  - [📜 License](#-license)

---

## 📖 Project Overview

Next-Shop is a demo **e-commerce web store** built as a pet-project using **React.js** and **Next.js (App Router)**.  
The goal was to showcase modern frontend practices with:

- 🌗 **Dark/Light theme switcher**
- 🌍 **Internationalization** (English + Ukrainian with `next-intl`)
- 🛒 **Shopping cart with persistence**
- 📦 **Product catalog and details pages**
- ✅ **Checkout with form validation**
- 🔐 **Auth forms (login/signup)**
- 📑 **Static informational pages** (FAQs, Privacy Policy, Terms of Service, etc.)
- 🚀 **Deployment on Vercel**

---

## 📂 Project Structure

```
/app                 → Next.js App Router pages (server & client)
/pages-client        → Client-only page components
/shared              → Shared UI components, contexts, utilities
/entities            → Business entities (product, review, user, etc.)
/features            → Feature modules (cart, filters, theme, i18n)
/widgets             → Page-level UI blocks (Header, Footer, Hero, etc.)
/messages            → Localization dictionaries (EN, UK)
public/              → Static assets
styles/              → Global CSS, Tailwind theme variables
tailwind.config.ts   → Tailwind configuration
next.config.ts       → Next.js configuration
```

---

## ⚡ Features

- **Responsive design** with TailwindCSS
- **Dark/Light mode** with `ThemeContext`
- **Multi-language support** (EN/UK) with `next-intl`
- **Cart functionality** (add, update, remove, total calculation)
- **Checkout flow** with validation and payment method select
- **Authentication**: signup & login forms
- **Product pages** with gallery, related products, reviews
- **Reusable UI components** (buttons, tags, modals, loaders, tooltips)
- **Static info pages**: FAQs, Shipping & Returns, Privacy Policy, Terms of Service, Contact
- **Deployment on Vercel** with build optimization

---

## 🌍 Internationalization Example

- `messages/en/*.json`
- `messages/uk/*.json`

Usage in code:

```tsx
import { useTranslations } from "next-intl";

const t = useTranslations("cart");
return <button>{t("actions.checkout")}</button>;
```

---

## 🌟 React & Next.js Features & Examples in This Project

### ⚛️ React

| Feature                                  | Example File                                                     |
| ---------------------------------------- | ---------------------------------------------------------------- |
| **JSX, Components, Props**               | `Header.tsx`, `ProductCard.tsx`                                  |
| **Events (onClick, onChange, onSubmit)** | `AuthForm.tsx`, `CartItem.tsx`                                   |
| **Conditional Rendering**                | `CartWidget.tsx`, `UserLoginButton.tsx`                          |
| **List Rendering**                       | `ProductsGrid.tsx`, `Footer.tsx`                                 |
| **Fragments**                            | `ProductsPageClient.tsx`                                         |
| **StrictMode**                           | `layout.tsx`                                                     |
| **useState**                             | `ProductQuickViewModal.tsx`, `ProductReviews.tsx`                |
| **useEffect**                            | `TooltipProvider.tsx`, `ThemeContext.tsx`                        |
| **useContext**                           | `ThemeToggle.tsx`, `LocaleSwitcher.tsx`                          |
| **useReducer**                           | `CheckoutForm.tsx`, `AuthForm.tsx`, `ProductsPageClient.tsx`     |
| **useMemo / useCallback**                | `ProductFiltersForm.tsx`, `ProductsPageClient.tsx`               |
| **useRef**                               | `TooltipProvider.tsx`, `TextInput.tsx`                           |
| **forwardRef / useImperativeHandle**     | `TextInput.tsx` (focus)                                          |
| **Custom Hooks**                         | `useCartPersist.ts`, `useServerLocale.ts`, `useProductsQuery.ts` |
| **React.memo**                           | `ProductCard.tsx`                                                |
| **Selectors + memoization**              | `cartSlice.selectors.ts`, `authSlice.selectors.ts`               |
| **API requests (React Query)**           | `useProductsQuery.ts`, `useProductQuery.ts`                      |
| **Cookies / localStorage**               | `useCartPersist.ts`, `ThemeContext.tsx`                          |
| **SSR hydration with React Query**       | `ProductsPageClient.tsx`                                         |
| **Redux Toolkit (state management)**     | `cartSlice.ts`, `authSlice.ts`                                   |
| **Redux selectors**                      | `cartSlice.selectors.ts`, `authSlice.selectors.ts`               |
| **Portals**                              | `Modal.tsx`, `ProductQuickViewModal.tsx`                         |
| **ErrorBoundary**                        | `ErrorBoundary.tsx`                                              |
| **Suspense + lazy**                      | `CartPageClient.tsx`, `CheckoutPageClient.tsx`                   |
| **Loader / Skeleton**                    | `Loader.tsx`, `ProductSkeleton.tsx`                              |
| **Error handling (refetch, retry)**      | `ErrorState.tsx`                                                 |
| **Tooltip (Render Props)**               | `TooltipProvider.tsx`, `CartWidget.tsx`                          |
| **HOC (withLoading)**                    | `withLoading.tsx`                                                |
| **Compound Components**                  | `ProductGallery.tsx`                                             |
| **Uncontrolled components**              | `TextInput.tsx`                                                  |

---

### ⚡ Next.js

| Feature                                   | Example File                                                             |
| ----------------------------------------- | ------------------------------------------------------------------------ |
| **App Router (Server Components)**        | `/app/page.tsx`, `/app/(routes)/products/[id]/page.tsx`                  |
| **Client Components (`"use client"`)**    | `CartWidget.tsx`, `ThemeToggle.tsx`                                      |
| **Dynamic Routes**                        | `/app/(routes)/products/[id]/page.tsx`                                   |
| **Catch-all Routes**                      | `/app/(routes)/info/[[...slug]]/page.tsx`                                |
| **notFound()**                            | `ProductDetailsPageClient.tsx`                                           |
| **Link Prefetching**                      | `<Link>` in `HeaderNav.tsx`                                              |
| **CSR (Client-Side Rendering)**           | `useProductsQuery.ts`, `useProductQuery.ts`                              |
| **SSR (Server-Side Rendering)**           | `product/[id]/page.tsx`                                                  |
| **SSG (Static Site Generation)**          | `ContactPage.tsx`, `AboutPage.tsx`                                       |
| **ISR (Incremental Static Regeneration)** | `products/page.tsx` with `revalidate`                                    |
| **React Query + SSR Hydration**           | `ProductsPageClient.tsx`                                                 |
| **Middleware (auth guard)**               | `middleware.ts`                                                          |
| **Layouts**                               | `layout.tsx` (global), nested layouts                                    |
| **next/font**                             | `layout.tsx` (Geist, Geist_Mono)                                         |
| **next/image**                            | `ProductCard.tsx`, `ProductGallery.tsx`                                  |
| **next/script**                           | `layout.tsx` (Google Analytics)                                          |
| **Tailwind CSS (themes)**                 | `globals.css`, `tailwind.config.ts`                                      |
| **Global Styles**                         | `globals.css`                                                            |
| **CSS Modules / SCSS**                    | `ProductCard.module.scss`                                                |
| **Suspense / lazy**                       | `CartPageClient.tsx`, `CheckoutPageClient.tsx`                           |
| **Prefetch / caching**                    | Links with ISR/SSG                                                       |
| **SEO: metadata**                         | `layout.tsx`, `product/[id]/page.tsx`                                    |
| **OpenGraph / Twitter Metadata**          | `product/[id]/page.tsx`                                                  |
| **Favicon**                               | `/public/favicon.ico`                                                    |
| **Deployment on Vercel**                  | `vercel.json`, `next.config.ts`                                          |
| **Internationalization (next-intl)**      | `Header.tsx`, `Footer.tsx`, `/messages/en/*.json`, `/messages/uk/*.json` |
| **Dark/Light Theme Toggle**               | `ThemeContext.tsx`, `ThemeToggle.tsx`                                    |

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Artem-Makarchenko-Dev/next-shop.git
cd next-shop
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run development server

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 📜 License

This project is created as a personal **pet-project** for learning purposes.  
Feel free to fork and experiment!
