"use client";

import { ComponentType } from "react";
import { Loader } from "@/shared/ui/Loader";

export function withLoading<P extends object>(Wrapped: ComponentType<P>) {
  type Props = P & { isLoading: boolean; isError?: boolean };

  const ComponentWithLoading = (props: Props) => {
    const { isLoading, isError, ...rest } = props;

    if (isLoading) {
      return (
        <div className="flex justify-center mt-10">
          <Loader />
        </div>
      );
    }

    if (isError) {
      return <p className="text-center mt-10 text-red-600">Failed to load data</p>;
    }

    return <Wrapped {...(rest as P)} />;
  };

  ComponentWithLoading.displayName = `WithLoading(${
    Wrapped.displayName || Wrapped.name || "Component"
  })`;

  return ComponentWithLoading;
}
