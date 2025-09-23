"use client";

import PersistProviders from "@/app/providers/PersistProviders";
import { ThemeProvider } from "@/shared/context/theme/ThemeContext";
import { queryClient } from "@/shared/lib/queryClient";
import { toastBaseOptions } from "@/shared/lib/toastConfig";
import { store } from "@/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <PersistProviders>
            {children}
            <Toaster {...toastBaseOptions} />
          </PersistProviders>
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}
