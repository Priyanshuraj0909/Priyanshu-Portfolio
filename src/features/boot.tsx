import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useMotionPreferences } from "./motion";
export function shouldIntroduce() {
  try { return !location.hash && !sessionStorage.getItem("portfolio:intro-v3") && !matchMedia('(prefers-reduced-motion: reduce)').matches && localStorage.getItem('portfolio:motion-paused') !== 'true'; } catch { return false; }
}
export function Boot({ ready, onComplete }: { ready: boolean; onComplete: () => void }) {
  const skip = useRef<HTMLButtonElement>(null);
  const { reduced, paused } = useMotionPreferences();
  const [minimum, setMinimum] = useState(false);
  const [fonts, setFonts] = useState(false);
  const [leaving, setLeaving] = useState(false);
  useEffect(() => {
    let live = true;
    document.fonts.ready.then(() => { if (live) setFonts(true); });
    const timer = setTimeout(() => setMinimum(true), 850);
    // The introduction never waits indefinitely for a GPU or network response.
    const deadline = setTimeout(() => setLeaving(true), 2600);
    return () => { live = false; clearTimeout(timer); clearTimeout(deadline); };
  }, []);
  useEffect(() => {
    if ((minimum && fonts && ready) || reduced || paused) {
      const frame = requestAnimationFrame(() => setLeaving(true));
      return () => cancelAnimationFrame(frame);
    }
  }, [minimum, fonts, ready, reduced, paused]);
  useEffect(() => {
    skip.current?.focus({ preventScroll: true });
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') setLeaving(true); };
    window.addEventListener('keydown', escape);
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', escape); };
  }, []);
  function complete() { try { sessionStorage.setItem('portfolio:intro-v3', 'true'); } catch {} onComplete(); }
  return <AnimatePresence onExitComplete={complete}>{!leaving && <motion.div className="intro-loader" key="intro" initial={{opacity:1}} exit={{opacity:0, y:reduced || paused ? 0:-24}} transition={{duration:reduced || paused ? 0:.65, ease:[.22,1,.36,1]}}>
    <div className="loader-top"><span>PRIYANSHU RAJ</span><span>AI / ML · FULL STACK</span></div>
    <div className="loader-center"><div className="loader-network" aria-hidden="true"><i /><i /><i /><span>PR</span></div><p>BRINGING IDEAS INTO FOCUS<span aria-hidden="true">…</span></p><span className="loader-status" role="status">{ready && fonts ? 'Ready to explore' : 'Preparing your experience'}</span></div>
    <div className="loader-bottom"><span>FROM DATA TO SOMETHING USEFUL.</span><button ref={skip} onClick={() => setLeaving(true)}>Skip intro ↗</button></div>
  </motion.div>}</AnimatePresence>;
}
