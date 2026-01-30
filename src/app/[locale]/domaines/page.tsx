import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { getDictionary, Locale, validateLocale } from "@/lib/i18n";

export default async function DomainsPage({
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
              {dict.domains.title}
            </h1>
            <p className="text-foreground/70">{dict.domains.lead}</p>
          </div>
        </div>
      </section>

      <div className="pt-20">
        <AnimatedSection className="container space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
          {dict.domains.items.map((item, index) => {
          const images = [
            "/images/photos/serre-exterieur.jpg",
            "/images/photos/habitat-1.jpg",
            "/images/photos/usine-fabrication.jpg",
          ];
          const imageAlt = [
            "Serre agricole HydroControl",
            "Habitat HydroControl",
            "Installation industrielle HydroControl",
          ];
          return (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={images[index] || images[0]}
                  alt={imageAlt[index] || item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-eco">{item.title}</h2>
                <p className="mt-2 text-sm text-foreground/70">{item.text}</p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
          })}
          </div>
        </AnimatedSection>
      </div>

      {dict.domains.items[0] && (
        <div className="pt-20">
          <AnimatedSection className="container space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold md:text-3xl text-eco">
              {dict.domains.items[0].title}
            </h2>
            <p className="text-foreground/70">
              Découvrez nos installations en serres agricoles
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <Image
                src="/images/photos/serre-exterieur.jpg"
                alt="Serre agricole extérieure HydroControl"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <Image
                src="/images/photos/serre-interieure.jpg"
                alt="Serre agricole intérieure HydroControl"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          </AnimatedSection>
        </div>
      )}
    </div>
  );
}
