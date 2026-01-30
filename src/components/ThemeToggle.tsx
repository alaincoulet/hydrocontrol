"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle({
  lightLabel,
  darkLabel,
  ariaLight,
  ariaDark,
}: {
  lightLabel: string;
  darkLabel: string;
  ariaLight: string;
  ariaDark: string;
}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground shadow-sm"
      aria-label={isDark ? ariaLight : ariaDark}
    >
      <span className="h-2 w-2 rounded-full bg-eco" aria-hidden />
      {isDark ? lightLabel : darkLabel}
    </button>
  );
}
