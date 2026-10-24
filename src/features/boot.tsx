import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export function Boot() {
  const [progress, setProgress] = useState<number | null>(null);
  const dismissed = useRef(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    try {
      if (reduced !== false || location.hash || document.hidden || sessionStorage.getItem("portfolio:boot-seen")) return;
      sessionStorage.setItem("portfolio:boot-seen", "true");
    } catch { return; }
    const start = performance.now();
    const timer = window.setInterval(() => {
      if (dismissed.current) return;
      const value = Math.min(100, Math.round((performance.now() - start) / 18));
      setProgress(value === 100 ? null : value);
      if (value === 100) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, [reduced]);
  const skip = () => { dismissed.current = true; setProgress(null); };
  if (progress === null) return null;
  return <motion.aside className="boot-screen" aria-label="Portfolio initialization" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <div className="boot-top eyebrow"><span>PR / Systems Nexus</span><span>Neural interface · Initializing</span></div>
    <div className="boot-orbit" aria-hidden="true"><div /><div /><div /><span>PR</span></div>
    <div className="boot-console"><p className="eyebrow">priyanshu@nexus:~$ <span>LINKING_</span></p><p>{progress < 34 ? "Mounting interface" : progress < 67 ? "Connecting neural field" : "Workspace ready"}<span>{progress}%</span></p><progress value={progress} max={100} aria-label="Initialization progress" /><p className="eyebrow">01 Interface · 02 Neural link · 03 Workspace</p></div>
    <button className="motion-control boot-skip" onClick={skip}>Skip Boot ↗</button>
  </motion.aside>;
}
