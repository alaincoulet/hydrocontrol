"use client";

import { useState } from "react";
import { Locale } from "@/lib/i18n";

type LeadMagnetFormProps = {
  locale: Locale;
  helper: string;
  label: string;
  cta: string;
  placeholder: string;
  successMessage: string;
  errorMessage: string;
};

export function LeadMagnetForm({
  locale,
  helper,
  label,
  cta,
  placeholder,
  successMessage,
  errorMessage,
}: LeadMagnetFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale, type: "download" }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      setStatus("success");
      event.currentTarget.reset();

      if (data?.downloadUrl) {
        window.location.href = data.downloadUrl as string;
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col flex-1 space-y-3">
      <p className="text-sm text-foreground/70">{helper}</p>
      <div className="flex flex-col gap-3 flex-1">
        <label className="sr-only" htmlFor="lead-email">
          {label}
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder={placeholder}
          className="w-full rounded-full border border-border bg-card px-4 py-2 text-sm"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="button-cta mt-auto w-full rounded-full border border-eco px-5 py-2 text-sm font-semibold !text-accent transition-all hover:bg-eco hover:!text-white disabled:opacity-60 disabled:animate-none"
        >
          {cta}
        </button>
      </div>
      {status === "success" && (
        <span className="text-sm text-eco" role="status" aria-live="polite">
          {successMessage}
        </span>
      )}
      {status === "error" && (
        <span className="text-sm text-red-500" role="alert">
          {errorMessage}
        </span>
      )}
    </form>
  );
}
