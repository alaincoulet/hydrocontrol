"use client";

import { useState } from "react";
import { Dictionary, Locale } from "@/lib/i18n";

type ContactFormProps = {
  locale: Locale;
  labels: Dictionary["contact"]["formFields"];
  domainOptions: Dictionary["contact"]["domainOptions"];
  helper: string;
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
};

export function ContactForm({
  locale,
  labels,
  domainOptions,
  helper,
  submitLabel,
  successMessage,
  errorMessage,
}: ContactFormProps) {
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
        body: JSON.stringify({
          ...payload,
          locale,
          type: "contact",
        }),
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
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label htmlFor="contact-name" className="space-y-2 text-sm font-medium">
          {labels.name}
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="w-full rounded-xl border border-border bg-card px-4 py-2 text-sm"
            placeholder={labels.name}
          />
        </label>
        <label htmlFor="contact-email" className="space-y-2 text-sm font-medium">
          {labels.email}
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded-xl border border-border bg-card px-4 py-2 text-sm"
            placeholder={labels.email}
          />
        </label>
        <label htmlFor="contact-phone" className="space-y-2 text-sm font-medium">
          {labels.phone}
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-xl border border-border bg-card px-4 py-2 text-sm"
            placeholder={labels.phone}
          />
        </label>
        <label
          htmlFor="contact-organization"
          className="space-y-2 text-sm font-medium"
        >
          {labels.organization}
          <input
            id="contact-organization"
            name="organization"
            type="text"
            autoComplete="organization"
            className="w-full rounded-xl border border-border bg-card px-4 py-2 text-sm"
            placeholder={labels.organization}
          />
        </label>
      </div>
      <label htmlFor="contact-domain" className="space-y-2 text-sm font-medium">
        {labels.domain}
        <select
          id="contact-domain"
          name="domain"
          className="w-full rounded-xl border border-border bg-card px-4 py-2 text-sm"
        >
          {domainOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="contact-message" className="space-y-2 text-sm font-medium">
        {labels.message}
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          autoComplete="off"
          className="w-full rounded-xl border border-border bg-card px-4 py-2 text-sm"
          placeholder={labels.message}
        />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <label
          htmlFor="contact-schedule-date"
          className="space-y-2 text-sm font-medium"
        >
          {labels.scheduleDate}
          <input
            id="contact-schedule-date"
            name="scheduleDate"
            type="date"
            className="w-full rounded-xl border border-border bg-card px-4 py-2 text-sm"
          />
        </label>
        <label
          htmlFor="contact-schedule-time"
          className="space-y-2 text-sm font-medium"
        >
          {labels.scheduleTime}
          <input
            id="contact-schedule-time"
            name="scheduleTime"
            type="time"
            className="w-full rounded-xl border border-border bg-card px-4 py-2 text-sm"
          />
        </label>
      </div>
      <p className="text-sm text-foreground/70">{helper}</p>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent-strong disabled:opacity-60"
        >
          {submitLabel}
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
      </div>
    </form>
  );
}
