import type { Metadata } from "next";
import DemoBooking from "@/components/DemoBooking";

export const metadata: Metadata = {
  title: "Demo — close last month on your real books, live",
  description:
    "Thirty minutes. We connect Aleq read-only and close your last period on your real books, live — or run the needle hunt on a fictional company if you'd rather connect nothing. You leave with a number and the worked support behind it.",
};

export default function Page() {
  return (
    <section className="pp-wrap">
      <div className="pp-hero">
        <div className="pp-hero-copy">
          <div className="pp-eyebrow">Demo</div>
          <h1>
            Bring an unsigned period.
            <br />
            Leave with a number.
          </h1>
          <p className="pp-hero-lead">
            Thirty minutes. We connect read-only and close last month on your
            real books, live. Rather connect nothing? We run a fictional
            company with errors planted in its books and you watch Aleq hunt
            them down.
          </p>
          <div className="pp-note">
            <span className="t-dot" />
            read-only · revocable · nothing posts without you
          </div>
        </div>
        <div className="pp-hero-art pp-frame reveal">
          <DemoBooking />
        </div>
      </div>
    </section>
  );
}
