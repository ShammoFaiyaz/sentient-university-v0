import { AgentCard } from "@/components/agents/AgentCard";
import { agentsForRole } from "@/mock/agents";

export default function TeacherAgents() {
  const list = agentsForRole("teacher");
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold text-primary">Faculty Agents</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {list.map((a) => (
          <AgentCard key={a.id} agent={a} />
        ))}
      </div>
    </div>
  );
}


