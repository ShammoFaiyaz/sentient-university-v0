"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";

type Variant = "primary" | "accent";

export function EmptyState({
  icon,
  title,
  body,
  ctaLabel,
  ctaHref,
  onCtaClick,
  variant = "primary",
  className,
}: {
  icon?: React.ReactNode;
  title: string;
  body?: string;
  ctaLabel: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  variant?: Variant;
  className?: string;
}) {
  return (
    <div className={"flex flex-col items-center justify-center rounded-card border border-line/60 bg-white p-8 text-center shadow-elevation-sm dark:bg-slate-900 " + (className ?? "")}> 
      {icon && <div className="mb-3 text-primary">{icon}</div>}
      <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-ink">{title}</h3>
      {body && <p className="mt-1 max-w-md text-sm text-muted">{body}</p>}
      <div className="mt-4">
        <Button
          as={ctaHref ? "a" : "button"}
          href={ctaHref}
          onClick={onCtaClick}
          variant={variant === "primary" ? "primary" : "accent"}
          size="md"
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}



