/**
 * Single source of truth for brand, domains and contact channels.
 * Change a value here instead of searching the markup.
 */
export const site = {
  name: 'TurnosPlus',
  tagline: 'Tu agenda, en orden.',
  url: 'https://turnosplus.com',
  appUrl: 'https://app.turnosplus.com',
  email: 'hola@turnosplus.com',
  instagram: 'https://instagram.com/turnosplus',
  instagramHandle: '@turnosplus',
  whatsappNumber: '5493513238509',
  whatsappDisplay: '+54 9 351 323-8509',
  themeColor: '#21242C',
  ogImage: '/og-turnosplus.jpg',
  logo: {
    light: '/brand/logo-primary.svg',
    dark: '/brand/logo-dark.svg',
    symbol: '/brand/symbol.svg',
    raster: '/brand/favicon.png',
  },
  /**
   * Legal identity shown in the legal notice. Fill these in before launch:
   * empty fields are omitted from the page instead of rendering placeholders.
   */
  legal: {
    holder: 'TurnosPlus',
    taxId: '',
    address: '',
    jurisdiction: 'República Argentina',
  },
  /** Web3Forms public access key (designed to be exposed client-side). */
  web3formsKey: '3fde33d2-47f2-4cf1-ab21-7f97bd461f5d',
  /** Google Search Console verification token, read at build time. */
  googleSiteVerification: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
} as const;

export const whatsappLink = (text?: string) => `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
