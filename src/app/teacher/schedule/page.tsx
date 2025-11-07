"use client";

import { Card, CardTitle } from "@/components/ui/Card";
import { ReadOnlyCalendar } from "@/components/schedule/ReadOnlyCalendar";
import { AgentTile } from "@/components/AgentTile";
import { agentsForRole } from "@/mock/agents";

export default function TeacherSchedule() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold text-primary">Schedule</h1>
      <section className="mt-4">
        <h2 className="mb-1 font-medium">Featured Agents</h2>
        <p className="mb-2 text-xs text-muted">Transparent • Cites sources • Human override</p>
        <div className="grid gap-4 md:grid-cols-3">
          {agentsForRole("teacher").slice(0,3).map((a) => (
            <AgentTile key={a.id} agent={a} />
          ))}
        </div>
      </section>
      <div className="mt-6">
        <Card>
          <CardTitle>Calendar</CardTitle>
          <ReadOnlyCalendar />
        </Card>
      </div>
    </div>
  );
}


