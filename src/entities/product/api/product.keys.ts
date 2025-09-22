export const productsKeys = {
  all: ["products"] as const,
  byCategory: ["productsByCategory"] as const,
  detail: (id: number) => ["product", id] as const,
};
