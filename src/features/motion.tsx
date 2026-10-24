import { createContext, useContext, useState, type ReactNode } from "react";
import { MotionConfig, useReducedMotion, motion } from "motion/react";
import { Pause, Play } from "lucide-react";

interface PreferencesValue { paused: boolean; reduced: boolean; toggle: () => void }
const Preferences = createContext<PreferencesValue | null>(null);
export const useMotionPreferences = () => useContext(Preferences) ?? { paused: false, reduced: false, toggle: () => {} };
export function MotionPreferences({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion() ?? false;
  const [paused, setPaused] = useState(() => { try { return localStorage.getItem("portfolio:motion-paused") === "true"; } catch { return false; } });
  function toggle() { setPaused(value => { try { localStorage.setItem("portfolio:motion-paused", String(!value)); } catch {} return !value; }); }
  return <Preferences.Provider value={{ paused, reduced, toggle }}><MotionConfig reducedMotion={paused ? "always" : "user"}>{children}</MotionConfig></Preferences.Provider>;
}
export function MotionToggle({ placement = "header" }: { placement?: "header" | "footer" }) {
  const preferences = useContext(Preferences);
  if (!preferences) return null;
  const { paused, reduced, toggle } = preferences;
  const label = reduced ? "Reduced motion" : paused ? "Resume motion" : "Pause motion";
  return <button className={`motion-control ${placement}-motion`} onClick={toggle} aria-pressed={paused} aria-label={label}>{paused ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}<span className="motion-label">{label}</span></button>;
}
export function Reveal({ children }: { children: ReactNode }) {
  const { paused, reduced } = useMotionPreferences();
  return <motion.div initial={paused || reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .08 }} transition={{ duration: paused || reduced ? 0 : .5 }}>{children}</motion.div>;
}
