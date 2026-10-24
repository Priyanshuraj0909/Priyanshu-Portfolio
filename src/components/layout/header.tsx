"use client";

import { useEffect, useState } from "react";
import { MotionToggle } from "@/features/motion";
import { Orbit } from "lucide-react";
import { navigation } from "@/content/navigation";
import { profile } from "@/content/profile";

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
        <Orbit size={22} strokeWidth={1.25} aria-hidden="true" />
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
      <MotionToggle />
    </header>
  );
}
