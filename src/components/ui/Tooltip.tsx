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
        className="rounded-full bg-primary/5 px-2 py-1 text-[12px] text-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        aria-label="Explain"
      >
        Explain
      </button>
      {open && (
        <div className="absolute left-1/2 z-20 mt-2 w-64 -translate-x-1/2 rounded-md border border-neutral-medium bg-white p-2 text-xs shadow">
          {label}
        </div>
      )}
    </div>
  );
}


