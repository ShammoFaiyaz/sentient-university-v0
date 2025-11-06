"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, Gauge, Layers3, Sparkles, Timer, Brain, BookOpen, Calendar, Shield } from "lucide-react";
import { useRole } from "@/components/role/RoleProvider";

type NavItem = { label: string; href: string; icon: any };

function getNav(role: "student" | "teacher" | "admin"): NavItem[] {
  if (role === "student") return [
    { label: "Dashboard", icon: Gauge, href: "/student" },
    { label: "Courses", icon: BookOpen, href: "/student/courses" },
    { label: "Assessments", icon: Layers3, href: "/student/assessments" },
    { label: "Agents", icon: Bot, href: "/student/agents" },
  ];
  if (role === "teacher") return [
    { label: "Dashboard", icon: Gauge, href: "/teacher" },
    { label: "Courses", icon: BookOpen, href: "/teacher/courses" },
    { label: "Grading", icon: Sparkles, href: "/teacher/grading" },
    { label: "Schedule", icon: Calendar, href: "/teacher/schedule" },
    { label: "Agents", icon: Bot, href: "/teacher/agents" },
  ];
  return [
    { label: "Dashboard", icon: Gauge, href: "/admin" },
    { label: "Admissions", icon: Shield, href: "/admin/admissions" },
    { label: "Enrollment", icon: Layers3, href: "/admin/enrollment" },
    { label: "Compliance", icon: Shield, href: "/admin/compliance" },
    { label: "Agents", icon: Bot, href: "/admin/agents" },
  ];
}

export default function Sidebar() {
  const pathname = usePathname();
  const { role } = useRole();
  const navItems = getNav(role);

  return (
    <aside className="hidden h-full w-[24rem] shrink-0 border-r lg:flex lg:flex-col" style={{ background: "var(--color-neutral-light)" }}>
      <div className="flex items-center justify-center px-4 py-3">
        <img src="/brand.gif" alt="Sentient University" className="h-50 w-auto" />
      </div>

      <div className="px-6 pb-4">
        <div className="flex items-center gap-2 rounded-md bg-emerald-50 px-2 py-1 text-emerald-700">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-xl">Connected</span>
        </div>
      </div>

      <div className="px-6">
        <div className="mb-3 text-base font-semibold text-zinc-700">Agent Overview</div>
        <div className="grid grid-cols-2 gap-4">
          <SummaryCard label="Agents active" value="17" hint="of 49 active" colorHex="#004AAD" bgGradient="linear-gradient(180deg, rgba(0,74,173,0.12) 0%, rgba(255,255,255,1) 100%)" Icon={Bot} />
          <SummaryCard label="Automation runs" value="128" hint="runs" colorHex="#008C74" bgGradient="linear-gradient(180deg, rgba(0,140,116,0.14) 0%, rgba(255,255,255,1) 100%)" Icon={Sparkles} />
          <SummaryCard label="Avg response" value="1.4s" hint="last hour" colorHex="#3D73D0" bgGradient="linear-gradient(180deg, rgba(61,115,208,0.12) 0%, rgba(255,255,255,1) 100%)" Icon={Timer} />
          <SummaryCard label="Agent skills" value="42" hint="loaded" colorHex="#F4B23E" bgGradient="linear-gradient(180deg, rgba(244,178,62,0.18) 0%, rgba(255,255,255,1) 100%)" Icon={Brain} />
        </div>
      </div>

      <nav className="mt-6 flex flex-1 flex-col gap-1 px-4">
        {navItems.map((n) => {
          const isDashboard = n.href === `/${role}`;
          const active = isDashboard ? pathname === n.href : pathname?.startsWith(n.href);
          return (
            <Link
              key={n.label}
              href={n.href}
              className="group flex items-center gap-3 rounded-md px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
            >
              <n.icon className="h-4 w-4 text-zinc-500 group-hover:text-zinc-700" />
              <span className={active ? "border-b-2" : ""} style={active ? { borderColor: "var(--color-accent)" } : {}}>{n.label}</span>
            </Link>
          );
        })}
      </nav>

    </aside>
  );
}

function SummaryCard({ label, value, hint, colorHex, bgGradient, Icon }: { label: string; value: string; hint: string; colorHex: string; bgGradient: string; Icon: any }) {
  return (
    <div className="rounded-2xl p-4 shadow-md" style={{ background: bgGradient, border: "1px solid var(--color-neutral)" }}>
      <div className="flex items-center gap-2">
        <div className="p-0" style={{ color: colorHex }}>
          <Icon className="h-5 w-5" />
        </div>
        <span className="max-w-[9.5rem] break-words pr-1 text-sm font-medium leading-tight" style={{ color: colorHex }}>{label}</span>
      </div>
      <div className="mt-2 text-2xl font-semibold" style={{ color: colorHex }}>{value}</div>
      <div className="text-xs text-zinc-600">{hint}</div>
    </div>
  );
}


