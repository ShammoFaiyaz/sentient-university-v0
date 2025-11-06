import { Card, CardTitle } from "@/components/ui/Card";

export default function TeacherCourses() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold text-primary">Courses</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card>
          <CardTitle>Algorithms</CardTitle>
          <p className="text-sm text-neutral-dark/80">Enrolled: 48</p>
        </Card>
        <Card>
          <CardTitle>Human-AI Ethics</CardTitle>
          <p className="text-sm text-neutral-dark/80">Enrolled: 32</p>
        </Card>
        <Card>
          <CardTitle>Data Structures</CardTitle>
          <p className="text-sm text-neutral-dark/80">Enrolled: 55</p>
        </Card>
      </div>
    </div>
  );
}


