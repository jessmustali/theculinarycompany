const ITEMS = [
  "Reservations by invitation",
  "Service Nº 003 — Spring 2026",
  "Address disclosed morning of",
  "Twelve seats per service",
  "Cooked in secret",
  "San Francisco · MMXXVI",
];

export function Ticker() {
  // duplicate for a seamless -50% loop
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="ticker fx fx-1" aria-hidden>
      <div className="ticker-track">
        {loop.map((text, i) => (
          <span className="ticker-item" key={i}>
            <span className="ticker-dot" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
