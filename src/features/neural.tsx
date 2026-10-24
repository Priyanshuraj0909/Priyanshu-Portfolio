import { Component, Suspense, lazy, useEffect, useRef, useState, type ReactNode } from "react";
import { useMotionPreferences } from "./motion";
const Scene = lazy(() => import("./neural-scene"));
function Fallback() { return <svg className="neural-fallback" viewBox="0 0 500 420" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth=".7">{Array.from({ length: 18 }, (_, i) => <g key={i}><ellipse cx="172" cy="210" rx={40 + i * 3} ry={35 + i * 6} transform={`rotate(${i * 6} 172 210)`} /><ellipse cx="328" cy="210" rx={40 + i * 3} ry={35 + i * 6} transform={`rotate(${-i * 6} 328 210)`} /></g>)}</g></svg>; }
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <Fallback /> : this.props.children; }
}
export function Neural() {
  const ref = useRef<HTMLElement>(null);
  const { paused, reduced } = useMotionPreferences();
  const [visible, setVisible] = useState(false);
  const [inView, setInView] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobile, setMobile] = useState(() => window.innerWidth < 760);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { setInView(entry.isIntersecting); if (entry.isIntersecting) setVisible(true); });
    if (ref.current) observer.observe(ref.current);
    const visibility = () => setHidden(document.hidden);
    const resize = () => setMobile(window.innerWidth < 760);
    document.addEventListener("visibilitychange", visibility);
    window.addEventListener("resize", resize);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", visibility); window.removeEventListener("resize", resize); };
  }, []);
  const active = !paused && !reduced && inView && !hidden;
  return <figure className="neural-figure" ref={ref} data-active={active}>
    <div className="neural-viewport">{visible && !reduced ? <SceneBoundary><Suspense fallback={<Fallback />}><Scene active={active} mobile={mobile} /></Suspense></SceneBoundary> : <Fallback />}<span className="neural-glow" aria-hidden="true" /></div>
    <div className="section-rail"><span>Neural core</span><span>01 / 06</span></div>
    <figcaption className="eyebrow">A connected neural field. Move your pointer to explore. Use the motion control to pause.</figcaption>
  </figure>;
}
