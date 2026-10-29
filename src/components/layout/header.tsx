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
  const update = () => {
   const threshold = window.innerHeight * .35;
   const sections = links.map(link => document.getElementById(link.id)).filter((element): element is HTMLElement => element !== null);
   const current = sections.filter(element => element.getBoundingClientRect().top <= threshold)
    .sort((a, b) => b.getBoundingClientRect().top - a.getBoundingClientRect().top)[0];
   setActive(current?.id ?? 'about');
  };
  const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
  update();
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); };
 }, []);
 return <header className="studio-header"><a className="studio-brand" href="#core" aria-label="Priyanshu Raj, home"><span className="header-mark-slot">{showMark && <BrandMark shared />}</span><span className="brand-wordmark">PRIYANSHU<span>RAJ / DEVELOPER</span></span></a><nav className="numbered-nav" aria-label="Main navigation">{links.map((link, index)=><a key={link.id} href={`#${link.id}`} onClick={() => setActive(link.id)} aria-current={active===link.id?'location':undefined}><span className="nav-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><span>{link.label}</span></a>)}</nav><div className="studio-header-actions"><a className="contact-pill" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a></div></header>;
}
