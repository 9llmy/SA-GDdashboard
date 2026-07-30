"use client";
import { useLang } from "@/lib/i18n";
import regions from "@/data/regions.json";

export default function CoverageGrid() {
  const { lang, t, n } = useLang();

  return (
    <section className="wrap">
      <div className="coverage">
        <h2>{t.coverageTitle}</h2>
        <p className="sub">{t.coverageLede}</p>

        <div className="tiles">
          {regions.map((r) => (
            <div key={r.region_key} className={r.has_data ? "tile lit" : "tile"}>
              <span className="name">
                {lang === "ar" ? r.region_ar : r.region_en}
              </span>

              {r.has_data ? (
                <span>
                  <span className="figure">{n(r.graduates)}</span>
                  <span className="meta">
                    {" "}· {n(r.universities)} {t.universitiesLabel}
                  </span>
                </span>
              ) : (
                <span className="meta">{t.noData}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}