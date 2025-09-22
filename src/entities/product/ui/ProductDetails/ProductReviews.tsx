"use client";

import { useState } from "react";
import { ReviewItemType } from "@/entities/review/model/types";
import { ReviewForm } from "@/entities/review/ui/ReviewForm";
import { ReviewList } from "@/entities/review/ui/ReviewList";
import { useTranslations } from "next-intl";

const fallbackReviews: ReviewItemType[] = [
  { name: "Anna", message: "Great product, very happy!" },
  { name: "Max", message: "Quality is awesome for this price." },
];

export function ProductReviews({ reviews }: { reviews?: ReviewItemType[] }) {
  const t = useTranslations("product.reviews");

  const [reviewList, setReviewList] = useState<ReviewItemType[]>(
    reviews && reviews.length > 0 ? reviews : fallbackReviews,
  );

  const handleAddReview = (newReview: ReviewItemType) => {
    setReviewList((prev) => [newReview, ...prev]);
  };

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground-900 mb-8">{t("title")}</h2>
      <ReviewList reviews={reviewList} />
      <ReviewForm onSubmit={handleAddReview} />
    </section>
  );
}
