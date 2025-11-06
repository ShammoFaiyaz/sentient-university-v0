export type Submission = {
  id: string;
  course: string;
  assignment: string;
  student: string;
  submittedAt: string;
};

export const gradingQueue: Submission[] = [
  { id: "s1", course: "Algorithms", assignment: "Lab 3", student: "A. Patel", submittedAt: "Nov 6, 10:12" },
  { id: "s2", course: "Human-AI Ethics", assignment: "Essay Outline", student: "J. Kim", submittedAt: "Nov 6, 09:48" },
];


