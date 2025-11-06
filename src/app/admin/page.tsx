import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/Card";
import { agentsForRole } from "@/mock/agents";
import { AgentCard } from "@/components/agents/AgentCard";

export default function AdminDashboard() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold text-primary">Admin Dashboard</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card>
          <CardTitle>Admissions Snapshot</CardTitle>
          <ul className="list-inside list-disc text-sm text-neutral-dark/80">
            <li>Applicants: 1,248</li>
            <li>Shortlisted: 220</li>
          </ul>
        </Card>
        <Card>
          <CardTitle>Enrollment Capacity</CardTitle>
          <ul className="list-inside list-disc text-sm text-neutral-dark/80">
            <li>Sections &gt; 90%: 6</li>
            <li>Open seats: 312</li>
          </ul>
        </Card>
        <Card>
          <CardTitle>Compliance</CardTitle>
          <p className="text-sm text-neutral-dark/80">Accreditation report draft ready.</p>
        </Card>
      </div>
      <section className="mt-8">
        <h2 className="mb-2 font-medium">Featured Agents</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {agentsForRole("admin").slice(0,3).map((a) => (
            <AgentCard key={a.id} agent={a} variant="compact" />
          ))}
        </div>
      </section>
    </div>
  );
}


