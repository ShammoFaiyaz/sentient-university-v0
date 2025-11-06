"use client";

import * as React from "react";

type Density = "comfortable" | "compact";

type Ctx = { density: Density; setDensity: (d: Density) => void };

const DensityContext = React.createContext<Ctx | null>(null);

export function DensityProvider({ children }: { children: React.ReactNode }) {
  const [density, setDensity] = React.useState<Density>("comfortable");

  // Load persisted
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("su.uiDensity");
      if (stored === "comfortable" || stored === "compact") setDensity(stored);
    } catch {}
  }, []);

  // Persist + apply class on body
  React.useEffect(() => {
    try { localStorage.setItem("su.uiDensity", density); } catch {}
    const cls = "density-compact";
    const el = document.body;
    if (density === "compact") el.classList.add(cls); else el.classList.remove(cls);
  }, [density]);

  const value = React.useMemo(() => ({ density, setDensity }), [density]);
  return <DensityContext.Provider value={value}>{children}</DensityContext.Provider>;
}

export function useDensity() {
  const ctx = React.useContext(DensityContext);
  if (!ctx) throw new Error("useDensity must be used within DensityProvider");
  return ctx;
}


