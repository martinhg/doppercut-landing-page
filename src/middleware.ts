import { defineMiddleware } from 'astro:middleware';
import { countries, defaultCountry } from './i18n/config';

const supportedCountries = new Set(Object.keys(countries));

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname !== '/') return next();

  // Geo-redirect the bare root to the visitor's country; unsupported countries get the global (English) site.
  const geo = context.request.headers.get('x-vercel-ip-country')?.toLowerCase();
  const target = geo ? (supportedCountries.has(geo) ? geo : 'us') : defaultCountry;

  // 302: geo redirects must not be cached as permanent.
  return context.redirect(`/${target}`, 302);
});
