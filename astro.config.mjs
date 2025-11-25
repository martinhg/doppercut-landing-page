// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap'; // ¡Nuevo!
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://doppercut.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), sitemap(), robotsTxt()],
});
