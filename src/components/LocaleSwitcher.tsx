"use client";

import { useRouter, usePathname } from "next/navigation";
import { Locale, locales } from "@/lib/i18n";

const labels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  es: "ES",
};

export function LocaleSwitcher({
  currentLocale,
  label,
}: {
  currentLocale: Locale;
  label: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const onChange = (value: string) => {
    const segments = pathname.split("/");
    segments[1] = value;
    const nextPath = segments.join("/") || `/${value}`;
    router.push(nextPath);
  };

  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="sr-only">{label}</span>
      <select
        aria-label={label}
        value={currentLocale}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground shadow-sm"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {labels[locale]}
          </option>
        ))}
      </select>
    </label>
  );
}
