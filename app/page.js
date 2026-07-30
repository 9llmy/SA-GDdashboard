"use client";
import Header from "@/components/Header";
import CoverageGrid from "@/components/CoverageGrid";
import KpiStrip from "@/components/KpiStrip";
import UniversitiesChart from "@/components/UniversitiesChart";
import DegreesChart from "@/components/DegreesChart";
import GenderSplit from "@/components/GenderSplit";
import { useLang } from "@/lib/i18n";

export default function Home() {
  const { t } = useLang();
  return (
    <main>
      <Header />
      <CoverageGrid />
      <KpiStrip />
      <UniversitiesChart />
      <DegreesChart />
      <GenderSplit />
      <footer className="foot">
        <div className="wrap">
          {t.footerNote}{" "}
          <a href="https://open.data.gov.sa" target="_blank" rel="noreferrer">
            open.data.gov.sa
          </a>
        </div>
      </footer>
    </main>
  );
}