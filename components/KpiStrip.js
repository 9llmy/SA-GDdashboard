"use client";
import { useLang } from "@/lib/i18n";
import summary from "@/data/summary.json";

export default function KpiStrip() {
  const { t, n } = useLang();

  const femaleShare =
    summary.gender.female && summary.gender.graduates_covered
      ? ((summary.gender.female / summary.gender.graduates_covered) * 100).toFixed(1) + "%"
      : "—";

  const items = [
    { value: n(summary.total_graduates), label: t.kpi.graduates },
    { value: n(summary.universities), label: t.kpi.universities },
    { value: t.of13(n(summary.regions_covered)), label: t.kpi.regions },
    { value: femaleShare, label: t.kpi.female },
  ];

  return (
    <div className="wrap">
      <div className="kpis">
        {items.map((item) => (
          <div className="kpi" key={item.label}>
            <div className="value">{item.value}</div>
            <div className="label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}