"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Command as CommandPrimitive } from "cmdk";
import { useRole } from "@/components/role/RoleProvider";
import { agents } from "@/mock/agents";
import { studentCourses, getCourseById } from "@/mock/courses";
import { candidates } from "@/mock/admissions";

type RecentItem = { id: string; label: string; action: () => void };

export function CommandMenu() {
  const router = useRouter();
  const { role } = useRole();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [recents, setRecents] = React.useState<RecentItem[]>([]);

  // Load recents
  React.useEffect(() => {
    try {
      const raw = localStorage.getItem("su.command.recents");
      if (raw) {
        const arr = JSON.parse(raw) as { label: string; href?: string }[];
        setRecents(
          arr.map((r, i) => ({ id: `${i}-${r.label}`, label: r.label, action: () => r.href && router.push(r.href) }))
        );
      }
    } catch {}
  }, [router]);

  // Keyboard shortcuts
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isModK = (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey));
      const isSlash = e.key === "/";
      const target = e.target as HTMLElement | null;
      const isTyping = !!target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
      if (isModK) {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (isSlash && !isTyping) {
        e.preventDefault();
        setOpen(true);
        // focus search input shortly after open
        requestAnimationFrame(() => inputRef.current?.focus());
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function pushAndRemember(label: string, href: string) {
    router.push(href);
    setOpen(false);
    try {
      const raw = localStorage.getItem("su.command.recents");
      const arr = raw ? (JSON.parse(raw) as { label: string; href: string }[]) : [];
      const next = [{ label, href }, ...arr.filter((a) => a.href !== href)].slice(0, 7);
      localStorage.setItem("su.command.recents", JSON.stringify(next));
    } catch {}
  }

  // Navigate items
  const base = role === "student" ? "/student" : role === "teacher" ? "/teacher" : "/admin";
  const navItems = [
    { label: "Dashboard", href: `${base}` },
    { label: "Courses", href: `${base}/courses` },
    { label: "Grading", href: `${base}/grading` },
    { label: "Agents", href: `${base}/agents` },
  ];

  // Actions
  const actions = [
    { label: "Continue course", run: () => pushAndRemember("Continue course", `${base}/courses`) },
    { label: "Resolve conflicts", run: () => pushAndRemember("Resolve conflicts", role === "admin" ? "/admin/enrollment" : `${base}`) },
    { label: "Generate report", run: () => pushAndRemember("Generate report", role === "admin" ? "/admin/compliance" : `${base}`) },
  ];

  // Search sources
  const agentResults = agents
    .filter((a) => a.role === role && a.name.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 6)
    .map((a) => ({ label: `Agent: ${a.name}`, href: `${base}/agents` }));

  const courseResults = studentCourses
    .filter((c) => c.title.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 6)
    .map((c) => ({ label: `Course: ${c.title}`, href: `${base}/courses/${c.id}` }));

  const studentResults = candidates
    .filter((s) => s.name.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 6)
    .map((s) => ({ label: `Student: ${s.name}`, href: "/admin/admissions" }));

  const anySearch = query.trim().length > 0;

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/30" onClick={() => setOpen(false)} />
      )}
      <div className="fixed inset-x-0 top-20 z-50 mx-auto w-full max-w-xl">
        <CommandPrimitive.Dialog
          open={open}
          onOpenChange={setOpen}
          label="Global Command Menu"
          className="overflow-hidden rounded-card border border-line/60 bg-white shadow-elevation-md dark:bg-slate-900"
        >
          <div className="flex items-center gap-2 border-b border-line/60 px-3 py-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-muted"><path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-6-6" stroke="currentColor" strokeWidth="2"/></svg>
            <CommandPrimitive.Input
              ref={inputRef}
              value={query}
              onValueChange={setQuery}
              placeholder="Search or run a command…"
              className="flex-1 bg-transparent py-1 text-sm outline-none placeholder:text-muted"
            />
            <span className="rounded-md bg-ink/5 px-1.5 py-0.5 text-[10px] text-muted">⌘K</span>
          </div>

          <CommandPrimitive.List className="max-h-[60vh] overflow-y-auto p-2 text-sm">
            {!anySearch && recents.length > 0 && (
              <CommandPrimitive.Group heading="Recent" className="mb-2">
                {recents.map((r) => (
                  <CommandPrimitive.Item key={r.id} onSelect={() => r.action()} className="flex cursor-pointer items-center justify-between rounded-md px-2 py-1.5 aria-selected:bg-primary/5">
                    <span>{r.label}</span>
                    <span className="text-[10px] text-muted">recent</span>
                  </CommandPrimitive.Item>
                ))}
              </CommandPrimitive.Group>
            )}

            {!anySearch && (
              <CommandPrimitive.Group heading="Navigate" className="mb-2">
                {navItems.map((n) => (
                  <CommandPrimitive.Item key={n.href} onSelect={() => pushAndRemember(n.label, n.href)} className="cursor-pointer rounded-md px-2 py-1.5 aria-selected:bg-primary/5">
                    {n.label}
                  </CommandPrimitive.Item>
                ))}
              </CommandPrimitive.Group>
            )}

            {!anySearch && (
              <CommandPrimitive.Group heading="Actions" className="mb-2">
                {actions.map((a) => (
                  <CommandPrimitive.Item key={a.label} onSelect={() => a.run()} className="cursor-pointer rounded-md px-2 py-1.5 aria-selected:bg-primary/5">
                    {a.label}
                  </CommandPrimitive.Item>
                ))}
              </CommandPrimitive.Group>
            )}

            {anySearch && (
              <CommandPrimitive.Group heading="Search results">
                {[...agentResults, ...courseResults, ...studentResults].map((r) => (
                  <CommandPrimitive.Item key={r.label + r.href} onSelect={() => pushAndRemember(r.label, r.href)} className="cursor-pointer rounded-md px-2 py-1.5 aria-selected:bg-primary/5">
                    {r.label}
                  </CommandPrimitive.Item>
                ))}
                {[...agentResults, ...courseResults, ...studentResults].length === 0 && (
                  <div className="px-2 py-1.5 text-muted">No results</div>
                )}
              </CommandPrimitive.Group>
            )}
          </CommandPrimitive.List>
        </CommandPrimitive.Dialog>
      </div>
    </>
  );
}


