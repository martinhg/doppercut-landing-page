// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://doppercut.com',

  output: 'server',

  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'mx', 'br', 'cl', 'us'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap(), robotsTxt()],
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
