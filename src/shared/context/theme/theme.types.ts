export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

export type Theme = ThemeMode.LIGHT | ThemeMode.DARK;

export interface ThemeContextType {
  theme: Theme;
  toggle: () => void;
}
