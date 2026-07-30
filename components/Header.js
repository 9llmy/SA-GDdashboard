"use client";
import { useLang } from "@/lib/i18n";
import summary from "@/data/summary.json";

export default function Header() {
  const { t, toggle } = useLang();
  const note = t.dir === "rtl" ? summary.year_note_ar : summary.year_note_en;

  return (
    <header className="masthead">
      <div className="wrap">
        <div className="masthead-top">
          <span className="eyebrow">{t.eyebrow}</span>
          <button className="toggle" onClick={toggle}>
            {t.toggle}
          </button>
        </div>

        <h1>{t.title}</h1>
        <p className="lede">{t.lede}</p>

        {summary.mixed_years && note && <p className="notice">{note}</p>}
      </div>
    </header>
  );
}