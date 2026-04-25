export function Backdrop() {
  return (
    <>
      <div className="backdrop" aria-hidden>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
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
          <feColorMatrix values="0 0 0 0 0.09  0 0 0 0 0.06  0 0 0 0 0.04  0 0 0 0.55 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#n)" />
      </svg>
    </>
  );
}
