"use client";

import { useEffect, useState } from "react";

type CookieBannerProps = {
  message: string;
  acceptLabel: string;
  declineLabel: string;
};

export function CookieBanner({
  message,
  acceptLabel,
  declineLabel,
}: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("hc-cookie-consent");
    if (!stored) {
      setVisible(true);
    }
  }, []);

  if (!visible) {
    return null;
  }

  const accept = () => {
    window.localStorage.setItem("hc-cookie-consent", "accepted");
    setVisible(false);
  };

  const refuse = () => {
    window.localStorage.setItem("hc-cookie-consent", "refused");
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 rounded-2xl border border-border bg-card p-4 shadow-lg md:inset-x-auto md:right-8 md:max-w-md">
      <p className="text-sm text-foreground/80">{message}</p>
      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={accept}
          className="button-cta rounded-full border border-border px-5 py-2 text-sm font-semibold !text-accent transition-all hover:bg-eco hover:!text-white"
        >
          {acceptLabel}
        </button>
        <button
          type="button"
          onClick={refuse}
          className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground/70 transition-all hover:bg-muted"
        >
          {declineLabel}
        </button>
      </div>
    </div>
  );
}
