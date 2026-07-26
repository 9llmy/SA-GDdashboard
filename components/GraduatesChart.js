"use client";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";
import { useLang } from "@/lib/i18n";
import graduates from "@/data/graduates.json";

export default function GraduatesChart() {
  const { lang, t } = useLang();
  const data = graduates.map((d) => ({
    name: lang === "ar" ? d.major_ar : d.major_en,
    graduates: d.graduates,
  }));

  return (
    <section className="section container">
      <h2>{t.charts.graduatesByMajor}</h2>
      <div className="card" style={{ height: 360 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 10, right: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e4e1d8" />
            <XAxis type="number" tick={{ fontSize: 12 }} />
            <YAxis
              type="category"
              dataKey="name"
              width={170}
              tick={{ fontSize: 12 }}
              reversed={lang === "ar"}
              orientation={lang === "ar" ? "right" : "left"}
            />
            <Tooltip />
            <Bar dataKey="graduates" fill="#0e5c43" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
