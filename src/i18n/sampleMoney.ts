/**
 * Sample amounts for the decorative product previews. Values are plausible per market so a
 * preview never reads as a typo (USD 84,500 of cash in a day).
 */
const sampleCash: Record<string, [currency: string, amount: number]> = {
  ar: ['ARS', 184500],
  uy: ['UYU', 9800],
  mx: ['MXN', 4800],
  cl: ['CLP', 185000],
  co: ['COP', 950000],
  pe: ['PEN', 980],
  es: ['EUR', 420],
  br: ['BRL', 2400],
};

export const sampleCashFor = (countryCode: string) => {
  const [currency, amount] = sampleCash[countryCode] ?? ['USD', 480];
  return { currency, amount };
};

/** Whole-unit currency formatter for a BCP 47 locale, e.g. es-AR → "$ 184.500". */
export const moneyFormatter = (locale: string, currency: string) => {
  const format = new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 0 });
  return (value: number) => format.format(value);
};
