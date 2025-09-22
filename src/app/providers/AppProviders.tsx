"use client";

import CartPersistProvider from "@/app/providers/CartPersistProvider";
import { ThemeProvider } from "@/shared/context/theme/ThemeContext";
import { queryClient } from "@/shared/lib/queryClient";
import { store } from "@/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <CartPersistProvider>{children}</CartPersistProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}
