import Link from "next/link";
import { Dictionary, Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/routes";

type FooterProps = {
  locale: Locale;
  footer: Dictionary["footer"];
  nav: Dictionary["nav"];
};

export function Footer({ locale, footer, nav }: FooterProps) {
  return (
    <footer className="border-t border-border bg-card/80">
      <div className="container grid gap-8 py-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-3">
          <div className="text-lg font-semibold">
            <span className="text-accent">Hydro</span>
            <span className="text-eco">Control</span>
          </div>
          <p className="text-sm text-foreground/70">{footer.slogan}</p>
          <p className="text-sm text-foreground/70">{footer.address}</p>
          <p className="text-sm text-foreground/70">{footer.hours}</p>
          <a
            href="mailto:contact@hydrocontrol.fr"
            className="text-sm font-medium"
          >
            {footer.contact}
          </a>
        </div>
        <div className="space-y-2 text-sm">
          <div className="font-semibold">{nav.home}</div>
          <Link href={withLocale(locale, "/services")} className="block">
            {nav.services}
          </Link>
          <Link href={withLocale(locale, "/domaines")} className="block">
            {nav.domains}
          </Link>
          <Link href={withLocale(locale, "/a-propos")} className="block">
            {nav.about}
          </Link>
          <Link href={withLocale(locale, "/faq")} className="block">
            {nav.faq}
          </Link>
          <Link href={withLocale(locale, "/contact")} className="block">
            {nav.contact}
          </Link>
        </div>
        <div className="space-y-2 text-sm">
          <div className="font-semibold">{footer.legal}</div>
          <Link href={withLocale(locale, "/mentions-legales")} className="block">
            {footer.legal}
          </Link>
          <Link href={withLocale(locale, "/cgu")} className="block">
            {footer.cgu}
          </Link>
          <Link href={withLocale(locale, "/cookies")} className="block">
            {footer.cookies}
          </Link>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-foreground/60">
        © {new Date().getFullYear()}{" "}
        <span className="text-accent">Hydro</span>
        <span className="text-eco">Control</span>.{" "}
        {locale === "fr"
          ? "Tous droits réservés."
          : locale === "en"
            ? "All rights reserved."
            : "Todos los derechos reservados."}
      </div>
    </footer>
  );
}
