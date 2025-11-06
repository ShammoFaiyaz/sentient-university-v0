import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { studentCourses } from "@/mock/courses";

export default function StudentCourses() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold text-primary">Courses</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {studentCourses.map((c) => (
          <Card key={c.id}>
            <CardTitle>{c.title}</CardTitle>
            <p className="mb-2 text-sm text-neutral-dark/80">Progress: {c.progressPercent}%</p>
            <ProgressBar value={c.progressPercent} />
            <Link href={`/student/courses/${c.id}`} className="mt-3 inline-block text-sm text-primary hover:underline">View details</Link>
          </Card>
        ))}
      </div>
      {studentCourses.length === 0 && (
        <p className="mt-6 text-sm text-neutral-dark/70">No courses yet.</p>
      )}
    </div>
  );
}


