import { Card, CardTitle } from "@/components/ui/Card";
import { Table, Th, Td } from "@/components/ui/Table";
import { capacity } from "@/mock/capacity";

export default function AdminEnrollment() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold text-primary">Enrollment</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card>
          <CardTitle>Capacity</CardTitle>
          <Table>
            <thead>
              <tr>
                <Th>Course</Th>
                <Th>Section</Th>
                <Th>Filled / Seats</Th>
              </tr>
            </thead>
            <tbody>
              {capacity.map((s, i) => (
                <tr key={i} className="odd:bg-neutral-light/40">
                  <Td>{s.course}</Td>
                  <Td>{s.section}</Td>
                  <Td>
                    {s.filled} / {s.seats}
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
        <Card>
          <CardTitle>Conflicts</CardTitle>
          <p className="text-sm text-neutral-dark/80">Timetable conflicts detected: 2</p>
        </Card>
      </div>
    </div>
  );
}


