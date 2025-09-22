"use client";

import { Star, StarHalf } from "lucide-react";
import { useTranslations } from "next-intl";

interface RatingStarsProps {
  rate: number;
  count?: number;
  size?: number;
}

export function RatingStars({ rate, count, size = 20 }: RatingStarsProps) {
  const t = useTranslations("product.reviews");

  const fullStars = Math.floor(rate);
  const hasHalf = rate - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-2">
      <div className="flex text-yellow-500">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            className="fill-yellow-500 text-yellow-500"
            style={{ width: size, height: size }}
          />
        ))}
        {hasHalf && (
          <StarHalf
            className="fill-yellow-500 text-yellow-500"
            style={{ width: size, height: size }}
          />
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            className="text-foreground-300"
            strokeWidth={1.5}
            style={{ width: size, height: size }}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-sm text-foreground-500">{t("count", { count })}</span>
      )}
    </div>
  );
}
