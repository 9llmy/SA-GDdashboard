"use client";
import { useLang } from "@/lib/i18n";

export default function Header() {
  const { t, toggle } = useLang();
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <span className="brand">open.data.gov.sa</span>
          <button className="lang-toggle" onClick={toggle}>
            {t.toggle}
          </button>
        </div>
        <h1>{t.appTitle}</h1>
        <p className="tagline">{t.tagline}</p>
        <p className="source-note">{t.source}</p>
      </div>
    </header>
  );
}
