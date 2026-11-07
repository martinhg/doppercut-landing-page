import { countries, defaultCountry } from './config';
import type { ui } from './content';

export type CountryCode = keyof typeof countries;
export type Lang = keyof typeof ui;

export const isCountry = (code: unknown): code is CountryCode => typeof code === 'string' && code in countries;

/** BCP 47 tag for `<html lang>` and `hreflang` (es_latam is not a valid tag). */
export const htmlLangFor = (code: CountryCode): string => {
  if (code === 'br') return 'pt-BR';
  if (code === 'us') return 'en-US';
  return `es-${code.toUpperCase()}`;
};

/** Open Graph locale, which uses an underscore. */
export const ogLocaleFor = (code: CountryCode): string => htmlLangFor(code).replace('-', '_');

export const resolveLocale = (raw: unknown) => {
  const code: CountryCode = isCountry(raw) ? raw : (defaultCountry as CountryCode);
  const country = countries[code];
  return {
    code,
    country,
    lang: country.lang as Lang,
    htmlLang: htmlLangFor(code),
    ogLocale: ogLocaleFor(code),
  };
};

/** Prefix a site path with the country segment. */
export const localePath = (code: string, path = '/') => `/${code}${path.startsWith('/') ? path : `/${path}`}`.replace(/\/$/, '') || `/${code}`;
