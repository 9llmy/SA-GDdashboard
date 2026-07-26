"use client";
import Header from "@/components/Header";
import KpiStrip from "@/components/KpiStrip";
import GraduatesChart from "@/components/GraduatesChart";
import UnemploymentChart from "@/components/UnemploymentChart";
import RegionTable from "@/components/RegionTable";
import { useLang } from "@/lib/i18n";

export default function Home() {
  const { t } = useLang();
  return (
    <main>
      <Header />
      <KpiStrip />
      <GraduatesChart />
      <UnemploymentChart />
      <RegionTable />
      <footer className="footer">
        <div className="container">{t.footer}</div>
      </footer>
    </main>
  );
}
