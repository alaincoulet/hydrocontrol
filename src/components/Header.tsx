"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const isActive = (href: string) => {
    const localizedHref = withLocale(locale, href);
    if (href === "/") {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname === localizedHref || pathname.startsWith(`${localizedHref}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link
          href={withLocale(locale, "/")}
          className="flex items-center gap-2"
          aria-label="HydroControl - Retour à l'accueil"
        >
          {/* Logo de l'entreprise - Accessibilité : alt descriptif pour les lecteurs d'écran */}
          <Image
            src="/images/logo/logo.png"
            alt="Logo HydroControl - Goutte d'eau bleue et verte symbolisant la gestion de l'eau et de l'énergie"
            width={80}
            height={80}
            className="h-20 w-auto"
            priority
          />
          <span className="text-lg font-semibold tracking-tight">
            <span className="text-accent">Hydro</span>
            <span className="text-eco">Control</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.key}
                href={withLocale(locale, item.href)}
                className={clsx(
                  "relative pb-2 text-sm font-medium text-foreground/80 transition hover:text-foreground",
                  active && "after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-1 after:rounded-full after:bg-eco"
                )}
              >
                {nav[item.key as keyof Dictionary["nav"]]}
              </Link>
            );
          })}
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
            className="button-cta rounded-full border border-eco px-5 py-2 text-sm font-semibold !text-accent transition-all hover:bg-eco hover:!text-white"
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
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.key}
                  href={withLocale(locale, item.href)}
                  className={clsx(
                    "rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted",
                    active && "border-l-4 border-eco bg-muted/50"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {nav[item.key as keyof Dictionary["nav"]]}
                </Link>
              );
            })}
          </nav>
          <Link
            href={withLocale(locale, "/contact")}
            className="button-cta rounded-full border border-border px-5 py-2 text-center text-sm font-semibold !text-accent transition-all hover:bg-eco hover:!text-white"
            onClick={() => setOpen(false)}
          >
            {nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
