import { animate, inView } from 'motion';
import type { AnimationSequence } from 'motion';
import { FLIGHT_KEYFRAMES, NOTIFICATION_SLOT, SHARE_CHANNELS } from './stepSceneData';

/*
 * Looping explanatory illustrations for the "how it works" steps.
 * The markup already shows each scene's final frame, so without JS or with
 * reduced motion the illustration is complete and still. Loops only run while visible.
 */

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;
const BRAND = '#00a8e8';
const SUCCESS = '#166534';
const IDLE_ICON = '#cbd5e1';
const HIGHLIGHT_ON = 'rgba(0, 168, 232, 0.18)';
const HIGHLIGHT_OFF = 'rgba(0, 168, 232, 0)';

/** `hold` is the time (s) at which the sequence matches the static final frame in the markup. */
type Builder = (q: (name: string) => Element) => { sequence: AnimationSequence; hold: number };

const configure: Builder = (q) => {
  const seq: AnimationSequence = [[q('bubble'), { opacity: [0, 1], y: [8, 0], scale: [0.97, 1] }, { at: 0, duration: 0.4, ease: EASE_OUT }]];
  for (let i = 0; i < 4; i++) {
    const t = 0.7 + i * 0.6;
    seq.push(
      [q(`line-${i}`), { backgroundColor: [HIGHLIGHT_OFF, HIGHLIGHT_ON, HIGHLIGHT_OFF] }, { at: t, duration: 0.6 }],
      [q('arrow'), { x: [0, 4, 0], opacity: [0.4, 1, 0.4] }, { at: t + 0.1, duration: 0.4 }],
      [q(`row-${i}`), { opacity: [0, 1], x: [-12, 0] }, { at: t + 0.25, duration: 0.35, ease: EASE_OUT }],
    );
  }
  seq.push([q('badge'), { opacity: [0, 1], scale: [0.9, 1] }, { at: 3.3, duration: 0.35, ease: EASE_OUT }]);
  const hold = 3.8;
  // Leave in the order things arrived, then the loop starts over.
  for (const name of ['bubble', 'row-0', 'row-1', 'row-2', 'row-3', 'badge']) {
    seq.push([q(name), { opacity: 0 }, { at: 5.6, duration: 0.35 }]);
  }
  return { sequence: seq, hold };
};

const share: Builder = (q) => {
  const seq: AnimationSequence = [
    [q('pill'), { opacity: [0, 1], y: [8, 0], scaleX: [1, 1] }, { at: 0, duration: 0.4, ease: EASE_OUT }],
    [q('pill'), { opacity: 0, scaleX: 0.15 }, { at: 0.9, duration: 0.3, ease: EASE_IN_OUT }],
    [q('plane'), { opacity: [0, 1], scale: [0.6, 1], x: FLIGHT_KEYFRAMES.x[0], y: FLIGHT_KEYFRAMES.y[0], rotate: FLIGHT_KEYFRAMES.rotate[0] }, { at: 1.05, duration: 0.25, ease: EASE_OUT }],
    [q('trail'), { opacity: [0, 1] }, { at: 1.2, duration: 0.01 }],
    [q('trail-mask'), { strokeDashoffset: [1, 0] }, { at: 1.2, duration: 1.1, ease: 'easeInOut' }],
    [q('plane'), { ...FLIGHT_KEYFRAMES }, { at: 1.2, duration: 1.1, ease: 'easeInOut' }],
    [q('plane'), { opacity: 0, scale: 0.8 }, { at: 2.3, duration: 0.2 }],
  ];
  SHARE_CHANNELS.forEach((channel, i) => {
    const t = 2.3 + i * 0.12;
    seq.push(
      [q(`branch-${i}`), { strokeDashoffset: [1, 0] }, { at: t, duration: 0.3, ease: EASE_OUT }],
      [q(`icon-bg-${i}`), { fill: [IDLE_ICON, channel.color] }, { at: t + 0.25, duration: 0.25 }],
      [q(`icon-${i}`), { scale: [1, 1.12, 1] }, { at: t + 0.25, duration: 0.4, ease: EASE_OUT }],
      [q(`branch-${i}`), { strokeDashoffset: 1 }, { at: 5.2, duration: 0.3 }],
      [q(`icon-bg-${i}`), { fill: IDLE_ICON }, { at: 5.3, duration: 0.3 }],
    );
    if (channel.name === 'maps') {
      seq.push([q(`icon-dot-${i}`), { fill: [IDLE_ICON, channel.color] }, { at: t + 0.25, duration: 0.25 }], [q(`icon-dot-${i}`), { fill: IDLE_ICON }, { at: 5.3, duration: 0.3 }]);
    }
  });
  seq.push([q('trail'), { opacity: 0 }, { at: 5.2, duration: 0.3 }]);
  return { sequence: seq, hold: 3.8 };
};

