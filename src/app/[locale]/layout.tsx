import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { getDictionary, Locale, validateLocale, locales } from "@/lib/i18n";

export const generateStaticParams = async () =>
  locales.map((locale) => ({ locale }));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL("https://hydrocontrol.fr"),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
        es: "/es",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${locale}`,
      siteName: "HydroControl",
      locale: locale,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "geo.region": "FR-69",
      "geo.placename": "Lyon",
      "geo.position": "45.764043;4.835659",
      ICBM: "45.764043,4.835659",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  const dict = getDictionary(locale);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        {dict.common.skipToContent}
      </a>
      <Header locale={locale} nav={dict.nav} common={dict.common} />
      <main id="main-content" className="flex min-h-screen flex-col">
        {children}
      </main>
      <Footer locale={locale} footer={dict.footer} nav={dict.nav} />
      <CookieBanner
        message={dict.cookies.message}
        acceptLabel={dict.cookies.accept}
        declineLabel={dict.cookies.decline}
      />
    </div>
  );
}
