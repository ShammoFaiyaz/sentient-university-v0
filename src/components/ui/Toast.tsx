"use client";

import * as React from "react";

type ToastVariant = "primary" | "accent" | "success" | "warning" | "error";

export type ToastItem = {
  id: string;
  title?: string;
  message: string;
  variant?: ToastVariant;
  actionLabel?: string;
  onAction?: () => void;
  durationMs?: number;
};

type ToastContextValue = {
  show: (item: Omit<ToastItem, "id">) => void;
  dismiss: (id: string) => void;
  dismissAll: () => void;
};

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  const show = React.useCallback((item: Omit<ToastItem, "id">) => {
    const id = Math.random().toString(36).slice(2);
    const next: ToastItem = { id, durationMs: 4500, variant: "primary", ...item };
    setToasts((prev) => [next, ...prev]);
    if (next.durationMs && next.durationMs > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, next.durationMs);
    }
  }, []);

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const dismissAll = React.useCallback(() => setToasts([]), []);

  const ctx: ToastContextValue = React.useMemo(() => ({ show, dismiss, dismissAll }), [show, dismiss, dismissAll]);

  return (
    <ToastContext.Provider value={ctx}>
      {children}
      {/* viewport */}
      <div className="pointer-events-none fixed right-4 top-4 z-[100] flex w-[min(96vw,380px)] flex-col gap-2">
        {toasts.map((t) => (
          <ToastView key={t.id} item={t} onClose={() => dismiss(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

function variantStripe(variant?: ToastVariant) {
  switch (variant) {
    case "accent":
      return "bg-accent";
    case "success":
      return "bg-success";
    case "warning":
      return "bg-warning";
    case "error":
      return "bg-error";
    case "primary":
    default:
      return "bg-primary";
  }
}

function ToastView({ item, onClose }: { item: ToastItem; onClose: () => void }) {
  return (
    <div className="pointer-events-auto relative overflow-hidden rounded-card border border-line/60 bg-white p-3 pr-10 shadow-elevation-md dark:bg-slate-900">
      <div className={"absolute inset-y-0 left-0 w-1 " + variantStripe(item.variant)} />
      <div className="flex items-start gap-2">
        <div className="mt-0.5 text-sm">
          {item.title && <div className="font-semibold text-ink">{item.title}</div>}
          <div className="text-sm text-ink/90">{item.message}</div>
          {item.actionLabel && item.onAction && (
            <button
              onClick={item.onAction}
              className="mt-1 inline-flex items-center rounded-control bg-primary/5 px-2 py-1 text-[12px] text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              {item.actionLabel}
            </button>
          )}
        </div>
        <button
          aria-label="Dismiss"
          onClick={onClose}
          className="absolute right-2 top-2 rounded-control p-1 text-muted hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        >
          ✕
        </button>
      </div>
    </div>
  );
}


