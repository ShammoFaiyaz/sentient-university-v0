import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { agentsForRole } from "@/mock/agents";
import { AgentCard } from "@/components/agents/AgentCard";

export default function StudentDashboard() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold text-primary">Student Dashboard</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card>
          <CardTitle>Morning Digest</CardTitle>
          <ul className="list-inside list-disc text-sm text-neutral-dark/80">
            <li>PSYC204 quiz today at 3:00 PM</li>
            <li>Project checkpoint due Friday</li>
            <li>Advisor hours available tomorrow</li>
          </ul>
        </Card>
        <Card>
          <CardTitle>Continue Course</CardTitle>
          <p className="text-sm text-neutral-dark/80">Resume: Algorithms → Lesson 3: Greedy Strategy.</p>
          <Button className="mt-3">Continue</Button>
        </Card>
        <Card>
          <CardTitle>Upcoming Deadlines</CardTitle>
          <ul className="list-inside list-disc text-sm text-neutral-dark/80">
            <li>Ethics essay draft — Nov 12</li>
            <li>Data structures lab — Nov 14</li>
          </ul>
        </Card>
      </div>
      <section className="mt-8">
        <h2 className="mb-2 font-medium">Featured Agents</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {agentsForRole("student").slice(0,3).map((a) => (
            <AgentCard key={a.id} agent={a} variant="compact" />
          ))}
        </div>
      </section>
    </div>
  );
}


