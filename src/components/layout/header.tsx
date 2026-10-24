"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/content/navigation";
import { profile } from "@/content/profile";

function PriyanshuMark() {
  return <svg className="site-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M10 41V7h13.5C31.3 7 36 11.2 36 18.5S31.3 30 23.5 30H10" />
    <path d="M23 30 38 41" />
  </svg>;
}

export function Header() {
  const [active, setActive] = useState<string>("core");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(entry.target.id);
      }
    }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
    for (const { id } of navigation) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <a className="site-brand" href="#core" aria-label={`${profile.name}, back to About`}>
        <PriyanshuMark />
        <span>{profile.name}</span>
      </a>
      <nav className="site-nav" aria-label="Section navigation">
        {navigation.map(({ id, number, label }) => (
          <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>
            <span className="nav-number" aria-hidden="true">{number}</span>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
