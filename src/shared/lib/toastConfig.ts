import { ToastPosition } from "react-hot-toast";

export const toastBaseOptions = {
  style: {
    background: "var(--background)",
    color: "var(--foreground)",
    borderRadius: "0.75rem",
    padding: "12px 16px",
  },
  position: "top-right" as ToastPosition,
  duration: 2000,
};
