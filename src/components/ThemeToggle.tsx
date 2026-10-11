"use client";

import { useLayoutEffect, useState } from "react";

type Theme = "light" | "dark";

function readStoredTheme(): Theme {
  try {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  // Re-aplica el tema guardado: en desarrollo, StrictMode remonta y limpia
  // el atributo que puso el script inline en <head>; en producción es un no-op.
  useLayoutEffect(() => {
    const stored = readStoredTheme();
    document.documentElement.setAttribute("data-theme", stored);
    // Sincroniza con el valor leído del DOM/localStorage tras el remount de
    // Strict Mode (ver node_modules/next/dist/docs: preventing-flash-before-hydration).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(stored);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage no disponible: el tema solo cambia para esta carga.
    }
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={theme === "dark"}
      className="text-[13px] uppercase tracking-[0.14em] text-foreground hover:text-accent"
    >
      {theme === "dark" ? "Modo claro" : "Modo oscuro"}
    </button>
  );
}
