"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { Card, CardTitle } from "@/components/ui/Card";
import { Table, Th, Td } from "@/components/ui/Table";
import { candidates, programs, type Candidate } from "@/mock/admissions";
import { ExplainDrawer } from "@/components/admin/ExplainDrawer";
import { ExplainBadge } from "@/components/ExplainBadge";
import { FilterGroup } from "@/components/ui/FilterGroup";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

export default function AdminAdmissionsPage() {
  return (
    <Suspense fallback={null}>
      <AdminAdmissions />
    </Suspense>
  );
}

function AdminAdmissions() {
  const [program, setProgram] = useState<string>("All");
  const [minScore, setMinScore] = useState<number>(80);
  const [docs, setDocs] = useState<"all" | "complete" | "missing">("all");
  const [visa, setVisa] = useState<"any" | "required" | "verified">("any");
  const [fee, setFee] = useState<"any" | "yes" | "no">("any");
  const [q, setQ] = useState("");
  const [rangeHover, setRangeHover] = useState<boolean>(false);
  const [explain, setExplain] = useState<Candidate | null>(null);

  const policyMin = 80; // policy minimum threshold

  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();

  // Initialize from query params
  useEffect(() => {
    const sDocs = search.get("docs");
    const sVisa = search.get("visa");
    const sFee = search.get("fee");
    if (sDocs === "all" || sDocs === "complete" || sDocs === "missing") setDocs(sDocs);
    if (sVisa === "any" || sVisa === "required" || sVisa === "verified") setVisa(sVisa);
    if (sFee === "any" || sFee === "yes" || sFee === "no") setFee(sFee);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist to query params when filters change
  useEffect(() => {
    const params = new URLSearchParams(search.toString());
    params.set("docs", docs);
    params.set("visa", visa);
    params.set("fee", fee);
    router.replace(`${pathname}?${params.toString()}`);
  }, [docs, visa, fee, router, pathname, search]);

  const filtered = useMemo(() =>
    candidates.filter((c) =>
      (program === "All" || c.program === program) &&
      c.score >= minScore &&
      (docs === "all" || (docs === "missing" ? !!c.missingDocs : !c.missingDocs)) &&
      (visa === "any" || c.visa === visa) &&
      (fee === "any" || (fee === "yes" ? !!c.feeWaiver : !c.feeWaiver)) &&
      (q === "" || c.name.toLowerCase().includes(q.toLowerCase()))
    )
  , [program, minScore, docs, visa, fee, q]);

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
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={0}
              max={100}
              value={minScore}
              onChange={(e) => setMinScore(parseInt(e.target.value))}
              onMouseEnter={() => setRangeHover(true)}
              onMouseLeave={() => setRangeHover(false)}
              className="w-full"
              style={{ accentColor: `rgb(var(${rangeHover && minScore < policyMin ? "--color-accent-strong" : "--color-primary"}))` }}
            />
            <input
              type="number"
              min={0}
              max={100}
              value={minScore}
              onChange={(e) => {
                const next = Math.max(0, Math.min(100, Number(e.target.value)));
                setMinScore(next);
              }}
              className="w-16 rounded-md border border-neutral-medium p-2 text-sm"
            />
          </div>
        </label>
        <FilterGroup
          label="Docs"
          value={docs}
          onChange={setDocs}
          options={[
            { label: "All", value: "all" },
            { label: "Complete", value: "complete" },
            { label: "Missing", value: "missing" },
          ]}
        />
        <FilterGroup
          label="Visa"
          value={visa}
          onChange={setVisa}
          options={[
            { label: "Any", value: "any" },
            { label: "Required", value: "required" },
            { label: "Verified", value: "verified" },
          ]}
        />
        <FilterGroup
          label="Fee Waiver"
          value={fee}
          onChange={setFee}
          options={[
            { label: "Any", value: "any" },
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
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
                <Td>
                  <div className="flex items-center gap-2">
                    <span>{c.score}</span>
                    <ExplainBadge
                      dataUsed={`${c.program}, GPA ${c.gpa.toFixed(2)}, docs status`}
                      reason={c.why}
                      confidence={c.score > 90 ? "High" : c.score > 80 ? "Medium" : "Low"}
                      onClick={() => setExplain(c)}
                    />
                  </div>
                </Td>
                <Td className="text-sm text-neutral-dark/80">{c.why}</Td>
                <Td>{c.missingDocs ? "Missing" : "Complete"}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
        )}
      </Card>
      <ExplainDrawer open={!!explain} onClose={() => setExplain(null)} candidate={explain} />
    </div>
  );
}


