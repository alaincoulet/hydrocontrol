import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { getDictionary, Locale, validateLocale } from "@/lib/i18n";

export default async function ServicesPage({
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
              {dict.services.title}
            </h1>
            <p className="text-foreground/70">{dict.services.lead}</p>
          </div>
        </div>
      </section>

      <div className="pt-4">
        <AnimatedSection className="container space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
          {dict.services.items.map((item, index) => {
          // Images des services - Accessibilité : descriptions détaillées incluant le contexte du service
          const images = [
            "/images/photos/habitat-2.jpg",
            "/images/photos/machine-fermée.jpg",
            "/images/photos/serre-interieure.jpg",
          ];
          const imageAlts = [
            `${item.title} - Schéma technique illustrant les solutions HydroControl pour la rénovation énergétique dans l'habitat`,
            `${item.title} - Équipement HydroControl de déshumidification et régulation climatique`,
            `${item.title} - Installation HydroControl dans une serre agricole pour l'optimisation énergétique et hydrique`,
          ];
          return (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={images[index] || images[0]}
                  alt={imageAlts[index] || `${item.title} - ${item.problem}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-eco">{item.title}</h2>
                <div className="mt-4 space-y-3 text-sm text-foreground/70">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                      {dict.services.problemLabel}
                    </p>
                    <p>{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                      {dict.services.solutionLabel}
                    </p>
                    <p>{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          );
          })}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
