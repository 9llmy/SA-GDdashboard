"use client";
import { useLang } from "@/lib/i18n";
import regions from "@/data/regions.json";

export default function RegionTable() {
  const { lang, t } = useLang();
  const fmt = (n) => n.toLocaleString(lang === "ar" ? "ar-SA" : "en-US");

  return (
    <section className="section container">
      <h2>{t.charts.regionTable}</h2>
      <div className="card">
        <table>
          <thead>
            <tr>
              <th>{t.table.region}</th>
              <th>{t.table.graduates}</th>
              <th>{t.table.unemployment}</th>
            </tr>
          </thead>
          <tbody>
            {regions.map((r) => (
              <tr key={r.region_en}>
                <td>{lang === "ar" ? r.region_ar : r.region_en}</td>
                <td>{fmt(r.graduates)}</td>
                <td>{r.unemployment.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
