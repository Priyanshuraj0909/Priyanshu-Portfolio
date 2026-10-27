import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { BrandMark } from "@/components/brand/brand-mark";
import { useMotionPreferences } from "./motion";
export function shouldIntroduce() {
  try { return !location.hash && !sessionStorage.getItem('portfolio:intro-v4') && !matchMedia('(prefers-reduced-motion: reduce)').matches && localStorage.getItem('portfolio:motion-paused') !== 'true'; } catch { return false; }
}
export function Boot({ ready, revealing, onReveal, onComplete }: { ready: boolean; revealing: boolean; onReveal: () => void; onComplete: () => void }) {
  const skip = useRef<HTMLButtonElement>(null);
  const { reduced, paused } = useMotionPreferences();
  const [minimum, setMinimum] = useState(false);
  const [fonts, setFonts] = useState(false);
  const complete = useRef(false);
  useEffect(() => {
    let live = true;
    document.fonts.ready.then(() => { if (live) setFonts(true); });
    const timer = setTimeout(() => setMinimum(true), 1700);
    const deadline = setTimeout(onReveal, 3800);
    return () => { live = false; clearTimeout(timer); clearTimeout(deadline); };
  }, [onReveal]);
  useEffect(() => {
    if (!revealing && ((minimum && fonts && ready) || reduced || paused)) {
      const frame = requestAnimationFrame(onReveal);
      return () => cancelAnimationFrame(frame);
    }
  }, [minimum, fonts, ready, reduced, paused, revealing, onReveal]);
  useEffect(() => {
    skip.current?.focus({ preventScroll: true });
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') onReveal(); };
    window.addEventListener('keydown', escape);
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', escape); };
  }, [onReveal]);
  function finish() {
    if (!revealing || complete.current) return;
    complete.current = true;
    try { sessionStorage.setItem('portfolio:intro-v4', 'true'); } catch {}
    onComplete();
  }
  const duration = reduced || paused ? 0 : 1.05;
  return <motion.div className="cinema-loader" role="dialog" aria-modal="true" aria-label="Portfolio introduction" initial={{ opacity: 1 }} animate={{ opacity: revealing ? 0 : 1 }} transition={{ duration, ease: [.76,0,.24,1] }} onAnimationComplete={finish}>
    <motion.div className="cinema-curtain" initial={false} animate={{ scale: revealing ? 1.16 : 1 }} transition={{ duration, ease: [.76,0,.24,1] }} />
    <motion.div className="cinema-light" initial={{ x:'-100%', opacity:0 }} animate={{ x:'100%', opacity:[0,.4,0] }} transition={{duration:2,delay:.15,ease:'easeInOut'}} aria-hidden="true" />
    <motion.div className="cinema-meta" animate={{ opacity: revealing ? 0 : 1 }} transition={{ duration: .2 }}><span>PRIYANSHU RAJ</span><span>INDEPENDENT MIND. CONNECTED IDEAS.</span></motion.div>
    <div className="cinema-stage">
      <motion.svg className="cinema-frame" viewBox="0 0 480 240" fill="none" aria-hidden="true" initial={{opacity:0,scale:.94}} animate={{opacity:revealing?0:1,scale:revealing?1.08:1}} transition={{duration:.8}}>
        <path d="M36 80V36H80M400 36H444V80M444 160V204H400M80 204H36V160" stroke="#a0e6ce" strokeOpacity=".25" />
        <motion.path d="M0 120H150M330 120H480" stroke="#a0e6ce" strokeOpacity=".3" initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:1.1,delay:.2}} />
      </motion.svg>
      <div className="cinema-mark-slot">{!revealing && <BrandMark shared draw />}</div>
      <div className="cinema-title-mask"><motion.h1 initial={{y:'110%',opacity:0}} animate={{y:revealing?'-110%':0,opacity:revealing?0:1}} transition={{duration:.65,delay:revealing?0:.4,ease:[.22,1,.36,1]}}>PRIYANSHU RAJ</motion.h1></div>
      <motion.p className="cinema-subtitle" initial={{opacity:0,y:8}} animate={{opacity:revealing?0:1,y:0}} transition={{duration:.6,delay:revealing?0:.8}}>DATA <span>→</span> INTELLIGENCE <span>→</span> EXPERIENCE</motion.p>
      <motion.p className="cinema-status" role="status" animate={{ opacity: revealing ? 0 : 1 }} transition={{ duration: .2 }}>{ready && fonts ? 'Ready when you are.' : 'Preparing the experience…'}</motion.p>
    </div>
    <motion.div className="cinema-bottom" animate={{ opacity: revealing ? 0 : 1 }} transition={{ duration: .2 }}><span>DESIGNED TO CONNECT.</span><button ref={skip} onClick={onReveal} disabled={revealing}>Skip intro <span aria-hidden="true">↗</span></button></motion.div>
  </motion.div>;
}
