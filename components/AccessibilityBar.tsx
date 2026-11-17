"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const minimum = 90;
const maximum = 150;
const step = 10;
const storageKey = "terapia-acessibilidade";
const buttonClass =
  "accessibility-button min-h-10 rounded-full border px-3 py-1 font-medium transition-colors aria-disabled:opacity-60";

export default function AccessibilityBar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [preferences, setPreferences] = useState({ contrast: false, fontSize: 100 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) ?? "null");
      if (saved) {
        const validSize = Number.isInteger(saved.fontSize) &&
          saved.fontSize >= minimum && saved.fontSize <= maximum &&
          saved.fontSize % step === 0;
        setPreferences({
          contrast: saved.contrast === true,
          fontSize: validSize ? saved.fontSize : 100,
        });
      }
    } catch {
      // Os controles também funcionam quando o armazenamento está indisponível.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const root = document.documentElement;
    root.toggleAttribute("data-high-contrast", preferences.contrast);
    root.style.fontSize = `${preferences.fontSize}%`;
    root.style.setProperty("--font-scale", String(preferences.fontSize / 100));
    root.toggleAttribute("data-large-text", preferences.fontSize > 100);

    try {
      localStorage.setItem(storageKey, JSON.stringify(preferences));
    } catch {
      // As preferências continuam aplicadas nesta página.
    }
  }, [preferences, ready]);

  const isDark = ready && resolvedTheme === "dark";
  const { contrast, fontSize } = preferences;

  function adjustFontSize(amount: number) {
    setPreferences((current) => ({
      ...current,
      fontSize: Math.min(maximum, Math.max(minimum, current.fontSize + amount)),
    }));
  }

  return (
    <div className="accessibility-bar">
      <div
        role="group"
        aria-labelledby="accessibility-label"
        className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-2 px-4 py-2 text-sm"
      >
        <span id="accessibility-label" className="shrink-0 font-semibold">Acessibilidade</span>
        <div className="ml-auto flex max-w-full flex-wrap items-center justify-end gap-2">
          <button type="button" className={buttonClass} aria-pressed={isDark}
            onClick={() => setTheme(isDark ? "light" : "dark")}>
            Modo escuro
          </button>
          <button type="button" className={buttonClass} aria-pressed={contrast}
            onClick={() => setPreferences((current) => ({ ...current, contrast: !current.contrast }))}>
            Alto contraste
          </button>
          <button type="button" className={buttonClass} aria-label="Diminuir fonte"
            aria-disabled={fontSize === minimum} onClick={() => adjustFontSize(-step)}>
            A−
          </button>
          <button type="button" className={buttonClass} aria-label="Aumentar fonte"
            aria-disabled={fontSize === maximum} onClick={() => adjustFontSize(step)}>
            A+
          </button>
          <output aria-label="Tamanho da fonte" className="px-1 tabular-nums">{fontSize}%</output>
        </div>
      </div>
    </div>
  );
}
