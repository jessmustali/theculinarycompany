/**
 * The poster wordmark. Each letter is its own span so we can apply
 * tighter kerning only where the contact surface between adjacent
 * letters is small (curve↔curve, curve↔diagonal). Pairs of vertical
 * stems (il, in, mp) keep the default tracking.
 *
 * `tight` characters get class `k` — `letter-spacing` on a one-letter
 * span pulls only the gap *after* that letter.
 */
type Glyph = [char: string, tight?: boolean];

function Letters({ glyphs }: { glyphs: Glyph[] }) {
  return (
    <>
      {glyphs.map(([ch, tight], i) =>
        ch === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <span key={i} className={tight ? "k" : undefined}>
            {ch}
          </span>
        )
      )}
    </>
  );
}

// Tight = pull this letter toward the next.
const LINE_1: Glyph[] = [
  ["T", true], ["h", true], ["e"], [" "],
  ["C", true], ["u", true], ["l", true], ["i", true], ["n", true], ["a", true], ["r", true], ["y"],
];

const LINE_2: Glyph[] = [
  ["C", true], ["o", true], ["m", true], ["p", true], ["a", true], ["n", true], ["y"],
];

export function Wordmark() {
  return (
    <h1 className="wordmark fx fx-3" aria-label="The Culinary Company">
      <span className="line line-1">
        <Letters glyphs={LINE_1} />
        <sup className="reg" aria-hidden>®</sup>
      </span>
      <span className="line line-2">
        <Letters glyphs={LINE_2} />
      </span>
    </h1>
  );
}
