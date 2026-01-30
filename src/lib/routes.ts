import { Locale } from "./i18n";

export const withLocale = (locale: Locale, path: string) => {
  if (path === "/") {
    return `/${locale}`;
  }
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
};
