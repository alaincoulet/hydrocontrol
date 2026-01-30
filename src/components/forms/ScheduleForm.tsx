"use client";

import { useState } from "react";
import { Locale } from "@/lib/i18n";

type ScheduleFormProps = {
  locale: Locale;
  emailLabel: string;
  dateLabel: string;
  timeLabel: string;
  ctaLabel: string;
  successMessage: string;
  errorMessage: string;
};

export function ScheduleForm({
  locale,
  emailLabel,
  dateLabel,
  timeLabel,
  ctaLabel,
  successMessage,
  errorMessage,
}: ScheduleFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, locale, type: "schedule" }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-3 text-sm text-foreground/70">
      <label htmlFor="schedule-email" className="space-y-2">
        {emailLabel}
        <input
          id="schedule-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full rounded-xl border border-border bg-card px-4 py-2 text-sm"
        />
      </label>
      <label htmlFor="schedule-date" className="space-y-2">
        {dateLabel}
        <input
          id="schedule-date"
          name="scheduleDate"
          type="date"
          className="w-full rounded-xl border border-border bg-card px-4 py-2 text-sm"
        />
      </label>
      <label htmlFor="schedule-time" className="space-y-2">
        {timeLabel}
        <input
          id="schedule-time"
          name="scheduleTime"
          type="time"
          className="w-full rounded-xl border border-border bg-card px-4 py-2 text-sm"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="button-cta rounded-full border border-border px-5 py-2 text-sm font-semibold !text-accent transition-all hover:bg-eco hover:!text-white disabled:opacity-60 disabled:animate-none"
      >
        {ctaLabel}
      </button>
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
