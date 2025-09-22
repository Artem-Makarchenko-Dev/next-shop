"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

export function LocaleSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("en");

  const LANGUAGES = [
    { code: "en", label: "English" },
    { code: "uk", label: "Українська" },
  ];

  useEffect(() => {
    const match = document.cookie.match(/(^| )locale=([^;]+)/);
    if (match) {
      setCurrent(match[2]);
    }
  }, []);

  const handleChange = (code: string) => {
    document.cookie = `locale=${code}; path=/; max-age=31536000`;
    setCurrent(code);
    setOpen(false);
    location.reload();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="
          flex items-center gap-2 px-4 py-2 rounded-xl 
          border dark:border-gray-700 border-gray-200 
          bg-background text-foreground 
          hover:shadow-sm transition cursor-pointer
        "
      >
        <Globe className="w-5 h-5 text-foreground" />
        <span className="font-medium uppercase">{current}</span>
      </button>

      {open && (
        <div
          className="
            absolute right-0 mt-2 w-40 rounded-xl shadow-sm overflow-hidden z-50
            bg-background border border-gray-200 dark:border-gray-700
          "
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className={`
                block w-full text-left px-4 py-2 text-sm cursor-pointer
                ${current === lang.code && "font-semibold"}
              `}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
