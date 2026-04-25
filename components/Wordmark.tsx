/**
 * The poster wordmark. Sized to fill the upper half of the viewport,
 * capped by both vw and vh so it never breaks the no-scroll rule.
 */
export function Wordmark() {
  return (
    <h1 className="wordmark fx fx-3" aria-label="The Culinary Company">
      <span className="line">The Culinary</span>
      <span className="line line-2">
        Company<sup className="reg" aria-hidden>®</sup>
      </span>
    </h1>
  );
}
