/** Geometry shared by the step 2 markup and its animation (SVG user units, viewBox 0 0 400 240). */

/** Cubic flight from the link pill centre (140,120) to the landing point (300,110). */
export const FLIGHT_PATH = 'M140 120 C 180 30, 270 30, 300 110';

/** FLIGHT_PATH sampled at t = 0, .25, .5, .75, 1, with the tangent angle at each point. */
export const FLIGHT_KEYFRAMES = {
  x: [140, 177.7, 223.8, 268, 300],
  y: [120, 69.2, 51.3, 65.2, 110],
  rotate: [-66, -35, 0, 35, 69],
};

export const SHARE_CHANNELS = [
  { name: 'instagram', y: 50, color: '#e1306c' },
  { name: 'whatsapp', y: 120, color: '#25d366' },
  { name: 'maps', y: 190, color: '#ea4335' },
] as const;

/** Vertical distance between stacked booking notifications in step 3, in px. */
export const NOTIFICATION_SLOT = 48;
