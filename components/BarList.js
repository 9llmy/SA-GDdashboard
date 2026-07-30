"use client";
import { useLang } from "@/lib/i18n";

/**
 * أعمدة بـ CSS خالص بدل مكتبة رسوم.
 * السبب: البيانات قائمة مرتبة بسيطة، والأعمدة اليدوية تنقلب
 * تلقائياً في RTL بدون تعديل المحاور.
 */
export default function BarList({ items, alt = false }) {
  const { n } = useLang();
  const max = Math.max(...items.map((i) => i.value), 1);

  return (
    <div>
      {items.map((item) => (
        <div className="bar-row" key={item.label}>
          <span className="bar-label">{item.label}</span>
          <span className="bar-track">
            <span
              className={alt ? "bar-fill alt" : "bar-fill"}
              style={{ width: `${(item.value / max) * 100}%` }}
            />
          </span>
          <span className="bar-value">{n(item.value)}</span>
        </div>
      ))}
    </div>
  );
}