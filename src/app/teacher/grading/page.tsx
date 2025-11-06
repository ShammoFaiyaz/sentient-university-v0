import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/Card";
import { Table, Th, Td } from "@/components/ui/Table";
import { gradingQueue } from "@/mock/submissions";

export default function TeacherGrading() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold text-primary">Grading</h1>
      <div className="mt-6">
        <Card>
          <CardTitle>Queue</CardTitle>
          {gradingQueue.length === 0 ? (
            <p className="text-sm text-neutral-dark/70">No submissions in the queue.</p>
          ) : (
          <Table>
            <thead>
              <tr>
                <Th>Student</Th>
                <Th>Course</Th>
                <Th>Assignment</Th>
                <Th>Submitted</Th>
                <Th></Th>
              </tr>
            </thead>
            <tbody>
              {gradingQueue.map((s) => (
                <tr key={s.id} className="odd:bg-neutral-light/40">
                  <Td>{s.student}</Td>
                  <Td>{s.course}</Td>
                  <Td>{s.assignment}</Td>
                  <Td>{s.submittedAt}</Td>
                  <Td>
                    <Link href={`/teacher/grading/${s.id}`} className="text-primary hover:underline">Grade</Link>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
          )}
        </Card>
      </div>
    </div>
  );
}


