export type AgentRole = "student" | "teacher" | "admin";

export type Agent = {
  id: string;
  name: string;
  description: string;
  role: AgentRole;
  url: string;
  category: string;
  bullets?: string[];
  icon?: "bot" | "sparkles" | "book" | "shield" | "briefcase" | "brain" | "megaphone";
  color?: "primary" | "accent" | "emerald" | "violet";
};

const baseUrl = "https://agents.sentient-university.demo/";

export const agents: Agent[] = [
  // Student experience & curriculum
  { id: "personalized-course-design", name: "Personalized Course Designer", description: "Builds adaptive curriculum pathways based on goals and prior learning.", bullets: ["Aligns to degree plan", "Adapts pacing"], color: "primary", icon: "book", role: "student", url: baseUrl + "personalized-course-design", category: "Curriculum & Teaching" },
  { id: "digital-fluency-ethics", name: "AI Literacy & Ethics Mentor", description: "Interactive modules to learn AI literacy and responsible use.", bullets: ["Short micro-lessons", "Scenario practice"], color: "accent", icon: "brain", role: "student", url: baseUrl + "digital-fluency-ethics", category: "Curriculum & Teaching" },
  { id: "ai-tutor-writer", name: "AI Tutor & Writing Assistant", description: "On-demand explanations, outlines, and draft feedback with citations.", bullets: ["Explain simply", "Draft with sources"], color: "primary", icon: "bot", role: "student", url: baseUrl + "ai-tutor-writer", category: "Curriculum & Teaching" },
  { id: "student-chatbot", name: "UniAI Student Concierge", description: "24/7 Q&A for courses, deadlines, and campus services.", bullets: ["Deadlines & reminders", "Campus help"], color: "accent", icon: "sparkles", role: "student", url: baseUrl + "student-chatbot", category: "Student Support" },
  { id: "career-coach", name: "Virtual Career Coach", description: "Resume review, interview prep, and matching to roles.", bullets: ["ATS resume tips", "Mock interviews"], color: "primary", icon: "briefcase", role: "student", url: baseUrl + "career-coach", category: "Student Support" },
  { id: "wellbeing-risk", name: "Wellbeing & Risk Sentinel", description: "Detects disengagement patterns and nudges to support (demo data).", bullets: ["Private signals", "Support routing"], color: "emerald", icon: "shield", role: "student", url: baseUrl + "wellbeing-risk", category: "Student Support" },
  { id: "job-matching", name: "AI Job Matching", description: "Recommends internships and roles based on skills and interests.", bullets: ["Skill matching", "Live postings"], color: "primary", icon: "briefcase", role: "student", url: baseUrl + "job-matching", category: "Careers" },
  { id: "skill-gap", name: "Skill-Gap Analyzer", description: "Finds gaps vs. target roles and suggests learning modules.", bullets: ["Gap radar", "Next steps"], color: "accent", icon: "brain", role: "student", url: baseUrl + "skill-gap", category: "Careers" },

  // Teacher & faculty support
  { id: "faculty-copilot", name: "Faculty Co‑Pilot", description: "Assists with course design, announcements, and class facilitation.", bullets: ["Drafts content", "Live session helpers"], color: "primary", icon: "sparkles", role: "teacher", url: baseUrl + "faculty-copilot", category: "Teaching Support" },
  { id: "genai-assistant", name: "Generative Teaching Assistant", description: "Drafts lesson content, examples, and assessment items.", bullets: ["Examples on demand", "Item bank seeds"], color: "accent", icon: "bot", role: "teacher", url: baseUrl + "genai-assistant", category: "Teaching Support" },
  { id: "sim-training", name: "Simulation‑Based Training (Chat Bot)", description: "Practice difficult scenarios like DEI conversations with a safe bot.", bullets: ["Role‑play safely", "Instant feedback"], color: "emerald", icon: "shield", role: "teacher", url: baseUrl + "sim-training", category: "Staff Development" },
  { id: "ai-literacy-training", name: "AI Literacy & Prompt Training", description: "Guided prompt libraries and micro‑courses for faculty.", bullets: ["Prompt patterns", "Micro‑courses"], color: "primary", icon: "book", role: "teacher", url: baseUrl + "ai-literacy-training", category: "Staff Development" },
  { id: "ai-collab-labs", name: "AI Collaboration Labs", description: "Sandbox to explore datasets and models with colleagues.", bullets: ["Shared workspace", "Model trials"], color: "accent", icon: "brain", role: "teacher", url: baseUrl + "ai-collab-labs", category: "Research & Innovation" },

  // Admin & recruitment
  { id: "virtual-admissions", name: "Virtual Admissions Assistant", description: "Guides applicants, answers FAQs, and triages inquiries.", bullets: ["24/7 guidance", "Smart triage"], color: "primary", icon: "bot", role: "admin", url: baseUrl + "virtual-admissions", category: "Recruitment & Marketing" },
  { id: "personalized-outreach", name: "Personalized Outreach Orchestrator", description: "Builds AI‑generated communication journeys for prospects.", bullets: ["Segments & journeys", "A/B optimize"], color: "accent", icon: "megaphone", role: "admin", url: baseUrl + "personalized-outreach", category: "Recruitment & Marketing" },
  { id: "staff-onboarding", name: "Personalized Staff Onboarding", description: "AI‑guided onboarding checklists and training paths.", bullets: ["Day‑1 setup", "Role‑tailored"], color: "emerald", icon: "shield", role: "admin", url: baseUrl + "staff-onboarding", category: "Staff Development" },
  { id: "ai-coaching-tools", name: "AI Coaching Tools", description: "Leadership and professional growth coaching chat assistant.", bullets: ["Growth plans", "Conversation practice"], color: "primary", icon: "brain", role: "admin", url: baseUrl + "ai-coaching-tools", category: "Staff Development" },
];

export function agentsForRole(role: AgentRole) {
  return agents.filter((a) => a.role === role);
}


