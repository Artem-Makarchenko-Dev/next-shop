"use client";

import { X } from "lucide-react";

interface FilterTagProps {
  label: string;
  onClear: () => void;
}

export function FilterTag({ label, onClear }: FilterTagProps) {
  return (
    <div
      className="
        bg-background text-foreground 
        border border-gray-200 dark:border-gray-700 
        px-3 py-1.5 rounded-full text-sm flex items-center gap-1 
        shadow-sm justify-between transition
      "
    >
      <span className="mr-2">{label}</span>
      <X
        onClick={onClear}
        className="w-4 h-4 cursor-pointer text-foreground hover:opacity-80 transition"
      />
    </div>
  );
}
