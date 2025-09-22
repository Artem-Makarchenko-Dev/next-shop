"use client";

import { createContext, useEffect, useState } from "react";
import { ThemeContextType, ThemeMode } from "./theme.types";

export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeMode.LIGHT,
  toggle: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.LIGHT);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as ThemeMode | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === ThemeMode.DARK);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () =>
    setTheme((prev) => (prev === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT));

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
};
