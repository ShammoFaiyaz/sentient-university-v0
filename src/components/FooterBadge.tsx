export function FooterBadge() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-2 z-30 flex justify-center">
      <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-line/60 bg-white/95 px-3 py-1 text-xs text-muted shadow-[0_6px_16px_rgba(0,0,0,0.10)] backdrop-blur">
        <img src="/logo.png" alt="Inova" className="h-4 w-4" />
        <span>Powered by Inova AI Solutions</span>
      </div>
    </div>
  );
}


