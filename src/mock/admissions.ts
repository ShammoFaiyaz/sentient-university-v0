export type Candidate = {
  id: string;
  name: string;
  program: string;
  gpa: number;
  score: number; // AI shortlisting score 0-100
  why: string; // explanation snippet
  missingDocs?: boolean;
  visa?: "required" | "verified";
  feeWaiver?: boolean;
};

export const candidates: Candidate[] = [
  { id: "c1", name: "Leah O.", program: "Computer Science", gpa: 3.8, score: 92, why: "High STEM coursework, strong portfolio", missingDocs: false, visa: "verified", feeWaiver: false },
  { id: "c2", name: "Amir S.", program: "Psychology", gpa: 3.6, score: 85, why: "Research assistantship, strong recs", missingDocs: true, visa: "required", feeWaiver: true },
  { id: "c3", name: "Jin K.", program: "Computer Science", gpa: 3.9, score: 95, why: "Olympiad finalist, leadership", missingDocs: false, visa: "verified", feeWaiver: false },
  { id: "c4", name: "Maya R.", program: "Business", gpa: 3.5, score: 78, why: "Entrepreneurship awards", missingDocs: false, visa: "required", feeWaiver: false },
];

export const programs = ["Computer Science", "Psychology", "Business"] as const;


