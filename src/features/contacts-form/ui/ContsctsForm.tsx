"use client";

import { useState } from "react";
import { showToast } from "@/shared/lib/showToast";
import { useTranslations } from "next-intl";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContsctsForm() {
  const t = useTranslations();

  const [form, setForm] = useState(initialFormState);

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(t("common.toasts.success"), "success");
    setForm(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-background rounded-2xl shadow-sm p-10 space-y-5">
      <div>
        <label className="block text-sm font-medium text-foreground-700 mb-1">
          {t("contacts.fields.name")}
        </label>
        <input
          type="text"
          value={form.name}
          onChange={handleChange("name")}
          placeholder={t("contacts.placeholders.name")}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground-700 mb-1">
          {t("contacts.fields.email")}
        </label>
        <input
          type="email"
          value={form.email}
          onChange={handleChange("email")}
          placeholder={t("contacts.placeholders.email")}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground-700 mb-1">
          {t("contacts.fields.message")}
        </label>
        <textarea
          rows={5}
          value={form.message}
          onChange={handleChange("message")}
          placeholder={t("contacts.placeholders.message")}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
      </div>

      <button
        type="submit"
        className="px-6 py-3 bg-gray-900 text-white rounded-xl shadow hover:shadow-lg hover:bg-black transition cursor-pointer"
      >
        {t("contacts.button")}
      </button>
    </form>
  );
}