const bookings: Builder = (q) => {
  const total = 5;
  const arrival = (j: number) => 0.4 + j * 0.75;
  const seq: AnimationSequence = [
    [q('label-today'), { opacity: [1, 1] }, { at: 0, duration: 0.01 }],
    [q('label-full'), { opacity: [0, 0] }, { at: 0, duration: 0.01 }],
    [q('bar'), { scaleX: [0, 0], backgroundColor: [BRAND, BRAND] }, { at: 0, duration: 0.01 }],
  ];
  for (let j = 0; j < total; j++) {
    const t = arrival(j);
    seq.push(
      [q(`n-${j}`), { opacity: [0, 1], y: [-14, 0], scale: [0.96, 1] }, { at: t, duration: 0.4, ease: EASE_OUT }],
      [q('bar'), { scaleX: (j + 1) / total }, { at: t, duration: 0.4, ease: EASE_OUT }],
    );
    // Older notifications slide down one slot; the list clips whatever falls past the third.
    for (let i = 0; i < j; i++) {
      seq.push([q(`n-${i}`), { y: (j - i) * NOTIFICATION_SLOT }, { at: t, duration: 0.4, ease: EASE_OUT }]);
    }
  }
  const done = arrival(total - 1) + 0.5;
  seq.push(
    [q('label-today'), { opacity: 0 }, { at: done, duration: 0.25 }],
    [q('label-full'), { opacity: 1 }, { at: done, duration: 0.25 }],
    [q('bar'), { backgroundColor: SUCCESS }, { at: done, duration: 0.25 }],
  );
  const out = done + 2.2;
  for (let j = 0; j < total; j++) seq.push([q(`n-${j}`), { opacity: 0 }, { at: out, duration: 0.3 }]);
  seq.push([q('bar'), { scaleX: 0 }, { at: out, duration: 0.3 }]);
  return { sequence: seq, hold: done + 0.3 };
};

const builders: Record<string, Builder> = { configure, share, bookings };

let started = false;

export function initStepScenes() {
  if (started) return;
  started = true;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll<HTMLElement>('[data-scene]').forEach((scene) => {
    const build = builders[scene.dataset.scene ?? ''];
    if (!build) return;
    const q = (name: string) => {
      const el = scene.querySelector(`[data-s="${name}"]`);
      if (!el) throw new Error(`step scene "${scene.dataset.scene}" is missing [data-s="${name}"]`);
      return el;
    };

    // Built on first view and started at the final frame, so the static markup hands off without a jump.
    let controls: ReturnType<typeof animate> | undefined;
    inView(
      scene,
      () => {
        if (!controls) {
          try {
            const { sequence, hold } = build(q);
            controls = animate(sequence, { repeat: Infinity, repeatDelay: 0.4 });
            controls.time = hold;
          } catch (error) {
            // A broken illustration must never hide content: keep the static final frame.
            console.error(error);
            return;
          }
        }
        controls.play();
        return () => controls?.pause();
      },
      { amount: 0.4 },
    );
  });
}
