import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/layout/section-heading";
import { navigation } from "@/content/navigation";
import { profile } from "@/content/profile";

function RouteFocus() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
      else { window.scrollTo(0, 0); document.getElementById("main")?.focus({ preventScroll: true }); }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
function Home() { return <><Header /><main id="main" className="page-container" tabIndex={-1}>{navigation.map((n, i) => <section key={n.id} id={n.id} className={i ? "portfolio-section" : "intro-section"}><SectionHeading number={n.number} label={n.label} title={i ? n.label : profile.name} /></section>)}</main><Footer /></>; }
function NotFound() { return <main id="main" className="page-container dossier" tabIndex={-1}><h1 className="section-title">Signal not found.</h1><Link to="/">Return to portfolio</Link></main>; }
export function App() { return <BrowserRouter><div className="site-atmosphere" aria-hidden="true" /><a className="skip-link" href="#main">Skip to content</a><RouteFocus /><Routes><Route path="/" element={<Home />} /><Route path="*" element={<NotFound />} /></Routes></BrowserRouter>; }
