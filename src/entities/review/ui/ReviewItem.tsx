import { ReviewItemType } from "../model/types";

export default function ReviewItem({ review }: { review: ReviewItemType }) {
  return (
    <div className="bg-background rounded-2xl shadow-sm p-6 space-y-2">
      <p className="font-semibold text-foreground-900">{review.name}</p>
      <p className="text-foreground-700">{review.message}</p>
    </div>
  );
}
