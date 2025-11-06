import { Card, CardTitle } from "@/components/ui/Card";

export default function TeacherSchedule() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold text-primary">Schedule</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card>
          <CardTitle>Today</CardTitle>
          <ul className="list-inside list-disc text-sm text-neutral-dark/80">
            <li>10:00—11:15 Algorithms (Room 204)</li>
            <li>13:00—14:00 Office Hours</li>
          </ul>
        </Card>
        <Card>
          <CardTitle>Tomorrow</CardTitle>
          <ul className="list-inside list-disc text-sm text-neutral-dark/80">
            <li>09:00—10:15 Ethics (Hall B)</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}


