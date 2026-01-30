import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { getDictionary, Locale, validateLocale } from "@/lib/i18n";

export default async function AboutPage({
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
        <div className="container space-y-4 py-12">
          <h1 className="text-3xl font-semibold md:text-4xl">
            {dict.about.title}
          </h1>
          <p className="text-foreground/70">{dict.about.lead}</p>
        </div>
      </section>

      <AnimatedSection className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <Image
              src="/images/photos/espace-travail.jpg"
              alt="Espace de travail HydroControl"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{dict.about.historyTitle}</h2>
            <p className="mt-3 text-sm text-foreground/70">
              {dict.about.historyText}
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">{dict.about.valuesTitle}</h2>
          <div className="mt-4 space-y-3">
            {dict.about.values.map((value) => (
              <div key={value.title} className="rounded-2xl bg-muted p-4">
                <h3 className="text-sm font-semibold">{value.title}</h3>
                <p className="mt-1 text-sm text-foreground/70">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
