"use client";

import { useState } from "react";

type EventItem = { time: string; actor: string; action: string; why: string };

const demoEvents: EventItem[] = [
  { time: "09:12", actor: "Advisor Agent", action: "Recommended Course: PSYC204", why: "fills elective, no time conflict" },
  { time: "10:05", actor: "Registrar", action: "Resolved schedule conflict", why: "moved lab to Wed 3pm" },
  { time: "11:22", actor: "Mentor", action: "Suggested practice quiz", why: "confidence low on arrays" },
];

export function TransparencyLog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Transparency log"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 rounded-full bg-accent px-4 py-3 text-white shadow-md hover:bg-accent-dark"
      >
        AI
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/20 opacity-0 animate-fade-in" onClick={() => setOpen(false)} />
          <aside className="h-full w-[380px] max-w-[90%] translate-x-full animate-slide-in border-l border-neutral-medium bg-white p-4 shadow-xl">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-primary">Transparency Log</h3>
              <button onClick={() => setOpen(false)} className="text-sm text-neutral-dark/70 hover:text-primary">Close</button>
            </div>
            <ul className="space-y-3">
              {demoEvents.map((e, i) => (
                <li key={i} className="rounded-md border border-neutral-medium p-3 text-sm">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="font-medium">{e.actor}</span>
                    <span className="text-neutral-dark/60">{e.time}</span>
                  </div>
                  <div className="text-neutral-dark">{e.action}</div>
                  <div className="text-neutral-dark/70">Why: {e.why}</div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      )}
    </>
  );
}


