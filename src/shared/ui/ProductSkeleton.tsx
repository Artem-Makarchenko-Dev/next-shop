"use client";

export function ProductSkeleton() {
  return (
    <div className="border rounded p-4 animate-pulse">
      <div className="w-full h-32 bg-gray-200 mb-4" />
      <div className="h-4 bg-gray-200 mb-2" />
      <div className="h-4 bg-gray-200 w-1/2" />
    </div>
  );
}
