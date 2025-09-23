"use client";

import { AlertCircle, CheckCircle, Info, X } from "lucide-react";
import { toast } from "react-hot-toast";

export function showToast(message: string, type: "success" | "error" | "default" = "default") {
  return toast.custom((t) => {
    const icon =
      type === "success" ? (
        <CheckCircle className="w-5 h-5 text-green-500" />
      ) : type === "error" ? (
        <AlertCircle className="w-5 h-5 text-red-500" />
      ) : (
        <Info className="w-5 h-5 text-blue-500" />
      );

    return (
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-md
          bg-background text-foreground transition-all duration-300
          ${t.visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
      >
        {icon}
        <span className="text-sm font-medium">{message}</span>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="ml-auto text-foreground hover:opacity-70"
        >
          <X className="w-4 h-4 cursor-pointer" />
        </button>
      </div>
    );
  });
}
