"use client";

import { useEffect, useRef, useState } from "react";

export function BootSequence() {
  const dismissed = useRef(false);
  const [stage, setStage] = useState(-1);
  useEffect(() => {
    try {
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
      if (matchMedia("(prefers-reduced-motion: reduce)").matches || location.hash || scrollY >= 24 || document.hidden || navigation?.type === "back_forward" || sessionStorage.getItem("portfolio:intro-seen") || localStorage.getItem("portfolio:motion-paused") === "true") return;
      sessionStorage.setItem("portfolio:intro-seen", "true");
    } catch { return; }
    const timers = [0, 650, 1300, 1950].map((delay, index) => window.setTimeout(() => { if (!dismissed.current) setStage(index === 3 ? -1 : index); }, delay));
    return () => timers.forEach(clearTimeout);
  }, []);
  if (stage < 0) return null;
  return <div className="boot-status" role="region" aria-label="Portfolio initialization"><span className="eyebrow" role="status">{["Initializing interface", "Connecting neural field", "Workspace ready"][stage]}</span><button type="button" className="motion-control" onClick={() => { dismissed.current = true; setStage(-1); }}>Skip boot</button></div>;
}
