"use client";
import { useLang } from "@/lib/i18n";
import BarList from "./BarList";
import universities from "@/data/universities.json";

export default function UniversitiesChart() {
  const { lang, t } = useLang();

  const items = [...universities]
  .sort((a, b) => b.graduates - a.graduates)
  .map((u) => ({
    label:
      (lang === "ar" ? u.university_ar : u.university_en) +
      (u.scope === "postgraduate_only"
        ? lang === "ar" ? " (دراسات عليا)" : " (postgrad only)"
        : ""),
    value: u.graduates,
  }));

  return (
    <section className="section wrap">
      <h2>{t.universitiesTitle}</h2>
      <div className="panel">
        <BarList items={items} />
      </div>
    </section>
  );
}