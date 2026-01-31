import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { LeadMagnetForm } from "@/components/forms/LeadMagnetForm";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
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
      <section className="bg-gradient-to-b from-card via-card to-background">
        <div className="container grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-border bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
              {dict.common.slogan}
            </span>
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl text-eco">
              {dict.home.heroTitle}
            </h1>
            <p className="max-w-xl text-lg text-foreground/70">
              {dict.home.heroLead}
            </p>
            <ul className="space-y-2 text-sm text-foreground/70">
              {dict.home.heroPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href={withLocale(locale, "/contact")}
                className="button-cta rounded-full bg-eco px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-eco/20 transition-all hover:-translate-y-0.5 hover:bg-eco/90"
              >
                {dict.common.ctaPrimary}
              </Link>
              <Link
                href={withLocale(locale, "/services")}
                className="button-secondary rounded-full border border-border px-6 py-2 text-sm font-semibold text-foreground/80 transition-all hover:border-eco hover:text-eco"
              >
                {dict.common.ctaSecondary}
              </Link>
            </div>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {dict.home.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card px-4 py-3 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-eco">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-8">
            {/* Image hero - Accessibilité : description détaillée du contenu visuel pour les utilisateurs de lecteurs d'écran */}
            <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <Image
                src="/images/photos/machine-fermée.jpg"
                alt="Machine de régulation énergétique HydroControl installée dans une serre agricole avec des plantes en arrière-plan, illustrant l'application de nos solutions techniques"
                fill
                className="object-cover object-[center_75%]"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="container space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold md:text-3xl text-eco">
            {dict.home.expertiseTitle}
          </h2>
          <p className="text-foreground/70">{dict.home.expertiseLead}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {dict.home.expertises.map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-base font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-eco">{item.title}</h3>
              </div>
              <p className="mt-2 text-sm text-foreground/70">{item.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <div className="pt-20">
        <AnimatedSection className="container space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold md:text-3xl text-eco">
              {dict.home.domainsTitle}
            </h2>
            <p className="text-foreground/70">{dict.home.domainsLead}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {dict.home.domains.map((domain, index) => {
              // Images des domaines d'intervention - Accessibilité : descriptions contextuelles
              const images = [
                "/images/photos/serre-exterieur.jpg",
                "/images/photos/habitat-1.jpg",
                "/images/photos/usine-fabrication.jpg",
              ];
              const imageAlts = [
                "Serre agricole extérieure équipée de systèmes HydroControl pour l'optimisation énergétique et hydrique",
                "Habitat résidentiel bénéficiant des solutions HydroControl pour la rénovation énergétique",
                "Site industriel avec installation HydroControl pour la gestion optimale de l'énergie et de l'eau",
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
                      alt={
                        imageAlts[index] ||
                        `${domain.title} - ${dict.home.domainsLead}`
                      }
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-eco">{domain.title}</h3>
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
      </div>

      <div className="pt-20">
        <AnimatedSection className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold md:text-3xl text-eco">
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
              <h3 className="font-semibold text-eco">{step.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{step.text}</p>
            </div>
          ))}
        </div>
        </AnimatedSection>
      </div>

      <AnimatedSection className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-eco">{dict.home.leadMagnetTitle}</h2>
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
        </div>
        <div className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold text-eco">{dict.home.trustTitle}</h2>
            <div className="grid gap-3">
              {dict.home.trustItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-white/70 px-4 py-3 text-sm text-foreground/70"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <Link
            href={withLocale(locale, "/contact")}
            className="button-cta mt-6 inline-flex w-full justify-center rounded-full bg-eco px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-eco/20 transition-all hover:-translate-y-0.5 hover:bg-eco/90"
          >
            {dict.nav.cta}
          </Link>
        </div>
      </AnimatedSection>

      <div className="pt-20">
        <AnimatedSection className="container space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold md:text-3xl text-eco">
              {dict.home.testimonialsTitle}
            </h2>
            <p className="text-foreground/70">{dict.home.testimonialsLead}</p>
          </div>
          <div>
            <TestimonialsCarousel testimonials={dict.home.testimonials} />
          </div>
        </AnimatedSection>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
