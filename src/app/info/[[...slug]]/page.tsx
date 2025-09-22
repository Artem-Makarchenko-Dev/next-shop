import { Suspense } from "react";
import { infoPages } from "@/shared/config/infoPages";
import { Loader } from "@/shared/ui/Loader";
import { notFound } from "next/navigation";

export default async function InfoPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const page = slug?.[0] ? infoPages[slug[0]] : null;

  if (!page) return notFound();

  const PageComponent = page.component;

  return (
    <Suspense fallback={<Loader />}>
      <PageComponent />
    </Suspense>
  );
}
