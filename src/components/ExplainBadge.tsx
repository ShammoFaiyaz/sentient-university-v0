"use client";

import * as React from "react";
import { Info } from "lucide-react";

export function ExplainBadge({
  label = "Explain",
  dataUsed,
  reason,
  confidence,
  onClick,
  className = "",
}: {
  label?: string;
  dataUsed: string;
  reason: string;
  confidence: string;
  onClick?: () => void;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <div className={"relative inline-block " + className} ref={ref}>
      <button
        type="button"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => onClick?.()}
        className="inline-flex items-center gap-1 rounded-full bg-primary/5 px-2 py-1 text-[12px] text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <Info className="h-3.5 w-3.5" />
        {label}
      </button>

      {open && (
        <div className="absolute z-30 mt-2 w-64 rounded-md border border-line/60 bg-white p-2 text-xs shadow-elevation-sm dark:bg-slate-900">
          <div className="mb-1 font-medium text-ink">How this was decided</div>
          <ul className="space-y-1 text-muted">
            <li><span className="font-medium text-ink">Data used:</span> {dataUsed}</li>
            <li><span className="font-medium text-ink">Reason:</span> {reason}</li>
            <li><span className="font-medium text-ink">Confidence:</span> {confidence}</li>
          </ul>
        </div>
      )}
    </div>
  );
}


