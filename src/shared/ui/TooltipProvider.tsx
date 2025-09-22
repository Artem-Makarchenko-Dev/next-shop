"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

interface TooltipProviderProps {
  children: (props: {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
  }) => ReactNode;
  delay?: number;
}

export function TooltipProvider({ children, delay = 300 }: TooltipProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = () => {
    timer.current = setTimeout(() => setIsOpen(true), delay);
  };

  const close = () => {
    if (timer.current) clearTimeout(timer.current);
    setIsOpen(false);
  };

  const toggle = () => setIsOpen((o) => !o);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return <>{children({ isOpen, open, close, toggle })}</>;
}
