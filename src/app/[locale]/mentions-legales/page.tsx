import { getDictionary, Locale, validateLocale } from "@/lib/i18n";

export default async function LegalNoticePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  const dict = getDictionary(locale);

  return (
    <div className="container space-y-6 pb-16 pt-12">
      <h1 className="text-3xl font-semibold text-eco">{dict.legal.title}</h1>
      <p className="text-foreground/70">{dict.legal.lead}</p>
      <div className="space-y-4 text-sm text-foreground/70">
        {dict.legal.noticeContent.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}
