import { ui } from './content';
import { chrome } from './chrome';
import { stepDemos } from './stepDemos';
import { countries } from './config';
import type { Lang } from './locale';

type Phrases = readonly (readonly [string, string])[];

/**
 * Argentina and Uruguay book "turnos", not "citas". Whole phrases are listed (not the bare noun)
 * because the gender changes with it: "una cita perdida" → "un turno perdido".
 */
const turnoPhrases: Phrases = [
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
