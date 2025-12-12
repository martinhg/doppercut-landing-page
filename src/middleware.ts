import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname === '/') {
    const country = context.request.headers.get('x-vercel-ip-country')?.toLowerCase() || 'ar';

    // 2. Definimos los países que tu web soporta realmente
    // (Asegúrate de que estas carpetas existan en src/pages/[country])
    const supportedCountries = ['ar', 'mx', 'br', 'cl', 'us'];

    // 3. Decidimos el destino
    // Si el país del usuario está soportado, lo mandamos ahí.
    // Si no (ej: viene de España), lo mandamos a la versión Global ('us') o a la default ('ar').
    const target = supportedCountries.includes(country) ? country : 'us';

    // 4. Ejecutamos la redirección (302 Found = Temporal, mejor para geo-redirects)
    return context.redirect(`/${target}`, 302);
  }

  // Si no es la raíz, sigue tu camino
  return next();
});
