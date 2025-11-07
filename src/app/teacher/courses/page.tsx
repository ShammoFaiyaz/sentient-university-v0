"use client";

import { Card, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { agentsForRole } from "@/mock/agents";
import { AgentTile } from "@/components/AgentTile";

export default function TeacherCourses() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold text-primary">Courses</h1>
      <section className="mt-2">
        <div className="mb-2 text-xs text-muted">Course agents</div>
        <div className="grid gap-4 md:grid-cols-3">
          {agentsForRole("teacher").slice(0,3).map((a) => (
            <AgentTile key={a.id} agent={a} />
          ))}
        </div>
      </section>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card>
          <CardTitle>Algorithms</CardTitle>
          <p className="text-sm text-neutral-dark/80">Enrolled: 48</p>
          <div className="mt-3 flex w-full flex-wrap items-center justify-center gap-2">
            <Button as="a" href="/teacher/courses/algorithms/students" variant="ghost">Students</Button>
            <Button as="a" href="/teacher/courses/algorithms/grading" variant="ghost">Grading</Button>
            <Button as="a" href="/teacher/courses/algorithms/schedule" variant="ghost">Schedule</Button>
          </div>
        </Card>
        <Card>
          <CardTitle>Human-AI Ethics</CardTitle>
          <p className="text-sm text-neutral-dark/80">Enrolled: 32</p>
          <div className="mt-3 flex w-full flex-wrap items-center justify-center gap-2">
            <Button as="a" href="/teacher/courses/ethics/students" variant="ghost">Students</Button>
            <Button as="a" href="/teacher/courses/ethics/grading" variant="ghost">Grading</Button>
            <Button as="a" href="/teacher/courses/ethics/schedule" variant="ghost">Schedule</Button>
          </div>
        </Card>
        <Card>
          <CardTitle>Data Structures</CardTitle>
          <p className="text-sm text-neutral-dark/80">Enrolled: 55</p>
          <div className="mt-3 flex w-full flex-wrap items-center justify-center gap-2">
            <Button as="a" href="/teacher/courses/data-structures/students" variant="ghost">Students</Button>
            <Button as="a" href="/teacher/courses/data-structures/grading" variant="ghost">Grading</Button>
            <Button as="a" href="/teacher/courses/data-structures/schedule" variant="ghost">Schedule</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}


