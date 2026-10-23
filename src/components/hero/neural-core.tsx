"use client";

import { useEffect, useRef, useState } from "react";

export function NeuralCore() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stopped = paused;
    try { stopped = paused || localStorage.getItem("portfolio:motion-paused") === "true"; } catch {}
    let visible = true;
    let frame = 0;
    let angle = 0;
    let width = 0;
    let height = 0;
    let pointerX = 0;
    let pointerY = 0;
    let scroll = window.scrollY;
    const draw = () => {
      context.clearRect(0, 0, width, height);
      const count = width < 400 ? 52 : 88;
      const radius = Math.min(width, height) * .34;
      const points = Array.from({ length: count }, (_, i) => {
        const y = 1 - (i / (count - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const phi = i * Math.PI * (3 - Math.sqrt(5)) + angle + pointerX * .35;
        const x = Math.cos(phi) * r;
        const z = Math.sin(phi) * r;
        return { x: width / 2 + x * radius, y: height / 2 + (y * Math.cos(pointerY * .3) - z * Math.sin(pointerY * .3)) * radius, z };
      });
      context.lineWidth = .6;
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const other = points[j];
          const distance = Math.hypot(point.x - other.x, point.y - other.y);
          if (distance < radius * .46 && Math.abs(point.z - other.z) < .7) {
            context.strokeStyle = `rgba(170,143,255,${(1 - distance / (radius * .46)) * .5})`;
            context.beginPath(); context.moveTo(point.x, point.y); context.lineTo(other.x, other.y); context.stroke();
          }
        }
        context.fillStyle = point.z > 0 ? "#9bdcf0" : "#aa8fff88";
        context.beginPath(); context.arc(point.x, point.y, point.z > 0 ? 1.8 : 1, 0, Math.PI * 2); context.fill();
      }
    };
    const animate = () => {
      frame = 0;
      if (!visible || document.hidden || reduced.matches || stopped) return;
      angle += .0025 + Math.min(scroll / 1000000, .002);
      draw();
      frame = requestAnimationFrame(animate);
    };
    const sync = () => {
      cancelAnimationFrame(frame); frame = 0;
      draw();
      if (visible && !document.hidden && !reduced.matches && !stopped) frame = requestAnimationFrame(animate);
    };
    const resize = new ResizeObserver(() => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width; height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0); sync();
    });
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    const move = (event: PointerEvent) => {
      if (reduced.matches || stopped || event.pointerType === "touch") return;
      const bounds = canvas.getBoundingClientRect();
      pointerX = (event.clientX - bounds.left) / bounds.width - .5;
      pointerY = (event.clientY - bounds.top) / bounds.height - .5;
    };
    const onScroll = () => { scroll = window.scrollY; };
    resize.observe(canvas); observer.observe(canvas);
    canvas.addEventListener("pointermove", move);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", sync); reduced.addEventListener("change", sync);
    return () => {
      cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect();
      canvas.removeEventListener("pointermove", move); window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", sync); reduced.removeEventListener("change", sync);
    };
  }, [paused]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try { if (localStorage.getItem("portfolio:motion-paused") === "true") setPaused(true); } catch {}
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  function toggleMotion() {
    const next = !paused;
    setPaused(next);
    try { localStorage.setItem("portfolio:motion-paused", String(next)); } catch {}
  }

  return (
    <figure className="neural-core">
      <div className="neural-heading"><span className="eyebrow">Neural core</span><button className="motion-control" type="button" aria-pressed={paused} onClick={toggleMotion}>{paused ? "Resume motion" : "Pause motion"}</button></div>
      <canvas ref={canvasRef} aria-hidden="true" />
      <figcaption className="eyebrow">Connected nodes represent exploration across AI, data and development.</figcaption>
      <p className="pointer-hint eyebrow" aria-hidden="true">Move to orbit · Scroll to unfold</p>
    </figure>
  );
}
