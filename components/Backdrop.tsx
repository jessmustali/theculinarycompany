/**
 * Full-bleed background photograph + cinematic scrim + film grain.
 *
 * Swap the `src` URL with your own asset when you're ready —
 * drop a file at `public/hero.jpg` and use `src="/hero.jpg"`.
 *
 * The CSS applies `grayscale(1) brightness(.5) contrast(1.12)` so any
 * input photo is pulled into the brand's monochrome key. A 28s
 * ken-burns drift adds quiet life without scrolling.
 */
export function Backdrop() {
  return (
    <>
      <div className="backdrop" aria-hidden>
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=85"
          alt=""
          loading="eager"
          decoding="async"
        />
        <div className="scrim" />
      </div>
      <svg
        className="grain"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden
      >
        <filter id="n">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.92"
            numOctaves={2}
            stitchTiles="stitch"
          />
          <feColorMatrix values="0 0 0 0 0.05  0 0 0 0 0.05  0 0 0 0 0.05  0 0 0 0.55 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#n)" />
      </svg>
    </>
  );
}
