"use client";

import * as React from "react";
import type { Candidate } from "@/mock/admissions";

type Section = { title: string; items: string[] };

export function ExplainDrawer({ open, onClose, candidate, sections, heading }: { open: boolean; onClose: () => void; candidate?: Candidate | null; sections?: Section[]; heading?: string }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-ink/40" onClick={onClose} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto border-l border-line/60 bg-white p-5 shadow-elevation-md dark:bg-slate-900">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-semibold tracking-[-0.01em]">{heading ?? (candidate ? `Explain ranking for ${candidate.name}` : "Explanation")}</h2>
          <button onClick={onClose} className="rounded-control border border-line px-2 py-1 text-sm hover:bg-primary/5">Close</button>
        </div>

        <div className="mt-4 space-y-4 text-sm">
          {candidate && (
            <>
              <section>
                <div className="mb-1 font-medium text-ink">Model inputs</div>
                <ul className="list-inside list-disc text-muted">
                  <li>Program: {candidate.program}</li>
                  <li>GPA: {candidate.gpa.toFixed(2)}</li>
                  <li>Score: {candidate.score}</li>
                  <li>Why: {candidate.why}</li>
                </ul>
              </section>

              <section>
                <div className="mb-1 font-medium text-ink">Fairness indicators</div>
                <ul className="list-inside list-disc text-muted">
                  <li>No sensitive attributes used in ranking</li>
                  <li>Calibration within ±2% across cohorts (demo)</li>
                  <li>Human-in-the-loop review enabled</li>
                </ul>
              </section>

              <section>
                <div className="mb-1 font-medium text-ink">Last run</div>
                <div className="text-muted">3 minutes ago • v0.9 policy</div>
              </section>
            </>
          )}

          {!candidate && sections && sections.length > 0 && (
            sections.map((s, idx) => (
              <section key={idx}>
                <div className="mb-1 font-medium text-ink">{s.title}</div>
                <ul className="list-inside list-disc text-muted">
                  {s.items.map((it, i) => (<li key={i}>{it}</li>))}
                </ul>
              </section>
            ))
          )}
        </div>
      </aside>
    </div>
  );
}



