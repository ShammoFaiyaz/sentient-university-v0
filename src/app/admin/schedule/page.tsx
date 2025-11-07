"use client";

import { Card, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { AgentTile } from "@/components/AgentTile";
import { agentsForRole } from "@/mock/agents";
import { ReadOnlyCalendar } from "@/components/schedule/ReadOnlyCalendar";

export default function AdminSchedule() {
  const { show } = useToast();
  const openResolver = () => show({ title: "Resolver", message: "Opening conflict resolver (demo)", variant: "primary" });
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold text-primary">Scheduling (Admin)</h1>
      <section className="mt-4">
        <h2 className="mb-1 font-medium">Featured Agents</h2>
        <p className="mb-2 text-xs text-muted">Transparent • Cites sources • Human override</p>
        <div className="grid gap-4 md:grid-cols-3">
          {agentsForRole("admin").slice(0,3).map((a) => (
            <AgentTile key={a.id} agent={a} />
          ))}
        </div>
      </section>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardTitle>Calendar</CardTitle>
            <ReadOnlyCalendar />
          </Card>
        </div>
        <div>
          <Card>
            <CardTitle>Conflicts</CardTitle>
            <ul className="mt-2 list-inside list-disc text-sm text-neutral-dark/80">
              <li>Algorithms A overlaps Physics</li>
              <li>Ethics B near capacity</li>
            </ul>
            <Button variant="ghost" className="mt-3" onClick={openResolver}>Open resolver →</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}


