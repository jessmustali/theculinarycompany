import { Backdrop } from "@/components/Backdrop";
import { Ticker } from "@/components/Ticker";
import { Wordmark } from "@/components/Wordmark";
import { LiveClock } from "@/components/LiveClock";

const APPLY_HREF =
  "mailto:yummy@theculinarycompany.com?subject=Application%20for%20a%20seat";

export default function Page() {
  return (
    <>
      <Backdrop />

      <main className="stage">
        <Ticker />

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
