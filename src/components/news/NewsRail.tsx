"use client";

import NewsCard from "./NewsCard";
import { NewsItem } from "@/types/news";
import Link from "next/link";

export default function NewsRail({
	items,
	title = "News & Updates",
	limit = 3,
}: {
	items: NewsItem[];
	title?: string;
	limit?: number;
}) {
	const visible = items.slice(0, limit);
	return (
		<section className="mt-8">
			<div className="mb-3 flex items-center justify-between">
				<h2 className="text-lg font-semibold">{title}</h2>
				<Link href="/updates" className="text-sm text-primary hover:underline">
					View all updates
				</Link>
			</div>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{visible.map((i) => (
					<NewsCard key={i.id} item={i} />
				))}
			</div>
		</section>
	);
}


