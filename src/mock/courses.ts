export type Lesson = {
  id: string;
  title: string;
  summary: string;
};

export type Course = {
  id: string;
  title: string;
  progressPercent: number;
  lessons: Lesson[];
};

export const studentCourses: Course[] = [
  {
    id: "algorithms",
    title: "Algorithms",
    progressPercent: 42,
    lessons: [
      { id: "1", title: "Greedy Strategies", summary: "Selecting locally optimal choices." },
      { id: "2", title: "Divide and Conquer", summary: "Breaking problems into subproblems." },
    ],
  },
  {
    id: "ethics",
    title: "Human-AI Ethics",
    progressPercent: 70,
    lessons: [
      { id: "1", title: "Bias & Fairness", summary: "Sources and mitigations." },
      { id: "2", title: "Transparency", summary: "Explainability patterns." },
    ],
  },
  {
    id: "data-structures",
    title: "Data Structures",
    progressPercent: 18,
    lessons: [
      { id: "1", title: "Arrays & Lists", summary: "Linear collections." },
      { id: "2", title: "Stacks & Queues", summary: "LIFO and FIFO." },
    ],
  },
];

export function getCourseById(id: string): Course | undefined {
  return studentCourses.find((c) => c.id === id);
}


