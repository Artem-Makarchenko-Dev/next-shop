import { fetchProductServer } from "@/entities/product/api/fetchProduct.server";
import { Metadata } from "next";

export async function generateProductMetadata(id: string): Promise<Metadata> {
  const product = await fetchProductServer(+id, { next: { revalidate: 3600 } });

  if (!product) {
    return {
      title: "Product not found",
      description: "Product not found",
      robots: { index: false },
    };
  }

  const title = `${product.name} – MyShop`;
  const description =
    product.description.length > 160
      ? product.description.slice(0, 157) + "…"
      : product.description;

  return {
    title,
    description,
    alternates: { canonical: `/products/${id}` },
    openGraph: {
      title,
      description,
      url: `/products/${id}`,
      images: [{ url: product.image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image],
    },
  };
}
