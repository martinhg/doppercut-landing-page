import type { APIRoute } from 'astro';

export const prerender = true;

/**
 * Same output astro-robots-txt generated with its defaults: allow everything
 * and point crawlers at the sitemap built by @astrojs/sitemap.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL('sitemap-index.xml', site).href;

  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
