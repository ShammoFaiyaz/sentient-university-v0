import { Card, CardTitle } from "@/components/ui/Card";

export default function StudentAssessments() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold text-primary">Assessments</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card>
          <CardTitle>Algorithms Quiz 2</CardTitle>
          <p className="text-sm text-neutral-dark/80">Due: Nov 12 — 20 mins</p>
        </Card>
        <Card>
          <CardTitle>Ethics Essay Draft</CardTitle>
          <p className="text-sm text-neutral-dark/80">Due: Nov 15 — 1200 words</p>
        </Card>
      </div>
    </div>
  );
}


