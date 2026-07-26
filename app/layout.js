import "./globals.css";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { LangProvider } from "@/lib/i18n";

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
});

export const metadata = {
  title: "Saudi Jobs & Education Dashboard",
  description:
    "Bilingual dashboard exploring graduates and labor market data from the Saudi Open Data Platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={plex.variable}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
