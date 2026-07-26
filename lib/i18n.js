"use client";
import { createContext, useContext, useState } from "react";

const dictionaries = {
  en: {
    dir: "ltr",
    appTitle: "Saudi Jobs & Education Dashboard",
    tagline: "Which majors lead to jobs? Explore graduates and labor market data across the Kingdom's regions.",
    source: "Data source: Saudi Open Data Platform (open.data.gov.sa)",
    toggle: "العربية",
    kpis: {
      graduates: "Graduates (latest year)",
      unemployment: "Unemployment rate",
      participation: "Labor participation",
      regions: "Regions covered",
    },
    charts: {
      graduatesByMajor: "Graduates by major",
      unemploymentByRegion: "Unemployment rate by region (%)",
      regionTable: "Regional overview",
    },
    table: { region: "Region", graduates: "Graduates", unemployment: "Unemployment %" },
    footer: "Open-source project. Replace sample data with real datasets from open.data.gov.sa.",
  },
  ar: {
    dir: "rtl",
    appTitle: "لوحة الوظائف والتعليم في السعودية",
    tagline: "أي التخصصات تقود إلى وظائف؟ استكشف بيانات الخريجين وسوق العمل عبر مناطق المملكة.",
    source: "مصدر البيانات: منصة البيانات المفتوحة السعودية (open.data.gov.sa)",
    toggle: "English",
    kpis: {
      graduates: "الخريجون (آخر سنة)",
      unemployment: "معدل البطالة",
      participation: "المشاركة في سوق العمل",
      regions: "المناطق المشمولة",
    },
    charts: {
      graduatesByMajor: "الخريجون حسب التخصص",
      unemploymentByRegion: "معدل البطالة حسب المنطقة (٪)",
      regionTable: "نظرة إقليمية",
    },
    table: { region: "المنطقة", graduates: "الخريجون", unemployment: "البطالة ٪" },
    footer: "مشروع مفتوح المصدر. استبدل البيانات التجريبية ببيانات حقيقية من open.data.gov.sa.",
  },
};

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("ar");
  const t = dictionaries[lang];
  const toggle = () => setLang(lang === "ar" ? "en" : "ar");
  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      <div dir={t.dir} lang={lang}>{children}</div>
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
