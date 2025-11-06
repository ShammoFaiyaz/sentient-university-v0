import Link from "next/link";
import { Bot, Sparkles, BookOpen, Shield, Briefcase, Brain, Megaphone, CheckCircle } from "lucide-react";
import type { Agent } from "@/mock/agents";

function getIcon(name?: Agent["icon"]) {
  switch (name) {
    case "sparkles": return Sparkles;
    case "book": return BookOpen;
    case "shield": return Shield;
    case "briefcase": return Briefcase;
    case "brain": return Brain;
    case "megaphone": return Megaphone;
    default: return Bot;
  }
}

function colorClasses(color?: Agent["color"]) {
  if (color === "accent") return { grad: "from-accent to-accent-light", ring: "ring-accent" };
  if (color === "emerald") return { grad: "from-emerald-500 to-emerald-300", ring: "ring-emerald-400" };
  if (color === "violet") return { grad: "from-violet-500 to-violet-300", ring: "ring-violet-400" };
  return { grad: "from-primary to-primary-light", ring: "ring-primary" };
}

export function AgentCard({ agent, variant = "large" }: { agent: Agent; variant?: "large" | "compact" }) {
  const Icon = getIcon(agent.icon);
  const theme = colorClasses(agent.color);
  const wrapper = variant === "compact" ? "p-3" : "p-5";
  const title = variant === "compact" ? "text-base" : "text-lg";
  const bulletText = variant === "compact" ? "text-xs" : "text-sm";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-medium bg-white p-[1px] shadow-sm transition-transform duration-200 hover:scale-[1.01]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_-20%,#FFB597_0,transparent_40%),radial-gradient(circle_at_120%_0,#2B6DCC_0,transparent_35%)] opacity-30" />
      <div className={`rounded-2xl bg-white ${wrapper}`}>
        <div className="flex items-start gap-3">
          <div className={`flex size-12 items-center justify-center rounded-full bg-gradient-to-br ${theme.grad} ring-4 ${theme.ring} ring-opacity-20 text-white`}>
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-neutral-dark/60">{agent.category}</div>
            <h3 className={`mt-1 font-semibold text-primary ${title}`}>{agent.name}</h3>
          </div>
        </div>
        <p className="mt-2 text-sm text-neutral-dark/80">{agent.description}</p>
        {agent.bullets && agent.bullets.length > 0 && (
          <ul className="mt-2 space-y-1">
            {agent.bullets.slice(0, 3).map((b, i) => (
              <li key={i} className={`flex items-center gap-2 ${bulletText} text-neutral-dark/90`}>
                <CheckCircle className="h-4 w-4 text-accent" />
                {b}
              </li>
            ))}
          </ul>
        )}
        <Link href={agent.url} target="_blank" className="mt-3 inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-xs font-medium text-white hover:bg-accent-dark">
          Open demo
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7" stroke="currentColor" strokeWidth="2"/><path d="M9 7H17V15" stroke="currentColor" strokeWidth="2"/></svg>
        </Link>
      </div>
    </div>
  );
}


