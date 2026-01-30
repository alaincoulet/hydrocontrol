import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { LeadMagnetForm } from "@/components/forms/LeadMagnetForm";
import { getDictionary, Locale, validateLocale } from "@/lib/i18n";
import { withLocale } from "@/lib/routes";
import { organizationJsonLd } from "@/lib/seo";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  const dict = getDictionary(locale);
  const jsonLd = organizationJsonLd(locale);

  return (
    <div className="space-y-16 pb-16">
      <section className="bg-gradient-to-b from-card to-background">
        <div className="container grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-eco">
              {dict.common.companyName}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
              {dict.home.heroTitle}
            </h1>
            <p className="text-lg text-foreground/70">{dict.home.heroLead}</p>
            <ul className="space-y-2 text-sm text-foreground/70">
              {dict.home.heroPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href={withLocale(locale, "/contact")}
                className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent-strong"
              >
                {dict.common.ctaPrimary}
              </Link>
              <Link
                href={withLocale(locale, "/services")}
                className="rounded-full border border-border px-5 py-2 text-sm font-semibold"
              >
                {dict.common.ctaSecondary}
              </Link>
            </div>
          </div>
          <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <Image
              src="/images/photos/presentation-machine-clean.png"
              alt="Installation HydroControl"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <AnimatedSection className="container space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold md:text-3xl">
            {dict.home.expertiseTitle}
          </h2>
          <p className="text-foreground/70">{dict.home.expertiseLead}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {dict.home.expertises.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{item.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold md:text-3xl">
            {dict.home.domainsTitle}
          </h2>
          <p className="text-foreground/70">{dict.home.domainsLead}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {dict.home.domains.map((domain, index) => {
            const images = [
              "/images/photos/serre-exterieur.jpg",
              "/images/photos/usine-fabrication.jpg",
              "/images/photos/espace-travail.jpg",
            ];
            return (
              <Link
                key={domain.title}
                href={withLocale(locale, domain.href)}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={images[index] || images[0]}
                    alt={domain.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{domain.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{domain.text}</p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-eco">
                    {dict.nav.domains}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold md:text-3xl">
            {dict.home.approachTitle}
          </h2>
          <p className="text-foreground/70">{dict.home.approachLead}</p>
        </div>
        <div className="grid gap-4">
          {dict.home.approachSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <h3 className="font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{step.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-border bg-card p-6">
          <h2 className="text-2xl font-semibold">{dict.home.leadMagnetTitle}</h2>
          <p className="text-sm text-foreground/70">
            {dict.home.leadMagnetText}
          </p>
          <LeadMagnetForm
            locale={locale}
            helper={dict.common.downloadHelper}
            label={dict.common.downloadLabel}
            cta={dict.common.downloadCta}
            placeholder={dict.common.emailPlaceholder}
            successMessage={dict.common.success}
            errorMessage={dict.common.error}
          />
        </div>
        <div className="space-y-4 rounded-3xl border border-border bg-muted p-6">
          <h2 className="text-2xl font-semibold">{dict.home.trustTitle}</h2>
          <ul className="space-y-2 text-sm text-foreground/70">
            {dict.home.trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-eco" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href={withLocale(locale, "/contact")}
            className="inline-flex rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white"
          >
            {dict.nav.cta}
          </Link>
        </div>
      </AnimatedSection>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
