import { Suspense, useEffect, useRef, useState, type ReactNode } from "react";
export function Deferred({ children, label }: { children: ReactNode; label: string }) {
 const ref=useRef<HTMLDivElement>(null);
 const [ready,setReady]=useState(false);
 useEffect(()=>{const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setReady(true);observer.disconnect();}},{rootMargin:'350px'});if(ref.current)observer.observe(ref.current);return()=>observer.disconnect();},[]);
 const fallback=<div className="section-loading" role="status"><span aria-hidden="true" />Loading {label}…</div>;
 return <div ref={ref} className="deferred-section">{ready?<Suspense fallback={fallback}>{children}</Suspense>:fallback}</div>;
}
