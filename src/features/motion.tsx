import { createContext, useContext, useState, type ReactNode } from "react";
import { MotionConfig, useReducedMotion, motion } from "motion/react";
import { Pause, Play } from "lucide-react";

const Preferences = createContext({ paused: false, reduced: false });
export const useMotionPreferences = () => useContext(Preferences);
export function MotionPreferences({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion() ?? false;
  const [paused, setPaused] = useState(() => { try { return localStorage.getItem("portfolio:motion-paused") === "true"; } catch { return false; } });
  function toggle() { setPaused(value => { try { localStorage.setItem("portfolio:motion-paused", String(!value)); } catch {} return !value; }); }
  return <Preferences.Provider value={{ paused, reduced }}><MotionConfig reducedMotion={paused ? "always" : "user"}>{children}<button className="motion-control global-motion" onClick={toggle} aria-pressed={paused} aria-label={paused ? "Resume motion" : "Pause motion"}>{paused ? <Play size={12} /> : <Pause size={12} />}{reduced ? "Reduced motion" : paused ? "Resume motion" : "Pause motion"}</button></MotionConfig></Preferences.Provider>;
}
export function Reveal({ children }: { children: ReactNode }) {
  const { paused, reduced } = useMotionPreferences();
  return <motion.div initial={paused || reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .08 }} transition={{ duration: paused || reduced ? 0 : .5 }}>{children}</motion.div>;
}
