import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { LeadMagnetForm } from "@/components/forms/LeadMagnetForm";
import { ScheduleForm } from "@/components/forms/ScheduleForm";
import { getDictionary, Locale, validateLocale } from "@/lib/i18n";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  const dict = getDictionary(locale);

  return (
    <div className="space-y-12 pb-16">
      <section className="bg-gradient-to-b from-card to-background">
        <div className="container py-16">
          <div className="space-y-3">
            <h1 className="pt-8 text-3xl font-semibold md:text-4xl text-eco">
              {dict.contact.title}
            </h1>
            <p className="text-foreground/70">{dict.contact.lead}</p>
          </div>
        </div>
      </section>

      <div className="pt-10">
        <AnimatedSection className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-eco">{dict.contact.formTitle}</h2>
          <div className="mt-6">
            <ContactForm
              locale={locale}
              labels={dict.contact.formFields}
              domainOptions={dict.contact.domainOptions}
              helper={dict.contact.formHelper}
              submitLabel={dict.common.submit}
              successMessage={dict.common.success}
              errorMessage={dict.common.error}
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-eco">{dict.contact.calendarTitle}</h3>
            <p className="mt-2 text-sm text-foreground/70">
              {dict.contact.calendarText}
            </p>
            <div className="mt-4">
              <ScheduleForm
                locale={locale}
                emailLabel={dict.contact.formFields.email}
                dateLabel={dict.contact.formFields.scheduleDate}
                timeLabel={dict.contact.formFields.scheduleTime}
                ctaLabel={dict.common.ctaPrimary}
                successMessage={dict.common.success}
                errorMessage={dict.common.error}
              />
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-eco">{dict.common.downloadCta}</h3>
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
        </AnimatedSection>
      </div>

      <div className="pt-20">
        <AnimatedSection className="container">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-eco">{dict.contact.mapTitle}</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="HydroControl Lyon"
              src="https://www.google.com/maps?q=Lyon%20France&output=embed"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
