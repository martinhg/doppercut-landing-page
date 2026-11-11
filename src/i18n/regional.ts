import { ui } from './content';
import { chrome } from './chrome';
import { stepDemos } from './stepDemos';
import { countries } from './config';
import type { Lang } from './locale';
import { industryIds, industrySection, industrySlugs, industryUi, type IndustryCopy, type IndustryCopyTable, type IndustryId } from './industries/index';
import { esIndustries, esTurnoPhrases } from './industries/es';
import { enIndustries } from './industries/en';
import { ptIndustries } from './industries/pt';

type Phrases = readonly (readonly [string, string])[];

/**
 * Argentina and Uruguay book "turnos", not "citas". Whole phrases are listed (not the bare noun)
 * because the gender changes with it: "una cita perdida" → "un turno perdido".
 */
const turnoPhrases: Phrases = [
  // Industry-page phrases first: they are longer and must win over the generic pairs below.
  ...esTurnoPhrases,
  ['Nueva cita confirmada', 'Nuevo turno confirmado'],
  ['Nueva cita', 'Nuevo turno'],
  ['una cita perdida', 'un turno perdido'],
  ['Citas completadas', 'Turnos completados'],
  ['citas ilimitadas', 'turnos ilimitados'],
  ['Citas online', 'Turnos online'],
  ['Sistema de citas', 'Sistema de turnos'],
  ['sistema de citas', 'sistema de turnos'],
  ['Gestiona citas', 'Gestiona turnos'],
  ['trabajan con citas', 'trabajan con turnos'],
  ['sus citas', 'sus turnos'],
  ['su cita', 'su turno'],
  ['tu cita', 'tu turno'],
];

const regionalPhrases: Partial<Record<string, Phrases>> = { ar: turnoPhrases, uy: turnoPhrases };

const rewrite = <T>(value: T, phrases: Phrases): T => {
  if (typeof value === 'string') return phrases.reduce<string>((text, [from, to]) => text.split(from).join(to), value) as T;
  if (Array.isArray(value)) return value.map((item) => rewrite(item, phrases)) as T;
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, rewrite(item, phrases)])) as T;
  return value;
};

const langOf = (code: string): Lang => (countries[code as keyof typeof countries]?.lang ?? 'es_latam') as Lang;

const forCountry = <T>(table: Record<Lang, T>, code: string): T => {
  const base = table[langOf(code)];
  const phrases = regionalPhrases[code];
  return phrases ? rewrite(base, phrases) : base;
};

/** Page copy for a country, with its regional vocabulary applied. */
export const uiFor = (code: string) => forCountry(ui, code);
/** Shared chrome strings (SEO, WhatsApp, cookie notice) for a country. */
export const chromeFor = (code: string) => forCountry(chrome, code);
/** Step-scene sample data for a country. */
export const demoFor = (code: string) => forCountry(stepDemos, code);

const industryTables: Record<Lang, IndustryCopyTable> = { es_latam: esIndustries, en: enIndustries, pt: ptIndustries };

/** Industry page and strip labels for a country. */
export const industryUiFor = (code: string) => forCountry(industryUi, code);

/** Path of an industry page for a country, e.g. /ar/rubros/barberias. */
export const industryPath = (code: string, id: IndustryId) => {
  const lang = langOf(code);
  return `/${code}/${industrySection[lang]}/${industrySlugs[id][lang]}`;
};

/** Path of the industry index for a country, e.g. /ar/rubros. */
export const industryIndexPath = (code: string) => `/${code}/${industrySection[langOf(code)]}`;

/** URL section segment for a country. */
export const industrySectionFor = (code: string) => industrySection[langOf(code)];

/** Industries that have copy in the country language, in display order, with regional vocabulary applied. */
export const industriesFor = (code: string): { id: IndustryId; slug: string; copy: IndustryCopy }[] => {
  const lang = langOf(code);
  const table = industryTables[lang];
  const phrases = regionalPhrases[code];
  return industryIds.flatMap((id) => {
    const copy = table[id];
    if (!copy) return [];
    return [{ id, slug: industrySlugs[id][lang], copy: phrases ? rewrite(copy, phrases) : copy }];
  });
};

/**
 * Same page in another country. Industry URLs are localized (/ar/rubros/barberias ↔ /br/segmentos/barbearias),
 * so a plain country swap would 404; everything else keeps its path.
 * `path` is the pathname without the country prefix, e.g. "/rubros/barberias".
 */
export const countryPathFor = (from: string, to: string, path: string) => {
  const [, section, slug] = path.replace(/\/$/, '').split('/');
  if (section !== industrySection[langOf(from)]) return `/${to}${path}`;
  if (!slug) return industriesFor(to).length > 0 ? industryIndexPath(to) : `/${to}`;
  const id = industryIds.find((candidate) => industrySlugs[candidate][langOf(from)] === slug);
  if (id && industryTables[langOf(to)][id]) return industryPath(to, id);
  return industriesFor(to).length > 0 ? industryIndexPath(to) : `/${to}`;
};
