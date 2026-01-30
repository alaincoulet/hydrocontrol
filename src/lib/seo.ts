import { Locale } from "./i18n";

export const organizationJsonLd = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HydroControl",
  url: `https://hydrocontrol.fr/${locale}`,
  logo: "https://hydrocontrol.fr/logo.png",
  foundingDate: "2005",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lyon",
    addressCountry: "FR",
  },
  areaServed: "FR",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "contact@hydrocontrol.fr",
  },
  sameAs: [],
});
