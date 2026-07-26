# Saudi Jobs & Education Dashboard | لوحة الوظائف والتعليم

A bilingual (Arabic/English) interactive dashboard exploring **graduates and labor market data** across Saudi Arabia's 13 regions, built with data from the [Saudi Open Data Platform](https://open.data.gov.sa).

لوحة تفاعلية ثنائية اللغة (عربي/إنجليزي) لاستكشاف بيانات الخريجين وسوق العمل عبر مناطق المملكة الثلاث عشرة، باستخدام بيانات منصة البيانات المفتوحة السعودية.

## ✨ Features

- 🇸🇦 **Full Arabic RTL / English LTR toggle** — one click flips the entire layout
- 📊 Interactive charts (Recharts): graduates by major, unemployment by region
- 📋 Regional overview table with localized number formatting
- ⚡ Built with Next.js 14 (App Router) and plain CSS — no heavy UI framework

## 🚀 Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 📦 Data

The JSON files in `/data` are **sample placeholder data** with realistic structure. Replace them with real datasets:

1. Visit [open.data.gov.sa](https://open.data.gov.sa) and search for:
   - "خريجي الجامعات" / university graduates (Ministry of Education)
   - "معدل البطالة" / unemployment rate (GASTAT — General Authority for Statistics)
   - "القوى العاملة" / labor force survey
2. Download as CSV/Excel
3. Convert to JSON matching the shape in `data/graduates.json` and `data/regions.json`
4. Update the KPI values in `components/KpiStrip.js` if needed

> ⚠️ Sample numbers in this repo are illustrative only — do not cite them.

## 🗺️ Roadmap

- [ ] Replace sample data with real GASTAT datasets
- [ ] Add year selector for time-series comparison
- [ ] Choropleth map of the 13 regions
- [ ] Deploy to Vercel

## 📄 License

MIT. Data © respective Saudi government entities, published under the Saudi Open Data License — attribute open.data.gov.sa when using it.
