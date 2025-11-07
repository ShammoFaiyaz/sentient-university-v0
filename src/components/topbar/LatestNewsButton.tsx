 "use client";

import { Newspaper } from "lucide-react";
import Link from "next/link";

export default function LatestNewsButton() {
  return (
    <Link
      href="/updates"
      className="inline-flex items-center gap-2 rounded-full bg-accentStrong px-3 py-2 text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:bg-accentStrong/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accentStrong"
      aria-label="Open latest news and updates"
    >
      <Newspaper className="h-5 w-5 text-white" />
      <span className="text-sm font-medium text-white">Latest News</span>
    </Link>
  );
}


