"use client";
import { useLang } from "@/lib/i18n";
import BarList from "./BarList";
import degrees from "@/data/degrees.json";
import summary from "@/data/summary.json";

export default function DegreesChart() {
  const { t, degree } = useLang();
  if (!degrees.length) return null;

  const withDegree = degrees.reduce((sum, d) => sum + d.graduates, 0);
  const items = degrees.map((d) => ({
    label: degree(d.degree_ar),
    value: d.graduates,
  }));

  return (
    <section className="section wrap">
      <h2>{t.degreesTitle}</h2>
      <p className="caveat">
        {t.degreeCaveat(Math.round((withDegree / summary.total_graduates) * 100))}
      </p>
      <div className="panel">
        <BarList items={items} alt />
      </div>
    </section>
  );
}