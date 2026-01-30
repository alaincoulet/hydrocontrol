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
        <div className="container space-y-4 py-12">
          <h1 className="text-3xl font-semibold md:text-4xl">
            {dict.services.title}
          </h1>
          <p className="text-foreground/70">{dict.services.lead}</p>
        </div>
      </section>

      <AnimatedSection className="container grid gap-6 md:grid-cols-3">
        {dict.services.items.map((item, index) => {
          const images = [
            "/images/photos/presentation-machine-clean.png",
            "/images/photos/machine-fermée.jpg",
            "/images/photos/serre-interieure.jpg",
          ];
          return (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={images[index] || images[0]}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <div className="mt-4 space-y-3 text-sm text-foreground/70">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-eco">
                      {dict.services.problemLabel}
                    </p>
                    <p>{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-eco">
                      {dict.services.solutionLabel}
                    </p>
                    <p>{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </AnimatedSection>
    </div>
  );
}
