import { Suspense } from "react";
import dynamic from "next/dynamic";

const SearchResults = dynamic(() => import("@/components/search/SearchResults"), {
  ssr: false,
});

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted">Loading results…</div>}>
      <SearchResults />
    </Suspense>
  );
}


