"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

export interface TextInputHandle {
  focus: () => void;
}

export const TextInput = forwardRef<TextInputHandle, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    const innerRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus() {
        innerRef.current?.focus();
      },
    }));

    return (
      <input
        ref={innerRef}
        {...props}
        className={`border rounded w-full px-4 py-2 ${props.className ?? ""}`}
      />
    );
  },
);

TextInput.displayName = "TextInput";
