export type NewsItem = {
	id: string;
	title: string;
	description: string;
	tag: "Announcement" | "Research" | "Event" | "Policy" | "Teaching";
	imageSrc: string; // /news/xxx.jpg
	href: string;
	publishedAt: string; // ISO string
};


