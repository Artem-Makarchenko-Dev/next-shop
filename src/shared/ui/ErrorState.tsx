"use client";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({ message = "Something went wrong 💥", onRetry }: ErrorStateProps) {
  return (
    <div className="text-center mt-20 space-y-4">
      <p className="text-lg font-medium text-foreground-700">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-black transition"
        >
          Try again
        </button>
      )}
    </div>
  );
}
