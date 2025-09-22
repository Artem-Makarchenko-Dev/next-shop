"use client";

import { useContext } from "react";
import { ThemeContext } from "@/shared/context/theme/ThemeContext";
import { ThemeMode } from "@/shared/context/theme/theme.types";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <>
      {theme === ThemeMode.LIGHT ? (
        <Moon
          onClick={toggle}
          className="w-5 h-5 mx-1.5 text-foreground cursor-pointer hover:opacity-80 transition"
        />
      ) : (
        <Sun
          onClick={toggle}
          className="w-5 h-5 mx-1.5 text-foreground cursor-pointer hover:opacity-80 transition"
        />
      )}
    </>
  );
}
