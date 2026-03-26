# Shop Kit

Modern e-commerce frontend designed to demonstrate scalable UI architecture, component reusability, and real-world client-side patterns.

## Live Demo

The application is deployed on Vercel and can be accessed here: [Open Application](https://artem-makarchenko-shop-kit-web.vercel.app)

Explore full UI flows: product catalog, product details, cart, and checkout (authentication required for cart and order flow).

## TL;DR

- E-commerce frontend built with Next.js (App Router)
- Feature-based architecture for scalable and maintainable UI
- Auth-gated cart and checkout flow (real-world constraint)
- Global state via Redux Toolkit + server state via React Query
- Supports i18n (EN/UK) and theming (dark/light)

## Architecture

### High-level

UI → State → Data layer

- UI layer handles rendering and user interaction
- State layer manages global and local state
- Data layer handles API requests and data fetching

---

### Structure

The project follows a feature-based architecture:

- `app/` — Next.js App Router (pages and layouts)
- `features/` — business logic and feature modules (cart, filters, auth)
- `entities/` — domain models (product, user, review)
- `shared/` — reusable UI components, hooks, utilities
- `widgets/` — page-level UI blocks (header, footer, sections)
- `messages/` — localization dictionaries

---

### State & Data

- Global state managed with Redux Toolkit
- Server state handled via React Query
- Local state managed with React hooks

---

### Rendering Strategy

- SSR / SSG for pages where applicable
- CSR for interactive parts (cart, filters, auth)
- React Query used for data fetching and hydration

## Key Patterns

- Feature-based architecture for scalability and separation of concerns
- Clear separation between UI, state, and data layers
- Global state management with Redux Toolkit
- Server state handling with React Query
- Reusable component design via shared and entity layers
- Composition over inheritance in UI components

## User Flow

### Main Flow

1. User opens the application
2. Browses product catalog
3. Opens product details page
4. Adds items to cart
5. Proceeds to cart and updates items
6. Completes checkout form
7. Submits order

---

### Additional Flows

- User switches language (EN / UK)
- User toggles theme (dark / light)
- User browses static pages (FAQ, policies)

## Demo Flow

1. Open the application
2. (If needed) Sign up or log in
3. Browse product catalog
4. Open any product page
5. Add item to cart (requires authentication)
6. Go to cart page
7. Proceed to checkout
8. Fill in checkout form and complete order

## Design Decisions

- Next.js (App Router) chosen for scalable routing and hybrid rendering (SSR/CSR)
- Feature-based architecture used to improve maintainability and separation of concerns
- Redux Toolkit used for predictable global state management
- React Query used for server state and data fetching
- next-intl used for internationalization (EN / UK support)
- Tailwind CSS used for rapid UI development and theming
- Authentication required for cart and checkout to reflect real-world e-commerce constraints

## Production Considerations

- SSR / CSR balance optimized for performance and UX
- React Query used for caching, deduplication, and request management
- Feature-based architecture enables scaling across teams
- Separation of concerns allows independent evolution of UI, state, and data layers
- Auth-gated actions (cart, checkout) reflect real-world business constraints

## Trade-offs

- No real backend integration (mocked / simplified API layer)
- Payments and order processing are simulated
- Focus is on frontend architecture rather than full product completeness

## Tech Stack

Core:

- Next.js (App Router)
- React
- TypeScript

State & Data:

- Redux Toolkit
- React Query

UI & Styling:

- Tailwind CSS

Infrastructure:
- Vercel (deployment)

Other:
- next-intl (i18n)

## Screenshots

### Home Page

Main product catalog with filtering and navigation.

![Home Page](/public/screenshots/home.png)

---

### Product Details

Detailed product view with gallery, description, and actions.

![Product Details](/public/screenshots/product-details.png)

---

### Cart

Cart management with item updates and total calculation.

![Cart Page](/public/screenshots/cart.png)

## Getting Started

### Clone repository

```bash
git clone https://github.com/Artem-Makarchenko-Dev/shop-kit-web.git
cd shop-kit-web
```

### Install dependencies

```bash
yarn install
```

### Run development server

```bash
yarn dev
```

Application will be available at http://localhost:3000

## About

This project was built to demonstrate production-level frontend architecture and real-world application patterns.

Focus areas:

- scalable UI architecture
- state management and data flow
- feature-based project structure
- performance and rendering strategies
- production-ready frontend practices