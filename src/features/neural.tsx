import { Component, Suspense, lazy, useEffect, useRef, useState, type ReactNode } from "react";
import { useMotionPreferences } from "./motion";
const Scene = lazy(() => import("./neural-scene"));
function Fallback() {
  return <div className="sculpture-fallback" aria-hidden="true"><span /><span /><span /></div>;
}
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
    <div className="neural-viewport">{visible && !reduced ? <SceneBoundary><Suspense fallback={<Fallback />}><Scene active={active} mobile={mobile} /></Suspense></SceneBoundary> : <Fallback />}</div>

    <figcaption className="eyebrow">A copper knot, shaped in code. Move your pointer to explore; pause motion in the header.</figcaption>
  </figure>;
}
