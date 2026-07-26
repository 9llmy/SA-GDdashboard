"use client";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";
import { useLang } from "@/lib/i18n";
import regions from "@/data/regions.json";

export default function UnemploymentChart() {
  const { lang, t } = useLang();
  const data = [...regions]
    .sort((a, b) => b.unemployment - a.unemployment)
    .map((r) => ({
      name: lang === "ar" ? r.region_ar : r.region_en,
      unemployment: r.unemployment,
    }));

  return (
    <section className="section container">
      <h2>{t.charts.unemploymentByRegion}</h2>
      <div className="card" style={{ height: 380 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e4e1d8" />
            <XAxis
              dataKey="name"
              angle={-40}
              textAnchor={lang === "ar" ? "start" : "end"}
              interval={0}
              tick={{ fontSize: 11 }}
              reversed={lang === "ar"}
            />
            <YAxis tick={{ fontSize: 12 }} orientation={lang === "ar" ? "right" : "left"} />
            <Tooltip />
            <Bar dataKey="unemployment" fill="#1f8a63" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
