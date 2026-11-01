import { BrandMark } from "@/components/brand/brand-mark";
import { useEffect, useState } from "react";
const links = [
 { id: 'about', label: 'About' },
 { id: 'vault', label: 'Projects' },
 { id: 'logs', label: 'Journey' },
 { id: 'live', label: 'Certs' },
 { id: 'terminal', label: 'Terminal' },
 { id: 'contact', label: 'Contact' },
];
export function Header({ showMark = true }: { showMark?: boolean }) {
 const [active, setActive] = useState('about');
 useEffect(() => {
  let frame = 0;
  let positions: {id: string; top: number}[] = [];
  const update = () => {
   const threshold = scrollY + innerHeight * .35;
   let current = 'about';
   for (const section of positions) if (section.top <= threshold) current = section.id;
   setActive(current);
  };
  const measure = () => {
   positions = links.flatMap(link => {
    const element = document.getElementById(link.id);
    return element ? [{id: link.id, top: element.getBoundingClientRect().top + scrollY}] : [];
   });
   update();
  };
  const schedule = () => {
   if (frame) return;
   frame = requestAnimationFrame(() => { frame = 0; update(); });
  };
  const resize = new ResizeObserver(measure);
  resize.observe(document.body);
  measure();
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', measure);
  document.fonts.addEventListener('loadingdone', measure);
  return () => { cancelAnimationFrame(frame); resize.disconnect(); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', measure); document.fonts.removeEventListener('loadingdone', measure); };
 }, []);
 return <header className="studio-header"><a className="studio-brand" href="#core" aria-label="Priyanshu Raj, home"><span className="header-mark-slot">{showMark && <BrandMark />}</span><span className="brand-wordmark">PRIYANSHU<span>RAJ / DEVELOPER</span></span></a><nav className="numbered-nav" aria-label="Main navigation">{links.map((link, index)=><a key={link.id} href={`#${link.id}`} onClick={() => setActive(link.id)} aria-current={active===link.id?'location':undefined}><span className="nav-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><span>{link.label}</span></a>)}</nav><div className="studio-header-actions"><a className="contact-pill" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a></div></header>;
}
