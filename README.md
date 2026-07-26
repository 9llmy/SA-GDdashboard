<div align="center">

# 📊 Saudi Jobs & Education Dashboard

### Bilingual Open-Data Dashboard on Graduates & the Saudi Labor Market

<!-- Uncomment after deploying to Vercel:
[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-brightgreen?style=for-the-badge)](https://sa-jobs-education-dashboard.vercel.app)
-->

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Recharts](https://img.shields.io/badge/Recharts-2-22B5BF?logo=chartdotjs&logoColor=white)](https://recharts.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Open Data](https://img.shields.io/badge/Data-open.data.gov.sa-006C35)](https://open.data.gov.sa)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Which majors actually lead to jobs? A bilingual (Arabic / English) dashboard exploring graduate output and unemployment across all 13 Saudi regions.**

**لوحة تفاعلية ثنائية اللغة لاستكشاف بيانات الخريجين وسوق العمل عبر مناطق المملكة**

</div>

---

## 🌟 Overview

Saudi Jobs & Education Dashboard turns raw open-government data into a readable picture of the gap between what universities produce and what the labor market absorbs. It pairs **graduate counts by field of study** with **unemployment rates by region**, so the mismatch between education output and employment demand becomes visible at a glance.

The entire interface flips between **Arabic (RTL)** and **English (LTR)** with a single click — layout direction, chart axis orientation, and even numeral formatting (`61,200` ↔ `٦١٬٢٠٠`) all switch together.

Built as a **static site**: no server, no database. Data lives in versioned JSON files, which keeps the project auditable, free to host, and instantly reproducible.

---

## ✨ Features

- 🌍 **True Bilingual Support** — One toggle flips the full layout between Arabic RTL and English LTR
- 🔄 **RTL-Aware Charts** — Axis orientation and category order mirror correctly, which Recharts does not do out of the box
- 🔢 **Localized Numerals** — Arabic-Indic digits and separators via `Intl` locale formatting
- 📊 **Graduates by Field** — Horizontal bar chart across 7 major fields of study
- 🗺️ **Unemployment by Region** — All 13 administrative regions, sorted highest to lowest
- 📋 **Regional Overview Table** — Graduates and unemployment side by side, hover-highlighted
- 🎨 **Logical CSS Properties** — `padding-inline-start` over `padding-left`, so styling mirrors itself with zero duplicated rules
- ⚡ **Zero-Runtime Data Layer** — JSON imported at build time; no API calls, no loading states
- ♿ **Accessible Baseline** — Visible keyboard focus, responsive down to mobile, `prefers-reduced-motion` respected
- 🚀 **Deploy-Ready** — Static output, hostable free on Vercel or GitHub Pages

---

## 📊 Project Stats

| Metric | Value |
| --- | --- |
| 🗺️ Regions Covered | **13** (all administrative regions) |
| 🎓 Fields of Study | **7** |
| 🌍 Languages | **2** (AR / EN) |
| 📈 Visualizations | **2 charts + 1 table + 4 KPIs** |
| 📦 Runtime Dependencies | **4** (Next, React, React-DOM, Recharts) |
| 🗄️ Backend Services | **0** — fully static |

---

## 🏗️ Architecture

```
data/*.json  ──▶  LangProvider (React Context)
                        │  broadcasts { lang, t }
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
    Header         KpiStrip      Charts + Table
  (lang toggle)   (4 metrics)      (Recharts)
```

Language state lives in a single React Context. Every component subscribes with one `useLang()` call, so flipping the toggle re-renders the whole tree in the other language — no prop drilling, no page reload, no duplicated component trees.

---

## 🗂️ Project Structure

```
├── app/
│   ├── layout.js          # Root layout, IBM Plex Sans Arabic, provider mount
│   ├── page.js            # Page composition
│   └── globals.css        # Design tokens + logical properties
├── components/
│   ├── Header.js          # Title, tagline, language toggle
│   ├── KpiStrip.js        # Four headline metrics
│   ├── GraduatesChart.js  # Graduates by field of study
│   ├── UnemploymentChart.js
│   └── RegionTable.js
├── lib/
│   └── i18n.js            # AR/EN dictionaries + language context
└── data/
    ├── graduates.json     # Graduates by field
    └── regions.json       # Per-region graduates & unemployment
```

---

## 📂 Data Sources

All data originates from the [Saudi Open Data Platform](https://open.data.gov.sa).

| Dataset | Publisher | Used For |
| --- | --- | --- |
| University graduates by major | Ministry of Education | Graduates chart |
| Unemployment rate by region | GASTAT | Regional chart & table |
| Labor force survey | GASTAT | Participation KPI |

> ⚠️ **Note:** The JSON files currently shipped are structurally accurate **placeholders**. Replace them with the real published datasets before citing any figure from this dashboard.

**Refreshing the data:**

```bash
# 1. Download the CSV from open.data.gov.sa
# 2. Convert, preserving Arabic text
python -c "
import pandas as pd
df = pd.read_csv('source.csv', encoding='utf-8-sig')
df.to_json('data/regions.json', orient='records', indent=2, force_ascii=False)
"
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+

### 1. Clone the repository
```bash
git clone https://github.com/9llmy/sa-jobs-education-dashboard.git
cd sa-jobs-education-dashboard
```

### 2. Install and run
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

---

## 🗺️ Roadmap

- [ ] Replace placeholder JSON with published GASTAT and Ministry of Education datasets
- [ ] Year selector for multi-year trend comparison
- [ ] Choropleth map of the 13 regions
- [ ] Employment-rate-per-major derived metric (the real question this project asks)
- [ ] CSV export for every chart
- [ ] Deploy to Vercel

---

## 🎯 Vision 2030 Alignment

- 🌐 **Digital Transformation** — Turns published government data into a usable public tool
- 👨‍🎓 **Human Capacity Development** — Surfaces the gap between graduate output and labor demand
- 📖 **Open Government** — Demonstrates practical reuse of the National Open Data initiative

---

## 📜 License

Code released under the MIT License — see [LICENSE](LICENSE).

Data © respective Saudi government entities, published under the Saudi Open Data License. Attribute [open.data.gov.sa](https://open.data.gov.sa) when reusing it.

---

<div align="center">

**Made with ❤️ by [Suliman Saleh](https://github.com/9llmy)**

[📦 GitHub](https://github.com/9llmy/sa-jobs-education-dashboard) • [💼 LinkedIn](https://www.linkedin.com/in/9llmy) • [🗄️ Saudi Open Data](https://open.data.gov.sa)

</div>
