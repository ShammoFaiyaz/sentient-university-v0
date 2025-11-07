"use client";

import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/Card";
import { useRouter } from "next/navigation";
import { agentsForRole } from "@/mock/agents";
import { AgentTile } from "@/components/AgentTile";
import { StaffList } from "@/components/admin/StaffList";
import { RelevantAgentsStrip } from "@/components/agents/RelevantAgentsStrip";
import { Bot, Megaphone, Brain } from "lucide-react";
import { agents } from "@/mock/agents";

export default function AdminDashboard() {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold text-primary">Admin Dashboard</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card role="button" tabIndex={0} onClick={() => router.push("/admin/admissions")} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); router.push("/admin/admissions"); } }} className="cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
          <CardTitle>Admissions Snapshot</CardTitle>
          <ul className="list-inside list-disc text-sm text-neutral-dark/80">
            <li>Applicants: 1,248</li>
            <li>Shortlisted: 220</li>
          </ul>
        </Card>
        <Card role="button" tabIndex={0} onClick={() => router.push("/admin/enrollment")} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); router.push("/admin/enrollment"); } }} className="cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
          <CardTitle>Enrollment Capacity</CardTitle>
          <ul className="list-inside list-disc text-sm text-neutral-dark/80">
            <li>Sections &gt; 90%: 6</li>
            <li>Open seats: 312</li>
          </ul>
        </Card>
        <Card role="button" tabIndex={0} onClick={() => router.push("/admin/compliance")} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); router.push("/admin/compliance"); } }} className="cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
          <CardTitle>Compliance</CardTitle>
          <p className="text-sm text-neutral-dark/80">Accreditation report draft ready.</p>
        </Card>
      </div>
      <section className="mt-8">
        <h2 className="mb-1 font-medium">Featured Agents</h2>
        <p className="mb-2 text-xs text-muted">Transparent • Cites sources • Human override</p>
        <div className="grid gap-4 md:grid-cols-3">
          {agentsForRole("admin").slice(0,3).map((a) => (
            <AgentTile key={a.id} agent={a} />
          ))}
        </div>
      </section>
      <StaffList />
    </div>
  );
}


