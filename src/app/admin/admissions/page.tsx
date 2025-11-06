"use client";

import { useMemo, useState } from "react";
import { Card, CardTitle } from "@/components/ui/Card";
import { Table, Th, Td } from "@/components/ui/Table";
import { Tooltip } from "@/components/ui/Tooltip";
import { candidates, programs } from "@/mock/admissions";

export default function AdminAdmissions() {
  const [program, setProgram] = useState<string>("All");
  const [minScore, setMinScore] = useState<number>(80);
  const [missingOnly, setMissingOnly] = useState<boolean>(false);
  const [q, setQ] = useState("");

  const filtered = useMemo(() =>
    candidates.filter((c) =>
      (program === "All" || c.program === program) &&
      c.score >= minScore &&
      (!missingOnly || c.missingDocs) &&
      (q === "" || c.name.toLowerCase().includes(q.toLowerCase()))
    )
  , [program, minScore, missingOnly, q]);

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold text-primary">Admissions</h1>

      <div className="mt-4 grid gap-3 md:grid-cols-4">
        <label className="text-sm">
          <div className="mb-1 text-neutral-dark/70">Program</div>
          <select value={program} onChange={(e) => setProgram(e.target.value)} className="w-full rounded-md border border-neutral-medium p-2 text-sm">
            <option>All</option>
            {programs.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <div className="mb-1 text-neutral-dark/70">Min score ({minScore})</div>
          <input type="range" min={0} max={100} value={minScore} onChange={(e) => setMinScore(parseInt(e.target.value))} className="w-full" />
        </label>
        <label className="mt-6 flex items-center gap-2 text-sm md:mt-0">
          <input type="checkbox" checked={missingOnly} onChange={(e) => setMissingOnly(e.target.checked)} />
          Missing documents only
        </label>
        <label className="text-sm">
          <div className="mb-1 text-neutral-dark/70">Search</div>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Name…" className="w-full rounded-md border border-neutral-medium p-2 text-sm" />
        </label>
      </div>

      <Card className="mt-6">
        <CardTitle>Shortlist ({filtered.length})</CardTitle>
        {filtered.length === 0 ? (
          <p className="text-sm text-neutral-dark/70">No candidates match the current filters.</p>
        ) : (
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Program</Th>
              <Th>GPA</Th>
              <Th>Score</Th>
              <Th>Why</Th>
              <Th>Docs</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="odd:bg-neutral-light/40">
                <Td>{c.name}</Td>
                <Td>{c.program}</Td>
                <Td>{c.gpa.toFixed(2)}</Td>
                <Td>{c.score}</Td>
                <Td>
                  <Tooltip label={c.why} />
                </Td>
                <Td>{c.missingDocs ? "Missing" : "Complete"}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
        )}
      </Card>
    </div>
  );
}


