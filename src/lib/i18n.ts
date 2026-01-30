export const locales = ["fr", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export function validateLocale(locale: string): Locale {
  return (locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;
}

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    services: string;
    domains: string;
    about: string;
    faq: string;
    contact: string;
    cta: string;
    menu: string;
  };
  footer: {
    slogan: string;
    address: string;
    hours: string;
    legal: string;
    cgu: string;
    cookies: string;
    contact: string;
  };
  common: {
    companyName: string;
    slogan: string;
    ctaPrimary: string;
    ctaSecondary: string;
    downloadCta: string;
    downloadLabel: string;
    downloadHelper: string;
    emailPlaceholder: string;
    submit: string;
    success: string;
    error: string;
    themeLight: string;
    themeDark: string;
    themeToggleLight: string;
    themeToggleDark: string;
    languageLabel: string;
    skipToContent: string;
  };
  home: {
    heroTitle: string;
    heroLead: string;
    heroPoints: string[];
    stats: { label: string; value: string }[];
    expertiseTitle: string;
    expertiseLead: string;
    expertises: { title: string; text: string }[];
    domainsTitle: string;
    domainsLead: string;
    domains: { title: string; text: string; href: string }[];
    approachTitle: string;
    approachLead: string;
    approachSteps: { title: string; text: string }[];
    leadMagnetTitle: string;
    leadMagnetText: string;
    trustTitle: string;
    trustItems: string[];
  };
  services: {
    title: string;
    lead: string;
    problemLabel: string;
    solutionLabel: string;
    items: { title: string; problem: string; solution: string }[];
  };
  domains: {
    title: string;
    lead: string;
    items: { title: string; text: string; highlights: string[] }[];
  };
  about: {
    title: string;
    lead: string;
    historyTitle: string;
    historyText: string;
    valuesTitle: string;
    values: { title: string; text: string }[];
  };
  faq: {
    title: string;
    lead: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    title: string;
    lead: string;
    formTitle: string;
    formFields: {
      name: string;
      email: string;
      phone: string;
      organization: string;
      domain: string;
      message: string;
      scheduleDate: string;
      scheduleTime: string;
    };
    domainOptions: { value: string; label: string }[];
    formHelper: string;
    mapTitle: string;
    calendarTitle: string;
    calendarText: string;
  };
  cookies: {
    message: string;
    accept: string;
    decline: string;
  };
  legal: {
    title: string;
    lead: string;
    cguTitle: string;
    cookiesTitle: string;
    noticeContent: string[];
    cguContent: string[];
    cookiesContent: string[];
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  fr: {
    meta: {
      title: "HydroControl | Maîtriser l’énergie et l’eau, durablement",
      description:
        "HydroControl accompagne professionnels et particuliers dans la rénovation énergétique et l’optimisation des ressources en eau. Expertise technique, approche terrain, solutions durables.",
    },
    nav: {
      home: "Accueil",
      services: "Services",
      domains: "Domaines",
      about: "À propos",
      faq: "FAQ",
      contact: "Contact",
      cta: "Demander un devis",
      menu: "Menu",
    },
    footer: {
      slogan: "Maîtriser l’énergie et l’eau, durablement.",
      address: "Lyon, France · Intervention nationale",
      hours: "Lun–Ven · 9h–18h",
      legal: "Mentions légales",
      cgu: "CGU",
      cookies: "Cookies",
      contact: "contact@hydrocontrol.fr",
    },
    common: {
      companyName: "HydroControl",
      slogan: "Maîtriser l’énergie et l’eau, durablement.",
      ctaPrimary: "Planifier un échange",
      ctaSecondary: "Découvrir nos services",
      downloadCta: "Télécharger la présentation",
      downloadLabel: "Recevoir le document",
      downloadHelper:
        "Laissez votre email pour recevoir la présentation complète.",
      emailPlaceholder: "Votre email professionnel",
      submit: "Envoyer",
      success: "Merci, nous revenons vers vous rapidement.",
      error: "Une erreur est survenue. Réessayez dans un instant.",
      themeLight: "Clair",
      themeDark: "Sombre",
      themeToggleLight: "Activer le mode clair",
      themeToggleDark: "Activer le mode sombre",
      languageLabel: "Choisir la langue",
      skipToContent: "Aller au contenu",
    },
    home: {
      heroTitle:
        "Solutions techniques pour la rénovation énergétique et la gestion de l’eau",
      heroLead:
        "Depuis 2005, HydroControl accompagne les acteurs agricoles, industriels et les particuliers avec une approche terrain, fiable et durable.",
      heroPoints: [
        "Audit et diagnostic des installations",
        "Réduction mesurable des consommations",
        "Accompagnement long terme et maintenance",
      ],
      stats: [
        { label: "Année de création", value: "2005" },
        { label: "Domaines couverts", value: "3" },
        { label: "Approche", value: "Technique & durable" },
      ],
      expertiseTitle: "Nos expertises clés",
      expertiseLead:
        "Des solutions claires, pédagogiques et adaptées à vos contraintes opérationnelles.",
      expertises: [
        {
          title: "Rénovation énergétique",
          text: "Analyse des consommations, optimisation des équipements et amélioration globale des performances.",
        },
        {
          title: "Gestion hydrique",
          text: "Optimisation des réseaux, réduction des pertes et pilotage des usages.",
        },
        {
          title: "Déshumidification",
          text: "Contrôle de l’hygrométrie pour la qualité des cultures et la maîtrise énergétique.",
        },
      ],
      domainsTitle: "Domaines d’intervention",
      domainsLead:
        "Nous intervenons sur des environnements variés avec une exigence de fiabilité et de résultats.",
      domains: [
        {
          title: "Agriculture",
          text: "Serres, irrigation, optimisation énergétique des exploitations.",
          href: "/domaines",
        },
        {
          title: "Habitat",
          text: "Solutions pour particuliers, rénovation et performance globale.",
          href: "/domaines",
        },
        {
          title: "Industrie",
          text: "Sites complexes, infrastructures techniques et fiabilité.",
          href: "/domaines",
        },
      ],
      approachTitle: "Une méthode structurée",
      approachLead:
        "Chaque projet suit un cadre clair pour garantir des résultats mesurables.",
      approachSteps: [
        {
          title: "Diagnostic",
          text: "Analyse terrain, relevés et compréhension des contraintes.",
        },
        {
          title: "Plan d’action",
          text: "Propositions techniques adaptées et projection des gains.",
        },
        {
          title: "Mise en œuvre",
          text: "Pilotage du déploiement, suivi des performances et ajustements.",
        },
      ],
      leadMagnetTitle: "Recevez notre document de présentation",
      leadMagnetText:
        "Un aperçu complet de notre approche, de nos méthodes et de nos domaines d’intervention.",
      trustTitle: "Pourquoi nous faire confiance",
      trustItems: [
        "Entreprise française expérimentée",
        "Approche technique et pédagogique",
        "Solutions sur-mesure, sans promesses excessives",
        "Engagement pour la transition énergétique",
      ],
    },
    services: {
      title: "Services",
      lead:
        "Des solutions techniques expliquées simplement, avec une logique problème → solution.",
      problemLabel: "Problème",
      solutionLabel: "Solution",
      items: [
        {
          title: "Rénovation énergétique",
          problem:
            "Consommations élevées, équipements vieillissants, manque de visibilité sur les gains.",
          solution:
            "Audit complet, optimisation des installations et plan d’amélioration mesurable.",
        },
        {
          title: "Déshumidification",
          problem:
            "Mauvaise régulation de l’humidité, impact sur les cultures ou la production.",
          solution:
            "Systèmes adaptés, contrôle hygrométrique et baisse des dépenses énergétiques.",
        },
        {
          title: "Gestion hydrique",
          problem:
            "Pertes d’eau, surconsommation et réseaux difficiles à piloter.",
          solution:
            "Optimisation des réseaux, réduction des pertes et pilotage intelligent.",
        },
      ],
    },
    domains: {
      title: "Domaines",
      lead:
        "Nos interventions couvrent les environnements techniques où l’énergie et l’eau sont critiques.",
      items: [
        {
          title: "Agriculture",
          text: "Serres, irrigation, optimisation énergétique des exploitations agricoles.",
          highlights: [
            "Réduction des coûts énergétiques",
            "Optimisation des cycles d’irrigation",
            "Maîtrise du climat intérieur",
          ],
        },
        {
          title: "Habitat",
          text: "Rénovation énergétique des logements et systèmes plus économes.",
          highlights: [
            "Audit énergétique clair",
            "Solutions adaptées au budget",
            "Amélioration du confort",
          ],
        },
        {
          title: "Industrie",
          text: "Sites complexes, infrastructures techniques et performance durable.",
          highlights: [
            "Fiabilité des installations",
            "Suivi long terme",
            "Solutions robustes",
          ],
        },
      ],
    },
    about: {
      title: "À propos",
      lead:
        "HydroControl est une entreprise française créée en 2005, spécialisée dans la rénovation énergétique et la gestion de l’eau.",
      historyTitle: "Une expertise terrain depuis 2005",
      historyText:
        "Basée à Lyon, HydroControl accompagne les professionnels et les particuliers avec des solutions techniques, durables et adaptées aux contraintes réelles.",
      valuesTitle: "Valeurs et positionnement",
      values: [
        {
          title: "Fiabilité",
          text: "Une méthode éprouvée et des résultats mesurables.",
        },
        {
          title: "Pédagogie",
          text: "Des explications claires pour des clients non techniques.",
        },
        {
          title: "Durabilité",
          text: "Des solutions responsables, alignées avec la transition énergétique.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      lead:
        "Les réponses aux questions les plus fréquentes sur nos interventions.",
      items: [
        {
          question: "Intervenez-vous partout en France ?",
          answer:
            "Oui, nous accompagnons des projets sur l’ensemble du territoire.",
        },
        {
          question: "Travaillez-vous uniquement avec des professionnels ?",
          answer:
            "Non, nous accompagnons aussi les particuliers pour la rénovation énergétique.",
        },
        {
          question: "Quels sont les délais moyens ?",
          answer:
            "Les délais dépendent du projet. Nous définissons un planning clair dès l’audit.",
        },
        {
          question: "Proposez-vous un suivi après intervention ?",
          answer:
            "Oui, nous assurons un suivi des performances et des ajustements.",
        },
      ],
    },
    contact: {
      title: "Contact",
      lead:
        "Expliquez votre besoin et nous revenons vers vous avec une proposition adaptée.",
      formTitle: "Demande de devis ou d’échange",
      formFields: {
        name: "Nom complet",
        email: "Email",
        phone: "Téléphone",
        organization: "Entreprise / Organisation",
        domain: "Domaine",
        message: "Votre besoin",
        scheduleDate: "Date souhaitée",
        scheduleTime: "Heure souhaitée",
      },
      domainOptions: [
        { value: "agriculture", label: "Agriculture" },
        { value: "habitat", label: "Habitat" },
        { value: "industrie", label: "Industrie" },
        { value: "autre", label: "Autre" },
      ],
      formHelper:
        "Nous vous recontactons sous 48h ouvrées pour qualifier votre projet.",
      mapTitle: "Notre base",
      calendarTitle: "Prendre rendez-vous",
      calendarText:
        "Choisissez un créneau, nous vous confirmons l’échange par email.",
    },
    cookies: {
      message:
        "Nous utilisons des cookies pour améliorer l’expérience et mesurer la performance.",
      accept: "Accepter",
      decline: "Refuser",
    },
    legal: {
      title: "Informations légales",
      lead:
        "HydroControl s’engage à respecter vos données et la réglementation RGPD.",
      cguTitle: "Conditions générales d’utilisation",
      cookiesTitle: "Gestion des cookies",
      noticeContent: [
        "HydroControl, entreprise spécialisée en rénovation énergétique et optimisation des ressources en eau.",
        "Siège social : Lyon, France. Email : contact@hydrocontrol.fr.",
        "Hébergement : infrastructure cloud européenne. Pour toute demande liée aux données personnelles, contactez-nous via le formulaire.",
      ],
      cguContent: [
        "Le site est un service d’information. Les contenus sont fournis à titre indicatif.",
        "HydroControl se réserve le droit de modifier les contenus sans préavis.",
        "L’utilisateur s’engage à fournir des informations exactes via les formulaires.",
      ],
      cookiesContent: [
        "Les cookies sont utilisés pour mesurer l’audience et améliorer l’expérience.",
        "Vous pouvez accepter ou refuser les cookies à tout moment via le bandeau.",
        "Aucune donnée n’est vendue ni partagée à des tiers non autorisés.",
      ],
    },
  },
  en: {
    meta: {
      title: "HydroControl | Mastering energy and water sustainably",
      description:
        "HydroControl supports professionals and homeowners in energy retrofits and water optimization. Technical expertise, field-driven approach, durable solutions.",
    },
    nav: {
      home: "Home",
      services: "Services",
      domains: "Domains",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      cta: "Request a quote",
      menu: "Menu",
    },
    footer: {
      slogan: "Mastering energy and water sustainably.",
      address: "Lyon, France · Nationwide coverage",
      hours: "Mon–Fri · 9am–6pm",
      legal: "Legal notice",
      cgu: "Terms of use",
      cookies: "Cookies",
      contact: "contact@hydrocontrol.fr",
    },
    common: {
      companyName: "HydroControl",
      slogan: "Mastering energy and water sustainably.",
      ctaPrimary: "Schedule a call",
      ctaSecondary: "Explore services",
      downloadCta: "Download the presentation",
      downloadLabel: "Get the document",
      downloadHelper:
        "Leave your email to receive the full presentation.",
      emailPlaceholder: "Your business email",
      submit: "Send",
      success: "Thanks, we will get back to you soon.",
      error: "Something went wrong. Please try again.",
      themeLight: "Light",
      themeDark: "Dark",
      themeToggleLight: "Switch to light mode",
      themeToggleDark: "Switch to dark mode",
      languageLabel: "Select language",
      skipToContent: "Skip to content",
    },
    home: {
      heroTitle:
        "Technical solutions for energy retrofit and water optimization",
      heroLead:
        "Since 2005, HydroControl supports agriculture, industry and households with a reliable, field-driven approach.",
      heroPoints: [
        "Audit and diagnostics of installations",
        "Measurable reductions in consumption",
        "Long-term monitoring and maintenance",
      ],
      stats: [
        { label: "Founded", value: "2005" },
        { label: "Sectors covered", value: "3" },
        { label: "Approach", value: "Technical & sustainable" },
      ],
      expertiseTitle: "Core expertise",
      expertiseLead:
        "Clear, educational solutions adapted to your operational constraints.",
      expertises: [
        {
          title: "Energy retrofit",
          text: "Consumption analysis, equipment optimization and performance uplift.",
        },
        {
          title: "Water management",
          text: "Network optimization, loss reduction and usage monitoring.",
        },
        {
          title: "Dehumidification",
          text: "Humidity control for crop quality and energy performance.",
        },
      ],
      domainsTitle: "Domains",
      domainsLead:
        "We operate in demanding environments where reliability matters.",
      domains: [
        {
          title: "Agriculture",
          text: "Greenhouses, irrigation, energy optimization for farms.",
          href: "/domaines",
        },
        {
          title: "Housing",
          text: "Energy retrofit solutions for homeowners.",
          href: "/domaines",
        },
        {
          title: "Industry",
          text: "Complex sites, technical infrastructure and durability.",
          href: "/domaines",
        },
      ],
      approachTitle: "A structured method",
      approachLead:
        "Every project follows a clear path to deliver measurable results.",
      approachSteps: [
        {
          title: "Diagnosis",
          text: "On-site analysis, measurements and constraint review.",
        },
        {
          title: "Action plan",
          text: "Tailored technical proposals and projected savings.",
        },
        {
          title: "Implementation",
          text: "Deployment, performance tracking and adjustments.",
        },
      ],
      leadMagnetTitle: "Get the presentation document",
      leadMagnetText:
        "A clear overview of our approach, methods and intervention areas.",
      trustTitle: "Why teams choose us",
      trustItems: [
        "Experienced French company",
        "Technical and educational approach",
        "Tailor-made solutions without hype",
        "Committed to energy transition",
      ],
    },
    services: {
      title: "Services",
      lead:
        "Technical solutions explained clearly, following a problem → solution logic.",
      problemLabel: "Problem",
      solutionLabel: "Solution",
      items: [
        {
          title: "Energy retrofit",
          problem:
            "High consumption, aging equipment, limited visibility on gains.",
          solution:
            "Full audit, installation optimization and measurable improvements.",
        },
        {
          title: "Dehumidification",
          problem:
            "Humidity control issues impacting crops or production.",
          solution:
            "Right-sized systems, humidity control and energy savings.",
        },
        {
          title: "Water management",
          problem:
            "Water losses, overconsumption and hard-to-monitor networks.",
          solution:
            "Network optimization, loss reduction and smart monitoring.",
        },
      ],
    },
    domains: {
      title: "Domains",
      lead:
        "We work in technical environments where energy and water are critical.",
      items: [
        {
          title: "Agriculture",
          text: "Greenhouses, irrigation, energy optimization for farms.",
          highlights: [
            "Lower energy costs",
            "Optimized irrigation cycles",
            "Climate control",
          ],
        },
        {
          title: "Housing",
          text: "Energy retrofit for homes and efficient systems.",
          highlights: [
            "Clear energy audit",
            "Budget-aware solutions",
            "Comfort improvement",
          ],
        },
        {
          title: "Industry",
          text: "Complex sites, technical infrastructure, durable performance.",
          highlights: [
            "Reliable installations",
            "Long-term monitoring",
            "Robust solutions",
          ],
        },
      ],
    },
    about: {
      title: "About",
      lead:
        "HydroControl is a French company founded in 2005, focused on energy retrofit and water management.",
      historyTitle: "Field expertise since 2005",
      historyText:
        "Based in Lyon, HydroControl supports professionals and homeowners with durable, technical solutions adapted to real-world constraints.",
      valuesTitle: "Values and positioning",
      values: [
        {
          title: "Reliability",
          text: "Proven methodology and measurable results.",
        },
        {
          title: "Education",
          text: "Clear explanations for non-technical audiences.",
        },
        {
          title: "Sustainability",
          text: "Responsible solutions aligned with energy transition.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      lead: "Answers to the most frequent questions about our work.",
      items: [
        {
          question: "Do you operate across France?",
          answer: "Yes, we support projects nationwide.",
        },
        {
          question: "Do you only work with professionals?",
          answer:
            "No, we also support homeowners with energy retrofits.",
        },
        {
          question: "What are the typical timelines?",
          answer:
            "Timelines depend on the project. We define a clear plan after the audit.",
        },
        {
          question: "Do you provide post-project follow-up?",
          answer:
            "Yes, we monitor performance and make adjustments when needed.",
        },
      ],
    },
    contact: {
      title: "Contact",
      lead:
        "Share your needs and we will come back with a tailored proposal.",
      formTitle: "Request a quote or call",
      formFields: {
        name: "Full name",
        email: "Email",
        phone: "Phone",
        organization: "Company / Organization",
        domain: "Domain",
        message: "Your needs",
        scheduleDate: "Preferred date",
        scheduleTime: "Preferred time",
      },
      domainOptions: [
        { value: "agriculture", label: "Agriculture" },
        { value: "habitat", label: "Housing" },
        { value: "industry", label: "Industry" },
        { value: "other", label: "Other" },
      ],
      formHelper:
        "We reply within 48 business hours to qualify your project.",
      mapTitle: "Our base",
      calendarTitle: "Book a meeting",
      calendarText:
        "Choose a slot and we will confirm the meeting by email.",
    },
    cookies: {
      message:
        "We use cookies to improve the experience and measure performance.",
      accept: "Accept",
      decline: "Decline",
    },
    legal: {
      title: "Legal information",
      lead:
        "HydroControl is committed to protecting your data and complying with GDPR.",
      cguTitle: "Terms of use",
      cookiesTitle: "Cookie management",
      noticeContent: [
        "HydroControl is a company specialized in energy retrofit and water optimization.",
        "Head office: Lyon, France. Email: contact@hydrocontrol.fr.",
        "Hosting: European cloud infrastructure. For personal data requests, contact us via the form.",
      ],
      cguContent: [
        "This website provides informational content only.",
        "HydroControl may update content without prior notice.",
        "Users agree to provide accurate information in forms.",
      ],
      cookiesContent: [
        "Cookies are used to measure audience and improve experience.",
        "You can accept or refuse cookies at any time via the banner.",
        "No data is sold or shared with unauthorized third parties.",
      ],
    },
  },
  es: {
    meta: {
      title: "HydroControl | Energía y agua de forma sostenible",
      description:
        "HydroControl apoya a profesionales y particulares en la rehabilitación energética y la optimización del agua. Enfoque técnico y soluciones duraderas.",
    },
    nav: {
      home: "Inicio",
      services: "Servicios",
      domains: "Sectores",
      about: "Nosotros",
      faq: "FAQ",
      contact: "Contacto",
      cta: "Solicitar presupuesto",
      menu: "Menú",
    },
    footer: {
      slogan: "Energía y agua de forma sostenible.",
      address: "Lyon, Francia · Cobertura nacional",
      hours: "Lun–Vie · 9h–18h",
      legal: "Aviso legal",
      cgu: "Condiciones de uso",
      cookies: "Cookies",
      contact: "contact@hydrocontrol.fr",
    },
    common: {
      companyName: "HydroControl",
      slogan: "Energía y agua de forma sostenible.",
      ctaPrimary: "Agendar una llamada",
      ctaSecondary: "Ver servicios",
      downloadCta: "Descargar la presentación",
      downloadLabel: "Recibir el documento",
      downloadHelper:
        "Deja tu correo para recibir la presentación completa.",
      emailPlaceholder: "Tu email profesional",
      submit: "Enviar",
      success: "Gracias, te contactaremos pronto.",
      error: "Ocurrió un error. Inténtalo de nuevo.",
      themeLight: "Claro",
      themeDark: "Oscuro",
      themeToggleLight: "Cambiar a modo claro",
      themeToggleDark: "Cambiar a modo oscuro",
      languageLabel: "Seleccionar idioma",
      skipToContent: "Saltar al contenido",
    },
    home: {
      heroTitle:
        "Soluciones técnicas para rehabilitación energética y gestión del agua",
      heroLead:
        "Desde 2005, HydroControl acompaña agricultura, industria y hogares con un enfoque fiable y de terreno.",
      heroPoints: [
        "Auditoría y diagnóstico de instalaciones",
        "Reducciones medibles de consumo",
        "Seguimiento y mantenimiento a largo plazo",
      ],
      stats: [
        { label: "Fundación", value: "2005" },
        { label: "Sectores", value: "3" },
        { label: "Enfoque", value: "Técnico y sostenible" },
      ],
      expertiseTitle: "Experiencias clave",
      expertiseLead:
        "Soluciones claras y pedagógicas adaptadas a tus limitaciones.",
      expertises: [
        {
          title: "Rehabilitación energética",
          text: "Análisis de consumo, optimización de equipos y mejora global.",
        },
        {
          title: "Gestión hídrica",
          text: "Optimización de redes, reducción de pérdidas y control de usos.",
        },
        {
          title: "Deshumidificación",
          text: "Control de humedad para cultivos y eficiencia energética.",
        },
      ],
      domainsTitle: "Sectores de intervención",
      domainsLead:
        "Actuamos en entornos exigentes donde la fiabilidad es clave.",
      domains: [
        {
          title: "Agricultura",
          text: "Invernaderos, riego y optimización energética.",
          href: "/domaines",
        },
        {
          title: "Vivienda",
          text: "Soluciones para particulares y eficiencia global.",
          href: "/domaines",
        },
        {
          title: "Industria",
          text: "Sitios complejos e infraestructuras técnicas.",
          href: "/domaines",
        },
      ],
      approachTitle: "Método estructurado",
      approachLead:
        "Cada proyecto sigue un camino claro con resultados medibles.",
      approachSteps: [
        {
          title: "Diagnóstico",
          text: "Análisis in situ, mediciones y comprensión de restricciones.",
        },
        {
          title: "Plan de acción",
          text: "Propuestas técnicas y proyección de ahorros.",
        },
        {
          title: "Implementación",
          text: "Despliegue, seguimiento de rendimiento y ajustes.",
        },
      ],
      leadMagnetTitle: "Recibe nuestro documento de presentación",
      leadMagnetText:
        "Resumen completo de nuestro enfoque, métodos y áreas.",
      trustTitle: "Por qué nos eligen",
      trustItems: [
        "Empresa francesa con experiencia",
        "Enfoque técnico y pedagógico",
        "Soluciones a medida sin promesas excesivas",
        "Compromiso con la transición energética",
      ],
    },
    services: {
      title: "Servicios",
      lead:
        "Soluciones técnicas explicadas con claridad, problema → solución.",
      problemLabel: "Problema",
      solutionLabel: "Solución",
      items: [
        {
          title: "Rehabilitación energética",
          problem:
            "Consumos altos, equipos antiguos, poca visibilidad de resultados.",
          solution:
            "Auditoría completa, optimización y mejoras medibles.",
        },
        {
          title: "Deshumidificación",
          problem:
            "Problemas de humedad que afectan producción o cultivos.",
          solution:
            "Sistemas adecuados, control de humedad y ahorro energético.",
        },
        {
          title: "Gestión hídrica",
          problem:
            "Pérdidas de agua y redes difíciles de controlar.",
          solution:
            "Optimización de redes, reducción de pérdidas y control inteligente.",
        },
      ],
    },
    domains: {
      title: "Sectores",
      lead:
        "Trabajamos en entornos técnicos donde energía y agua son críticas.",
      items: [
        {
          title: "Agricultura",
          text: "Invernaderos, riego y optimización energética.",
          highlights: [
            "Reducción de costes energéticos",
            "Ciclos de riego optimizados",
            "Control climático",
          ],
        },
        {
          title: "Vivienda",
          text: "Rehabilitación energética de hogares.",
          highlights: [
            "Auditoría clara",
            "Soluciones según presupuesto",
            "Mejora de confort",
          ],
        },
        {
          title: "Industria",
          text: "Sitios complejos y rendimiento duradero.",
          highlights: [
            "Instalaciones fiables",
            "Seguimiento a largo plazo",
            "Soluciones robustas",
          ],
        },
      ],
    },
    about: {
      title: "Nosotros",
      lead:
        "HydroControl es una empresa francesa fundada en 2005, centrada en la energía y el agua.",
      historyTitle: "Experiencia de terreno desde 2005",
      historyText:
        "Con sede en Lyon, HydroControl acompaña a profesionales y hogares con soluciones técnicas y sostenibles.",
      valuesTitle: "Valores y posicionamiento",
      values: [
        {
          title: "Fiabilidad",
          text: "Método probado y resultados medibles.",
        },
        {
          title: "Pedagogía",
          text: "Explicaciones claras para públicos no técnicos.",
        },
        {
          title: "Sostenibilidad",
          text: "Soluciones responsables alineadas con la transición energética.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      lead: "Respuestas a las preguntas más frecuentes.",
      items: [
        {
          question: "¿Trabajan en toda Francia?",
          answer: "Sí, acompañamos proyectos en todo el país.",
        },
        {
          question: "¿Solo trabajan con profesionales?",
          answer:
            "No, también apoyamos a particulares en rehabilitación energética.",
        },
        {
          question: "¿Cuáles son los plazos habituales?",
          answer:
            "Dependen del proyecto. Definimos un plan claro tras la auditoría.",
        },
        {
          question: "¿Ofrecen seguimiento posterior?",
          answer:
            "Sí, realizamos seguimiento y ajustes de rendimiento.",
        },
      ],
    },
    contact: {
      title: "Contacto",
      lead:
        "Describe tu necesidad y te enviaremos una propuesta adaptada.",
      formTitle: "Solicitud de presupuesto o llamada",
      formFields: {
        name: "Nombre completo",
        email: "Email",
        phone: "Teléfono",
        organization: "Empresa / Organización",
        domain: "Sector",
        message: "Tu necesidad",
        scheduleDate: "Fecha deseada",
        scheduleTime: "Hora deseada",
      },
      domainOptions: [
        { value: "agriculture", label: "Agricultura" },
        { value: "habitat", label: "Vivienda" },
        { value: "industry", label: "Industria" },
        { value: "other", label: "Otro" },
      ],
      formHelper:
        "Respondemos en 48 horas laborables para calificar tu proyecto.",
      mapTitle: "Nuestra base",
      calendarTitle: "Reservar una reunión",
      calendarText:
        "Elige un horario y confirmamos la reunión por email.",
    },
    cookies: {
      message:
        "Usamos cookies para mejorar la experiencia y medir el rendimiento.",
      accept: "Aceptar",
      decline: "Rechazar",
    },
    legal: {
      title: "Información legal",
      lead:
        "HydroControl protege tus datos y cumple con el RGPD.",
      cguTitle: "Condiciones de uso",
      cookiesTitle: "Gestión de cookies",
      noticeContent: [
        "HydroControl es una empresa especializada en rehabilitación energética y optimización del agua.",
        "Sede: Lyon, Francia. Email: contact@hydrocontrol.fr.",
        "Alojamiento: infraestructura cloud europea. Para solicitudes de datos personales, contacta vía el formulario.",
      ],
      cguContent: [
        "Este sitio ofrece información general.",
        "HydroControl puede actualizar los contenidos sin previo aviso.",
        "El usuario se compromete a proporcionar información veraz en los formularios.",
      ],
      cookiesContent: [
        "Las cookies se usan para medir la audiencia y mejorar la experiencia.",
        "Puedes aceptar o rechazar cookies en cualquier momento desde el banner.",
        "No se vende ni comparte información con terceros no autorizados.",
      ],
    },
  },
};

export const getDictionary = (locale: Locale) => dictionaries[locale];
