"use client";

import { useState } from "react";
import { ReviewItemType } from "@/entities/review/model/types";
import { useTranslations } from "next-intl";

interface ReviewFormProps {
  onSubmit: (review: ReviewItemType) => void;
}

export function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [formState, setFormState] = useState<ReviewItemType>({ name: "", message: "" });
  const t = useTranslations("product.reviews.form");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name.trim() || !formState.message.trim()) return;

    onSubmit(formState);
    setFormState({ name: "", message: "" });
  };

  return (
    <form className="bg-background rounded-2xl shadow-sm p-6 space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={t("name")}
        value={formState.name}
        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900"
      />
      <textarea
        rows={3}
        placeholder={t("message")}
        value={formState.message}
        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-gray-900 text-white rounded-xl shadow hover:shadow-lg hover:bg-black transition cursor-pointer"
      >
        {t("submit")}
      </button>
    </form>
  );
}
