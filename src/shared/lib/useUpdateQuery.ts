"use client";

import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function useUpdateQuery() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQuery = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.replace(`?${params.toString()}`);
    },
    [router, searchParams],
  );

  return updateQuery;
}
