"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRole } from "@/components/role/RoleProvider";
import { Breadcrumbs } from "@/components/nav/Breadcrumbs";

const roles = [
  { key: "student", label: "Student", href: "/student" },
  { key: "teacher", label: "Teacher", href: "/teacher" },
  { key: "admin", label: "Admin", href: "/admin" },
] as const;

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { role, setRole } = useRole();

  useEffect(() => {
    // Sync path change from dropdown selection
    const target = roles.find((r) => r.key === role)?.href ?? "/student";
    if (!pathname?.startsWith(target)) {
      router.push(target);
    }
  }, [role, pathname, router]);

  return (
    <header className="w-full border-b border-neutral-medium bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold text-primary">
          <Image src="/logo.png" alt="Sentient University" width={28} height={28} />
          <span>Sentient University</span> 
        </Link>
        <div className="flex items-center gap-3">
          <label htmlFor="role" className="text-sm text-neutral-dark/70">
            Role
          </label>
          <select
            id="role"
            className="rounded-md border border-neutral-medium px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            value={role}
            onChange={(e) => setRole(e.target.value as any)}
          >
            {roles.map((r) => (
              <option key={r.key} value={r.key}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Breadcrumbs />
    </header>
  );
}


