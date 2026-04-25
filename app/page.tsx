import { Backdrop } from "@/components/Backdrop";
import { Ticker } from "@/components/Ticker";
import { Wordmark } from "@/components/Wordmark";
import { LiveClock } from "@/components/LiveClock";

const APPLY_HREF =
  "mailto:host@theculinarycompany.com?subject=Application%20for%20a%20seat";

export default function Page() {
  return (
    <>
      <Backdrop />

      <main className="stage">
        <Ticker />

        <header className="bar fx fx-2">
          <p className="tagline">— an after-hours dining society</p>
          <nav aria-label="primary">
            <a href="#">Members</a>
            <a href="#">Press</a>
            <a href={APPLY_HREF}>Apply</a>
          </nav>
        </header>

        <Wordmark />

        <footer className="foot fx fx-5">
          <div className="info">
            <p className="info-line">Service Nº 003 — Spring 2026</p>
            <p className="info-line dim">
              San Francisco · <LiveClock /> PT
            </p>
          </div>
          <a className="cta" href={APPLY_HREF}>
            Apply for a seat
            <span className="arrow" aria-hidden>→</span>
          </a>
        </footer>
      </main>
    </>
  );
}
