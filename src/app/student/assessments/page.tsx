"use client";
import { Card, CardTitle } from "@/components/ui/Card";
import { EmptyState } from "@/components/EmptyState";
import { useRouter } from "next/navigation";

export default function StudentAssessments() {
  const router = useRouter();
  const items = [
    { title: "Algorithms Quiz 2", meta: "Due: Nov 12 — 20 mins" },
    { title: "Ethics Essay Draft", meta: "Due: Nov 15 — 1200 words" },
  ];

  const openMentorIntent = () => {
    router.push("/student/agents?intent=schedule_practice");
  };

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold text-primary">Assessments</h1>
      {items.length === 0 ? (
        <div className="mt-6">
          <EmptyState
            title="Nothing due"
            body="Stay sharp — schedule a quick practice session with your Mentor."
            ctaLabel="Ask Mentor to schedule practice"
            onCtaClick={openMentorIntent}
            variant="accent"
          />
        </div>
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((it) => (
            <Card key={it.title}>
              <CardTitle>{it.title}</CardTitle>
              <p className="text-sm text-neutral-dark/80">{it.meta}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}


