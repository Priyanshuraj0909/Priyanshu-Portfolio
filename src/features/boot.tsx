import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useMotionPreferences } from "./motion";

const INTRO_KEY = "portfolio:intro-v5";
export function shouldIntroduce() {
  try {
    return (!location.hash || ["#about", "#core"].includes(location.hash)) && !sessionStorage.getItem(INTRO_KEY)
      && !matchMedia("(prefers-reduced-motion: reduce)").matches
      && localStorage.getItem("portfolio:motion-paused") !== "true";
  } catch { return false; }
}

export function Boot({ ready, revealing, onReveal, onComplete }: {
  ready: boolean; revealing: boolean; onReveal: () => void; onComplete: () => void;
}) {
  const skip = useRef<HTMLButtonElement>(null);
  const { reduced, paused } = useMotionPreferences();
  const [minimum, setMinimum] = useState(false);
  const [fonts, setFonts] = useState(false);
  useEffect(() => {
    let live = true;
    document.fonts.ready.then(() => { if (live) setFonts(true); });
    const timer = setTimeout(() => setMinimum(true), 1800);
    // Optional visuals must never prevent entry on slow or unsupported devices.
    const deadline = setTimeout(onReveal, 3600);
    return () => { live = false; clearTimeout(timer); clearTimeout(deadline); };
  }, [onReveal]);
  useEffect(() => {
    if (!revealing && ((minimum && fonts && ready) || reduced || paused)) {
      const frame = requestAnimationFrame(onReveal);
      return () => cancelAnimationFrame(frame);
    }
  }, [minimum, fonts, ready, reduced, paused, revealing, onReveal]);
  useEffect(() => {
    if (!revealing) return;
    try { sessionStorage.setItem(INTRO_KEY, "true"); } catch { /* Storage is optional. */ }
    const timer = setTimeout(onComplete, reduced || paused ? 0 : 1200);
    return () => clearTimeout(timer);
  }, [revealing, reduced, paused, onComplete]);
  useEffect(() => {
    skip.current?.focus({ preventScroll: true });
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") onReveal(); };
    window.addEventListener("keydown", escape);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", escape); };
  }, [onReveal]);
  const duration = reduced || paused ? 0 : 1.2;
  return <motion.div className="boot-loader" role="dialog" aria-modal="true" aria-label="Portfolio introduction"
    onKeyDown={event => {
      if (event.key === "Tab") { event.preventDefault(); skip.current?.focus(); }
    }} initial={false} animate={{ opacity: revealing ? 0 : 1 }} transition={{ duration, ease: [.22, 1, .36, 1] }}>
    <div className="boot-grid" aria-hidden="true" />
    <div className="boot-masthead"><span>PRIYANSHU RAJ<span className="boot-edition">PERSONAL PORTFOLIO</span></span><span className="boot-signal"><i />CONNECTING IDEAS</span></div>
    <div className="boot-coordinates" aria-hidden="true"><span>01 / THE LEARNING SPHERE</span><span>DATA → INTELLIGENCE → EXPERIENCE</span></div>
    <div className="boot-caption">
      <motion.p className="boot-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .6 }}>A LITTLE CURIOSITY. A WORLD OF POSSIBILITY.</motion.p>
      <div className="boot-title-mask"><motion.p className="boot-title" initial={{ y: "110%" }} animate={{ y: revealing ? "-110%" : 0 }} transition={{ duration: .8, ease: [.22, 1, .36, 1] }}>Ideas, taking <em>shape.</em></motion.p></div>
      <div className="boot-readiness" role="status"><span className="boot-track" aria-hidden="true"><motion.i initial={{ scaleX: 0 }} animate={{ scaleX: ready && fonts ? 1 : .65 }} transition={{ duration: ready && fonts ? .45 : 1.8, ease: "easeOut" }} /></span><span>{ready && fonts ? "Experience ready" : "Preparing the experience"}</span></div>
    </div>
    <div className="boot-bottom"><span>INTELLIGENCE, WITH INTENTION.<small>AI / ML & FULL-STACK DEVELOPMENT</small></span><button ref={skip} onClick={onReveal} aria-label="Skip introduction">Enter portfolio <span aria-hidden="true">↗</span></button></div>
  </motion.div>;
}
