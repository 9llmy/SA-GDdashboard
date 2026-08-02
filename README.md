<div align="center">

# 🎓 Saudi University Graduates

### What Saudi universities actually publish about their graduates — gaps included

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Open Data](https://img.shields.io/badge/Data-open.data.gov.sa-046A38)](https://open.data.gov.sa)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

<sub>Data last updated: July 2026 · 6 universities loaded · work in progress</sub>

**A bilingual (Arabic/English) dashboard built from real graduate data published by Saudi universities — and honest about the regions that haven't published yet.**

**لوحة ثنائية اللغة مبنية على بيانات خريجين حقيقية من الجامعات السعودية — وصريحة بشأن المناطق التي لم تنشر بياناتها بعد**

</div>

---

## 🌟 Overview

Most dashboards show you the data that exists. This one also shows you the data that doesn't.

Saudi universities publish graduate figures on the [Saudi Open Data Platform](https://open.data.gov.sa), and every one of them publishes in a different shape — some one row per graduate, some pre-aggregated, some split across five files by degree level, some releasing the same graduates three times over. Turning them into one comparable dataset is the actual work of this project.

**This is an early stage.** Six universities are loaded so far, covering 4 of the Kingdom's 13 administrative regions. Rather than quietly presenting four regions as if they were the whole picture, the dashboard's opening element is a grid of all thirteen — four lit, nine dark.

---

## ✨ Features

- 🌍 **True bilingual support** — one toggle flips layout, text, and numerals (`46,359` ↔ `٤٦٬٣٥٩`)
- 🗺️ **Coverage-first design** — all 13 regions shown; absent data is visually distinct from a zero
- ⚠️ **Self-updating caveats** — "degree published for 67% of graduates" is computed, not hardcoded
- 📊 **Zero chart libraries** — CSS bars that mirror natively in RTL; ~4KB page weight
- 🔢 **Honest aggregation** — female share divides by covered graduates, not the total
- 🧩 **Sections hide themselves** when their dimension is missing entirely
- ⚡ **Static** — JSON imported at build time; no server, no loading states
- ♿ Keyboard focus, mobile-responsive, `prefers-reduced-motion` respected

---

## 📊 What's in the data

| Metric | Value |
| --- | --- |
| 🎓 Graduates | **46,359** |
| 🏛️ Universities loaded | **6** |
| 🗺️ Regions covered | **4 of 13** |
| 📅 Publication years | **2024–2026** (mixed) |
| 🚻 Gender available for | 5 of 6 universities |
| 🎖️ Degree level available for | 3 of 6 universities |
| 🌐 Nationality available for | 1 of 6 universities |

### Universities currently included

| University | Region | Graduates | Year |
| --- | --- | ---: | --- |
| King Saud University | Riyadh | 14,649 | 2025 |
| Imam Muhammad ibn Saud Islamic | Riyadh | 10,927 | 2026 |
| University of Hail | Hail | 6,976 | 2024 |
| Prince Sattam bin Abdulaziz | Riyadh | 5,888 | 2024 |
| University of Hafr Al-Batin | Eastern | 4,003 | 2025 |
| University of Jeddah | Makkah | 3,916 | 2026 |

> ⚠️ **Read the numbers carefully.** Figures combine publication years 2024–2026 and are not a single-year snapshot. Riyadh accounts for 68% of the total simply because three of the six universities loaded so far are there. This reflects the current stage of data collection, not the actual distribution of Saudi graduates.

---

## 📈 Coverage status

| | |
| --- | --- |
| **Currently loaded** | 6 universities · 4 of 13 regions |
| **Goal** | Every university publishing graduate data on open.data.gov.sa |
| **Blocker** | None — the parser handles four published formats; adding a university is a registry entry, not new code |

Universities are being added **region-first rather than by size**: a file from an uncovered region does more for the picture than another Riyadh institution. Priority is Asir, Qassim, Madinah, and the northern and southern regions, which have no representation yet.

The dashboard is designed to stay honest as this grows. Coverage figures, caveats, and the region grid are all computed from the data — as universities are added, the "4 of 13" and the partial-dimension warnings update themselves, and disappear entirely once coverage is complete.

---

## 🧹 Data cleaning notes

Every publisher needed different handling. Documented here because the cleaning *is* the project:

| Issue | Found in | Handling |
| --- | --- | --- |
| Hidden `العدد الإجمالي` total rows | 6 files | Detected and excluded — silently doubled totals otherwise |
| Same graduates published 3× (by major / gender / nationality) | Jeddah, Hafr Al-Batin | One view counted; the rest are duplicates |
| 346 trailing empty rows | PhD export | Dropped |
| Published total off by 3 | Prince Sattam | Row sum used; discrepancy logged |
| Degree written three ways (`بكالوريوس` / `البكالوريوس`) | Across universities | Canonical mapping |
| Alef variants splitting one label in two (`إدارة` / `ادارة`) | Hail | Normalized |
| Hijri years (1445, 1447) | 2 universities | Converted, original retained |
| Degree level listed as a "college" row | Prince Sattam | Excluded, amount reported |
| Dual-enrolled high-school students | Jeddah | Excluded — not university graduates |

**Nothing is estimated or imputed.** A university that didn't publish gender contributes `null`, not a guess.

### Published formats handled

| Shape | Description | Example |
| --- | --- | --- |
| `rows` | One row per graduate | Hail, King Saud |
| `agg` | Wide counts with merged headers | Prince Sattam |
| `long` | Tidy counts, one row per group | Imam Muhammad ibn Saud |
| `terms` | Split by term, with duplicate views | Jeddah, Hafr Al-Batin |

---

## 🏗️ Architecture

```
data/*.json  ──▶  LangProvider (React Context)
                        │  broadcasts { lang, t, n, degree }
        ┌───────────────┼───────────────┬──────────────┐
        ▼               ▼               ▼              ▼
    Header        CoverageGrid      KpiStrip        Charts
  (lang toggle)   (13 regions)     (4 metrics)     (BarList)
```

Language lives in one React Context. Every component subscribes with `useLang()`, so one toggle re-renders the tree in the other language — no prop drilling, no reload.

---

## 🗂️ Project structure

```
├── app/
│   ├── layout.js          # Root layout, IBM Plex Sans Arabic
│   ├── page.js            # Composition
│   └── globals.css        # Design tokens + logical properties
├── components/
│   ├── Header.js          # Title, language toggle, mixed-year notice
│   ├── CoverageGrid.js    # All 13 regions, lit and unlit
│   ├── KpiStrip.js        # Headline metrics
│   ├── BarList.js         # Shared CSS bar component
│   ├── UniversitiesChart.js
│   ├── DegreesChart.js
│   └── GenderSplit.js
├── lib/
│   └── i18n.js            # Dictionaries + language context
└── data/                  # Generated JSON
    ├── summary.json
    ├── universities.json
    ├── regions.json
    ├── degrees.json
    └── colleges.json
```

---

## 🚀 Getting started

Requires Node.js 18+.

```bash
git clone https://github.com/9llmy/saudi-graduates-dashboard.git
cd saudi-graduates-dashboard
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🗺️ Roadmap

- [ ] Load the remaining universities publishing on open.data.gov.sa
- [ ] Reach all 13 regions — Asir, Qassim, Madinah, Tabuk, Jazan, Najran, Al-Baha, Al-Jouf and Northern Borders outstanding
- [ ] Nationality breakdown — Hafr Al-Batin publishes 12 nationalities including 113 stateless graduates
- [ ] College-level view (`colleges.json` holds 100+ entries, currently unused)
- [ ] Year filter, once enough universities publish comparable years
- [ ] Deploy to Vercel

---

## 🎯 Vision 2030 alignment

- 🌐 **Digital transformation** — turns published government files into a usable public tool
- 👨‍🎓 **Human capacity development** — makes graduate output visible by field and degree level
- 📖 **Open government** — demonstrates practical reuse of the National Open Data initiative, including where publishing is still incomplete

---

## 📜 License

Code released under the MIT License — see [LICENSE](LICENSE).

Data © respective Saudi government entities, published under the Saudi Open Data License. Attribute [open.data.gov.sa](https://open.data.gov.sa) when reusing it.

---

<div align="center">

**Made with ❤️ by [Suliman Saleh](https://github.com/9llmy)**

[📦 GitHub](https://github.com/9llmy) • [💼 LinkedIn](https://www.linkedin.com/in/9llmy) • [🗄️ Saudi Open Data](https://open.data.gov.sa)

</div>