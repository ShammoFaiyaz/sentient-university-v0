"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function labelFor(segment: string) {
  if (!segment) return "Home";
  switch (segment) {
    case "student":
    case "teacher":
    case "admin":
      return "Dashboard";
    case "courses":
      return "Courses";
    case "assessments":
      return "Assessments";
    case "grading":
      return "Grading";
    case "schedule":
      return "Schedule";
    case "admissions":
      return "Admissions";
    case "enrollment":
      return "Enrollment";
    case "compliance":
      return "Compliance";
    case "lesson":
      return "Lesson";
    default:
      return segment.replace(/[-_]/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
  }
}

export function Breadcrumbs() {
  const pathname = usePathname() || "/";
  const parts = pathname.split("/").filter(Boolean);

  const crumbs = [] as { href: string; label: string }[];
  for (let i = 0; i < parts.length; i++) {
    const href = "/" + parts.slice(0, i + 1).join("/");
    crumbs.push({ href, label: labelFor(parts[i]) });
  }

  if (crumbs.length === 0) return null;

  return (
    <div className="w-full border-t border-neutral-medium bg-white">
      <div className="mx-auto max-w-6xl px-4 py-2 text-sm text-neutral-dark/80">
        {crumbs.map((c, i) => (
          <span key={c.href}>
            {i > 0 && <span className="mx-2 text-neutral-dark/50">/</span>}
            {i < crumbs.length - 1 ? (
              <Link href={c.href} className="hover:underline">{c.label}</Link>
            ) : (
              <span aria-current="page" className="text-neutral-dark">{c.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}


