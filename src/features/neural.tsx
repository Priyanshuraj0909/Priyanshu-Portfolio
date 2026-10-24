import { Component, Suspense, lazy, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { neuralGeometry } from "./neural-geometry";
import { useMotionPreferences } from "./motion";
const Scene = lazy(() => import("./neural-scene"));
function Fallback() {
  const graph = useMemo(() => neuralGeometry(true), []);
  return <svg className="neural-fallback" viewBox="0 0 500 420" fill="none" aria-hidden="true"><g transform="translate(250 190) scale(145)"><ellipse rx="1.35" ry="1.13" stroke="currentColor" strokeWidth=".003" opacity=".4" /><g stroke="currentColor" strokeWidth=".004" opacity=".5">{graph.links.map(([a, b], i) => <line key={i} x1={graph.nodes[a][0]} y1={-graph.nodes[a][1]} x2={graph.nodes[b][0]} y2={-graph.nodes[b][1]} />)}</g><g fill="#99eaff">{graph.nodes.map(([x, y], i) => <circle key={i} cx={x} cy={-y} r=".008" />)}</g><circle cy=".3" r=".035" fill="#b7eeff" /></g></svg>;
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
    <div className="neural-viewport">{visible && !reduced ? <SceneBoundary><Suspense fallback={<Fallback />}><Scene active={active} mobile={mobile} /></Suspense></SceneBoundary> : <Fallback />}<span className="neural-glow" aria-hidden="true" /></div>
    <div className="section-rail"><span>Neural core</span><span>01 / 06</span></div>
    <figcaption className="eyebrow">A connected neural field. Move your pointer to explore. Use the motion control to pause.</figcaption>
  </figure>;
}
