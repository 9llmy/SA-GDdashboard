"use client";
import { useLang } from "@/lib/i18n";
import summary from "@/data/summary.json";

export default function GenderSplit() {
  const { t, n } = useLang();
  const { female, male, graduates_covered, available_for } = summary.gender;
  if (!female || !male) return null;

  const total = female + male;
  const pct = (v) => ((v / total) * 100).toFixed(1);

  return (
    <section className="section wrap">
      <h2>{t.genderTitle}</h2>
      <p className="caveat">
        {t.partial(n(available_for), n(summary.universities))}{" "}
        ({n(graduates_covered)} {t.graduates})
      </p>
      <div className="panel">
        <div className="split">
          <span className="f" style={{ width: `${pct(female)}%` }}>
            {pct(female)}%
          </span>
          <span className="m" style={{ width: `${pct(male)}%` }}>
            {pct(male)}%
          </span>
        </div>
        <div className="split-legend">
          <span>
            <i className="swatch" style={{ background: "var(--green)" }} />
            {t.female} · {n(female)}
          </span>
          <span>
            <i className="swatch" style={{ background: "var(--green-deep)" }} />
            {t.male} · {n(male)}
          </span>
        </div>
      </div>
    </section>
  );
}