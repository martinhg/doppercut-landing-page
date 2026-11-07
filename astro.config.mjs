// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://turnosplus.com',

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

  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
