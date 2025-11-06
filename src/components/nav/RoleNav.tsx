"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRole } from "@/components/role/RoleProvider";

type NavItem = { label: string; href: string };

function getItems(role: "student" | "teacher" | "admin"): NavItem[] {
  if (role === "student") return [
    { label: "Dashboard", href: "/student" },
    { label: "Courses", href: "/student/courses" },
    { label: "Assessments", href: "/student/assessments" },
    { label: "Agents", href: "/student/agents" },
  ];
  if (role === "teacher") return [
    { label: "Dashboard", href: "/teacher" },
    { label: "Courses", href: "/teacher/courses" },
    { label: "Grading", href: "/teacher/grading" },
    { label: "Schedule", href: "/teacher/schedule" },
    { label: "Agents", href: "/teacher/agents" },
  ];
  return [
    { label: "Dashboard", href: "/admin" },
    { label: "Admissions", href: "/admin/admissions" },
    { label: "Enrollment", href: "/admin/enrollment" },
    { label: "Compliance", href: "/admin/compliance" },
    { label: "Agents", href: "/admin/agents" },
  ];
}

export function RoleNav() {
  const { role } = useRole();
  const pathname = usePathname();
  const items = getItems(role);

  return (
    <nav className="w-full border-t border-neutral-medium bg-white">
      <div className="mx-auto flex max-w-6xl gap-4 px-4">
        {items.map((item) => {
          const active = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                "py-2 text-sm text-neutral-dark/80 hover:text-primary " +
                (active ? "border-b-2 border-accent text-primary" : "border-b-2 border-transparent")
              }
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}


