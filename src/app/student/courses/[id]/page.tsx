import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardTitle } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { getCourseById } from "@/mock/courses";

export default function CourseDetail({ params }: { params: { id: string } }) {
  const course = getCourseById(params.id);
  if (!course) return notFound();

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold text-primary">{course.title}</h1>
      <div className="mt-2 max-w-md">
        <ProgressBar value={course.progressPercent} />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {course.lessons.map((l) => (
          <Card key={l.id}>
            <CardTitle>{l.title}</CardTitle>
            <p className="text-sm text-neutral-dark/80">{l.summary}</p>
            <Link href={`/student/courses/${course.id}/lesson/${l.id}`} className="mt-3 inline-block text-sm text-primary hover:underline">Open lesson</Link>
          </Card>
        ))}
      </div>
    </div>
  );
}


