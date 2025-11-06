import { AgentTile } from "@/components/AgentTile";
import { agentsForRole } from "@/mock/agents";

export default function AdminAgents() {
  const list = agentsForRole("admin");
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold text-primary">Admin & Outreach Agents</h1>
      <p className="mt-1 text-xs text-muted">Transparent • Cites sources • Human override</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {list.map((a) => (
          <AgentTile key={a.id} agent={a} />
        ))}
      </div>
    </div>
  );
}


