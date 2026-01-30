import { AnimatedSection } from "@/components/AnimatedSection";
import { getDictionary, Locale, validateLocale } from "@/lib/i18n";

export default async function FaqPage({
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
            {dict.faq.title}
          </h1>
          <p className="text-foreground/70">{dict.faq.lead}</p>
        </div>
      </section>

      <AnimatedSection className="container space-y-4">
        {dict.faq.items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-border bg-card p-5 shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
              {item.question}
              <span className="text-eco transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-foreground/70">{item.answer}</p>
          </details>
        ))}
      </AnimatedSection>
    </div>
  );
}
