export function ProgressBar({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="h-2 w-full overflow-hidden rounded bg-neutral-medium/40">
      <div className="h-full bg-primary" style={{ width: pct + "%" }} />
    </div>
  );
}


