"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { Dictionary, Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/routes";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleSwitcher } from "./LocaleSwitcher";

type HeaderProps = {
  locale: Locale;
  nav: Dictionary["nav"];
  common: Dictionary["common"];
};

const navItems = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "domains", href: "/domaines" },
  { key: "about", href: "/a-propos" },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contact" },
];

export function Header({ locale, nav, common }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border bg-card/80 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link
          href={withLocale(locale, "/")}
          className="flex items-center gap-2"
        >
          <Image
            src="/images/logo/logo.png"
            alt="HydroControl"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="text-lg font-semibold tracking-tight">
            HydroControl
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={withLocale(locale, item.href)}
              className="text-sm font-medium text-foreground/80 transition hover:text-foreground"
            >
              {nav[item.key as keyof Dictionary["nav"]]}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LocaleSwitcher currentLocale={locale} label={common.languageLabel} />
          <ThemeToggle
            lightLabel={common.themeLight}
            darkLabel={common.themeDark}
            ariaLight={common.themeToggleLight}
            ariaDark={common.themeToggleDark}
          />
          <Link
            href={withLocale(locale, "/contact")}
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-strong"
          >
            {nav.cta}
          </Link>
        </div>
        <button
          type="button"
          className="lg:hidden rounded-full border border-border px-3 py-2 text-sm font-medium"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {nav.menu}
        </button>
      </div>
      <div
        id="mobile-menu"
        className={clsx(
          "lg:hidden border-t border-border bg-card",
          open ? "block" : "hidden"
        )}
      >
        <div className="container flex flex-col gap-4 py-4">
          <div className="flex items-center gap-3">
            <LocaleSwitcher currentLocale={locale} label={common.languageLabel} />
            <ThemeToggle
              lightLabel={common.themeLight}
              darkLabel={common.themeDark}
              ariaLight={common.themeToggleLight}
              ariaDark={common.themeToggleDark}
            />
          </div>
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={withLocale(locale, item.href)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {nav[item.key as keyof Dictionary["nav"]]}
              </Link>
            ))}
          </nav>
          <Link
            href={withLocale(locale, "/contact")}
            className="rounded-full bg-accent px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-accent-strong"
            onClick={() => setOpen(false)}
          >
            {nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
