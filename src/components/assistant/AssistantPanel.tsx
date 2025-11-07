"use client";

import * as React from "react";
import { Bot, X } from "lucide-react";

export function AssistantPanel() {
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState("");
  const [messages, setMessages] = React.useState<Array<{ role: "user" | "assistant"; content: string }>>([
    { role: "assistant", content: "Hi! I’m your Sentient Assistant. Ask about courses, schedules, or actions." },
  ]);

  function send() {
    if (!q.trim()) return;
    setMessages((m) => [...m, { role: "user", content: q.trim() }, { role: "assistant", content: "(Demo) I’ve logged your request." }]);
    setQ("");
  }

  return (
    <>
      <button
        aria-label="Open Assistant"
        onClick={() => setOpen(true)}
        className="fixed right-3 top-1/2 z-40 -translate-y-1/2 rounded-full border border-line/60 bg-white p-3 shadow-[0_8px_18px_rgba(0,0,0,0.12)] hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <Bot className="h-5 w-5 text-ink" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-ink/30" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-[min(92vw,380px)] transform bg-white shadow-elevation-md dark:bg-slate-900 animate-slide-in">
            <div className="flex items-center justify-between border-b border-line/60 px-4 py-3">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <div className="font-medium">Assistant</div>
              </div>
              <button aria-label="Close" onClick={() => setOpen(false)} className="rounded-control px-2 py-1 text-sm hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex h-[calc(100%-112px)] flex-col gap-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "assistant" ? "self-start rounded-xl bg-neutral-light/60 px-3 py-2 text-sm" : "self-end rounded-xl bg-primary/10 px-3 py-2 text-sm"}>
                  {m.content}
                </div>
              ))}
            </div>
            <div className="border-t border-line/60 p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send();
                }}
                className="flex items-center gap-2"
              >
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Ask something…"
                  className="flex-1 rounded-md border border-line/60 p-2 text-sm"
                />
                <button type="submit" className="rounded-md bg-primary/90 px-3 py-2 text-sm font-medium text-white hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">Send</button>
              </form>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}


