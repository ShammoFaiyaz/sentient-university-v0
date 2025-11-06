"use client";

import * as React from "react";

type Option<T extends string> = { label: string; value: T };

export function FilterGroup<T extends string>({
  label,
  value,
  options,
  onChange,
  className = "",
}: {
  label: string;
  value: T;
  options: Option<T>[];
  onChange: (next: T) => void;
  className?: string;
}) {
  return (
    <div className={"text-sm " + className}>
      <div className="mb-1 text-neutral-dark/70">{label}</div>
      <div role="radiogroup" aria-label={label} className="inline-flex items-center gap-1 rounded-control border border-line/60 bg-white p-1 shadow-sm dark:bg-slate-900">
        {options.map((opt) => {
          const active = value === opt.value;
          return (
            <button
              key={opt.value}
              role="radio"
              aria-checked={active}
              onClick={() => onChange(opt.value)}
              className={
                "rounded-control px-3 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary " +
                (active ? "bg-primary text-white" : "text-ink hover:bg-primary/5")
              }
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}


