"use client";
import { createContext, useContext, useState } from "react";

const dictionaries = {
  ar: {
    dir: "rtl",
    locale: "ar-SA",
    eyebrow: "بيانات مفتوحة · منصة البيانات المفتوحة السعودية",
    title: "خريجو الجامعات السعودية",
    lede: "ما الذي تنشره الجامعات السعودية فعلاً عن خريجيها؟ هذه اللوحة تجمع الملفات المنشورة كما هي — بما فيها الفجوات.",
    toggle: "English",

    coverageTitle: "تغطية البيانات",
    coverageLede: "كل مربع منطقة إدارية. المضيء يعني أن جامعة واحدة على الأقل نشرت بياناتها.",
    noData: "لا توجد بيانات منشورة",
    universitiesLabel: "جامعة",

    kpi: {
      graduates: "خريج",
      universities: "جامعة",
      regions: "منطقة مغطاة",
      female: "نسبة الإناث",
    },

    universitiesTitle: "الخريجون حسب الجامعة",
    degreesTitle: "الخريجون حسب الدرجة العلمية",
    genderTitle: "التوزيع حسب الجنس",
    female: "إناث",
    male: "ذكور",
    graduates: "خريج",

    of13: (n) => `${n} من 13 منطقة`,
    partial: (covered, total) =>
      `يشمل ${covered} جامعات من ${total} — الجامعات التي لم تنشر هذا البُعد غير محتسبة.`,
    degreeCaveat: (pct) =>
      `الدرجة العلمية منشورة لـ ${pct}٪ من الخريجين فقط؛ البقية غير مصنفة.`,

    footerNote: "المصدر: منصة البيانات المفتوحة السعودية. الأرقام كما نُشرت، دون تقدير أو استكمال.",
  },

  en: {
    dir: "ltr",
    locale: "en-US",
    eyebrow: "Open data · Saudi Open Data Platform",
    title: "Saudi University Graduates",
    lede: "What do Saudi universities actually publish about their graduates? This dashboard reads the published files as they are — gaps included.",
    toggle: "العربية",

    coverageTitle: "Data coverage",
    coverageLede: "Each square is an administrative region. Lit means at least one university has published.",
    noData: "No published data",
    universitiesLabel: "universities",

    kpi: {
      graduates: "graduates",
      universities: "universities",
      regions: "regions covered",
      female: "female share",
    },

    universitiesTitle: "Graduates by university",
    degreesTitle: "Graduates by degree level",
    genderTitle: "Gender split",
    female: "Female",
    male: "Male",
    graduates: "graduates",

    of13: (n) => `${n} of 13 regions`,
    partial: (covered, total) =>
      `Covers ${covered} of ${total} universities — those that did not publish this dimension are excluded.`,
    degreeCaveat: (pct) =>
      `Degree level is published for only ${pct}% of graduates; the rest are unclassified.`,

    footerNote: "Source: Saudi Open Data Platform. Figures as published — nothing estimated or filled in.",
  },
};

// أسماء الدرجات منشورة بالعربي فقط، فنضع الإنجليزية هنا
export const DEGREE_EN = {
  "بكالوريوس": "Bachelor's",
  "ماجستير": "Master's",
  "ماجستير تنفيذي": "Executive Master's",
  "دكتوراه": "Doctorate",
  "دبلوم متوسط": "Intermediate Diploma",
  "دبلوم مشارك": "Associate Diploma",
  "دبلوم عالي": "Higher Diploma",
  "دبلوم طبي": "Medical Diploma",
  "زمالة": "Fellowship",
};

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("ar");
  const t = dictionaries[lang];

  return (
    <LangContext.Provider
      value={{
        lang,
        t,
        toggle: () => setLang(lang === "ar" ? "en" : "ar"),
        n: (value) => Number(value).toLocaleString(t.locale),
        degree: (ar) => (lang === "ar" ? ar : DEGREE_EN[ar] || ar),
      }}
    >
      <div dir={t.dir} lang={lang}>
        {children}
      </div>
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}