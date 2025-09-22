"use client";

import { ReviewItemType } from "@/entities/review/model/types";
import ReviewItem from "./ReviewItem";

export function ReviewList({ reviews }: { reviews: ReviewItemType[] }) {
  return (
    <div className="space-y-4 mb-8">
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
    </div>
  );
}
