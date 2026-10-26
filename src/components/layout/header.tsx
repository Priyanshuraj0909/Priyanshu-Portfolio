import { Asterisk } from "lucide-react";
import { useEffect, useState } from "react";
const links = [{id:'vault',label:'Work'},{id:'about',label:'About'},{id:'live',label:'Archive'}];
export function Header() {
 const [active,setActive]=useState('core');
 useEffect(()=>{const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting)setActive(entry.target.id);},{rootMargin:'-10% 0px -55% 0px'});for(const id of ['core',...links.map(l=>l.id),'contact']){const element=document.getElementById(id);if(element)observer.observe(element);}return()=>observer.disconnect();},[]);
 return <header className="studio-header"><a className="studio-brand" href="#core" aria-label="Priyanshu Raj, home">pr<Asterisk size={32} aria-hidden="true" /></a><nav aria-label="Main navigation">{links.map(link=><a key={link.id} href={`#${link.id}`} aria-current={active===link.id?'location':undefined}>{link.label}</a>)}</nav><div className="studio-header-actions"><a className="contact-pill" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a></div></header>;
}
