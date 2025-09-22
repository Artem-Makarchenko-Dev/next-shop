"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="text-center mt-20 space-y-4">
            <p className="text-lg font-semibold text-foreground-700">Something went wrong 💥</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-black transition"
            >
              Try again
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
