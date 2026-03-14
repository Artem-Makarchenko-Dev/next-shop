"use client";

import { useState } from "react";

export function HealthCheckButton() {
  const [statusText, setStatusText] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async () => {
    setIsLoading(true);
    setStatusText("");
    try {
      const res = await fetch("https://nest-shop-deploy-production.up.railway.app/health");
      if (!res.ok) {
        setStatusText("No, connection is lost");
      } else {
        const json = await res.json();
        if (json?.status === "ok") {
          setStatusText("Yeah! BE is connected");
        } else {
          setStatusText("No, connection is lost");
        }
      }
    } catch {
      setStatusText("No, connection is lost");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-center shadow-sm">
      <button
        type="button"
        onClick={sendRequest}
        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send request"}
      </button>
      {statusText ? <div className="text-base font-medium">{statusText}</div> : null}
    </div>
  );
}
