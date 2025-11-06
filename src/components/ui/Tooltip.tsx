"use client";

import { useState, useRef, useEffect } from "react";

export function Tooltip({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="size-6 rounded-full border border-neutral-medium text-xs text-neutral-dark hover:bg-neutral-light"
        aria-label="Why?"
      >
        ?
      </button>
      {open && (
        <div className="absolute left-1/2 z-20 mt-2 w-64 -translate-x-1/2 rounded-md border border-neutral-medium bg-white p-2 text-xs shadow">
          {label}
        </div>
      )}
    </div>
  );
}


