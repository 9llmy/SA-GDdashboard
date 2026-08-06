"use client";
import { useLang } from "@/lib/i18n";
import BarList from "./BarList";
import universities from "@/data/universities.json";

// Some universities publish only part of their output. The caveat has to
// ride on the label itself, otherwise the bar reads as the whole picture.
const SCOPE_LABELS = {
  postgraduate_only: {
    ar: " (دراسات عليا)",
    en: " (postgrad only)",
  },
  women_only_partial_year: {
    ar: " (طالبات · سنة جزئية)",
    en: " (women · partial year)",
  },
};

export default function UniversitiesChart() {
  const { lang, t } = useLang();

  const items = [...universities]
    .sort((a, b) => b.graduates - a.graduates)
    .map((u) => {
      const scope = SCOPE_LABELS[u.scope];
      return {
        label:
          (lang === "ar" ? u.university_ar : u.university_en) +
          (scope ? scope[lang] : ""),
        value: u.graduates,
      };
    });

  return (
    <section className="section wrap">
      <h2>{t.universitiesTitle}</h2>
      <div className="panel">
        <BarList items={items} />
      </div>
    </section>
  );
}