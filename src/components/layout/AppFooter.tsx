export function AppFooter() {
  return (
    <div className="mt-4 flex w-full items-center justify-center px-4">
      <a
        href="https://www.inovasolutions.ai/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Powered by Inova AI Solutions"
        className="inline-flex items-center gap-4 rounded-full border border-line/60 bg-white/95 px-5 py-2.5 text-lg text-muted shadow-[0_6px_16px_rgba(0,0,0,0.08)] whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <span>Powered by</span>
        <img src="/inova-logo.svg" alt="Inova AI Solutions" className="h-8 w-auto" />
      </a>
    </div>
  );
}


