"use client";
import { useLang } from "@/lib/i18n";
import graduates from "@/data/graduates.json";
import regions from "@/data/regions.json";

export default function KpiStrip() {
  const { lang, t } = useLang();
  const totalGraduates = graduates.reduce((s, d) => s + d.graduates, 0);
  const avgUnemployment =
    regions.reduce((s, r) => s + r.unemployment, 0) / regions.length;

  const fmt = (n) => n.toLocaleString(lang === "ar" ? "ar-SA" : "en-US");

  const items = [
    { label: t.kpis.graduates, value: fmt(totalGraduates) },
    { label: t.kpis.unemployment, value: `${avgUnemployment.toFixed(1)}%` },
    { label: t.kpis.participation, value: "61.8%" },
    { label: t.kpis.regions, value: fmt(regions.length) },
  ];

  return (
    <div className="container kpi-strip">
      {items.map((item) => (
        <div className="kpi" key={item.label}>
          <div className="value">{item.value}</div>
          <div className="label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
