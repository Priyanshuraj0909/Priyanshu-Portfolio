"use client";

import { useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { runCommand, type TerminalContext, type TerminalLine } from "@/lib/terminal";

interface Entry { id: number; command: string; lines: TerminalLine[] }

export function PortfolioTerminal({ context }: { context: TerminalContext }) {
  const [input, setInput] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState<number | null>(null);
  const [announcement, setAnnouncement] = useState("");
  const draft = useRef("");
  const nextId = useRef(0);
  const output = useRef<HTMLDivElement>(null);
  function submit(event: FormEvent) {
    event.preventDefault();
    if (!input.trim()) return;
    const result = runCommand(input, context);
    if (result.clear) setShowWelcome(false);
    setEntries(previous => result.clear ? [] : [...previous, { id: nextId.current++, command: input.trim(), lines: result.lines }].slice(-50));
    setHistory(previous => [...previous, input.trim()].slice(-100));
    setCursor(null); setInput(""); draft.current = "";
    setAnnouncement(result.clear ? "Terminal cleared." : result.lines.map(line => line.text).join("\n"));
    requestAnimationFrame(() => { if (output.current) output.current.scrollTop = output.current.scrollHeight; });
  }
  function navigateHistory(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    if (!history.length) return;
    event.preventDefault();
    if (cursor === null) draft.current = input;
    const index = event.key === "ArrowUp" ? Math.max(0, (cursor ?? history.length) - 1) : Math.min(history.length, (cursor ?? history.length) + 1);
    setCursor(index === history.length ? null : index);
    setInput(index === history.length ? draft.current : history[index]);
  }
  return <div className="terminal-shell">
    <div className="terminal-bar"><span>priyanshu@nexus — /workspace</span><span>Local session</span></div>
    <p className="terminal-hint" id="terminal-hint">Explore the portfolio with help. Use ↑ / ↓ for command history. Tab reaches output links.</p>
    <div ref={output} className="terminal-output" role="region" aria-label="Terminal output" tabIndex={0}>
      {showWelcome && <p>Welcome. Type help to get started.</p>}
      {entries.map(entry => <div key={entry.id} className="terminal-entry"><p className="terminal-echo"><span aria-hidden="true">priyanshu@nexus:~$ </span>{entry.command}</p><ul>{entry.lines.map((line, index) => <li key={index}>{line.href ? <a href={line.href}>{line.text}</a> : line.text}</li>)}</ul></div>)}
    </div>
    <form onSubmit={submit} className="terminal-form">
      <label htmlFor="terminal-command"><span className="terminal-prompt" aria-hidden="true">priyanshu@nexus:~$</span><span className="sr-only">Terminal command</span></label>
      <input id="terminal-command" value={input} onChange={e => { setInput(e.target.value); setCursor(null); }} onKeyDown={navigateHistory} maxLength={200} autoComplete="off" autoCapitalize="none" spellCheck={false} aria-describedby="terminal-hint" placeholder="Type a command…" />
      <button type="submit">Run<span className="sr-only"> command</span></button>
    </form>
    <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">{announcement}</p>
  </div>;
}
