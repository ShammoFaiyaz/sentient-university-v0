"use client";

import * as React from "react";
import Link from "next/link";
import { Button, cn } from "@/components/ui/Button";

export type RelevantAgentItem = {
  icon: React.ReactNode;
  name: string;
  onClick?: () => void;
  href?: string;
};

export function RelevantAgentsStrip({ title = "Agents", agents }: { title?: string; agents: RelevantAgentItem[] }) {
  return (
    <section className="mt-2">
      {title && <div className="mb-2 text-xs text-muted">{title}</div>}
      <div className="flex flex-wrap items-center gap-2">
        {agents.map((a, idx) => (
          <div key={idx} className="rounded-full border border-line/60 bg-white pl-2 pr-1 py-1 shadow-elevation-sm">
            <div className="flex items-center gap-2">
              <span className="text-primary">{a.icon}</span>
              <span className="text-sm text-ink/90">{a.name}</span>
              {a.href ? (
                <Link
                  href={a.href}
                  target="_blank"
                  className={cn("rounded-full border border-primary/30 bg-primary/5 px-2 py-0.5 text-[11px] text-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary")}
                >
                  Open
                </Link>
              ) : (
                <Button size="sm" variant="ghost" className="rounded-full px-2 py-0.5 text-[11px]" onClick={a.onClick}>Open</Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


