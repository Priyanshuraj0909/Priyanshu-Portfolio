import { Asterisk } from "lucide-react";
import { MotionToggle } from "@/features/motion";
export function Header() {
  return <header className="studio-header"><a className="studio-brand" href="#core" aria-label="Priyanshu Raj, home">pr<Asterisk size={32} color="#b34325" aria-hidden="true" /></a><nav aria-label="Main navigation"><a href="#vault">Work</a><a href="#about">About</a><a href="#live">Archive</a></nav><div className="studio-header-actions"><MotionToggle /><a className="contact-pill" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a></div></header>;
}
