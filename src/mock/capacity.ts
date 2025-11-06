export type SectionCapacity = {
  course: string;
  section: string;
  seats: number;
  filled: number;
};

export const capacity: SectionCapacity[] = [
  { course: "Algorithms", section: "A", seats: 50, filled: 48 },
  { course: "Algorithms", section: "B", seats: 50, filled: 41 },
  { course: "Human-AI Ethics", section: "A", seats: 40, filled: 39 },
  { course: "Data Structures", section: "A", seats: 60, filled: 54 },
];


