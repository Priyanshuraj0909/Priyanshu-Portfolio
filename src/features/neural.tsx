import { Component, Suspense, lazy, useEffect, useRef, useState, type ReactNode } from "react";
import { useMotionPreferences, MotionToggle } from "./motion";
const Scene = lazy(() => import("./neural-scene"));
export interface SceneSignals { x: number; y: number; progress: number; section: number; engaged: number }
function Fallback() {
  return <div className="sphere-fallback" aria-hidden="true"><i /><i /><i /><span /></div>;
}
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <Fallback /> : this.props.children; }
}
export function Neural({ onReady, entering, controlsLocked = entering }: { onReady: () => void; entering: boolean; controlsLocked?: boolean }) {
  const { paused, reduced } = useMotionPreferences();
  const signals = useRef<SceneSignals>({x:0,y:0,progress:0,section:0,engaged:0});
  const [visible,setVisible]=useState(false);
  const [hidden,setHidden]=useState(() => document.hidden);
  const [mobile,setMobile]=useState(() => window.innerWidth < 760);
  const [section,setSection]=useState(0);
  const [engaged,setEngaged]=useState(false);
  const [expanded,setExpanded]=useState(false);
  useEffect(() => {
    const frame=requestAnimationFrame(()=>setVisible(true));
    let height=Math.max(1,document.documentElement.scrollHeight-innerHeight);
    let scrollFrame=0;
    const measure=()=>{height=Math.max(1,document.documentElement.scrollHeight-innerHeight);setMobile(innerWidth<760);};
    const scroll=()=>{if(scrollFrame)return;scrollFrame=requestAnimationFrame(()=>{signals.current.progress=Math.min(1,Math.max(0,scrollY/height));scrollFrame=0;});};
    const pointer=(event:PointerEvent)=>{if(event.pointerType==='touch')return;signals.current.x=event.clientX/innerWidth*2-1;signals.current.y=event.clientY/innerHeight*2-1;};
    const engage=(event:Event)=>{const target=event.target;const on=target instanceof Element && Boolean(target.closest('a,button,input,select'));signals.current.engaged=on?1:0;setEngaged(on);};
    const reset=()=>{signals.current.x=0;signals.current.y=0;signals.current.engaged=0;setEngaged(false);};
    const visibility=()=>setHidden(document.hidden);
    const ids=['about','vault','logs','live','terminal','contact'];
    const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){const index=ids.indexOf(entry.target.id);signals.current.section=index;setSection(index);}},{rootMargin:'-20% 0px -45% 0px'});
    ids.forEach(id=>{const element=document.getElementById(id);if(element)observer.observe(element);});
    const resize=new ResizeObserver(()=>{measure();scroll();});resize.observe(document.body);
    window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('resize',measure);window.addEventListener('pointermove',pointer,{passive:true});window.addEventListener('pointerover',engage);window.addEventListener('focusin',engage);window.addEventListener('focusout',reset);window.addEventListener('blur',reset);document.documentElement.addEventListener('pointerleave',reset);document.addEventListener('visibilitychange',visibility);
    scroll();
    return()=>{cancelAnimationFrame(frame);cancelAnimationFrame(scrollFrame);observer.disconnect();resize.disconnect();window.removeEventListener('scroll',scroll);window.removeEventListener('resize',measure);window.removeEventListener('pointermove',pointer);window.removeEventListener('pointerover',engage);window.removeEventListener('focusin',engage);window.removeEventListener('focusout',reset);window.removeEventListener('blur',reset);document.documentElement.removeEventListener('pointerleave',reset);document.removeEventListener('visibilitychange',visibility);};
  },[]);
  const active=!paused&&!reduced&&!hidden;
  return <>
    <div className="page-sculpture" data-active={active} data-section={section} data-engaged={engaged} data-entering={entering} aria-hidden="true">
      <div className="sculpture-halo" />
      {visible&&!reduced?<SceneBoundary><Suspense fallback={<Fallback />}><Scene active={active} mobile={mobile} entering={entering} expanded={expanded} signals={signals} onReady={onReady} /></Suspense></SceneBoundary>:<Fallback />}
    </div>
    <div className="scene-controls" aria-label="3D sculpture controls" inert={controlsLocked || undefined}><button className="core-control" onClick={()=>setExpanded(value=>!value)} aria-pressed={expanded} disabled={reduced}>{expanded?'Collapse sphere':'Expand sphere'} <span aria-hidden="true">{expanded?'−':'+'}</span></button><MotionToggle placement="footer" /></div>
  </>;
}
