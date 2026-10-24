import type { Profile } from "@/lib/types";

// Null fields are intentional: populate only with Priyanshu Raj's approved details.
export const profile = {
  name: "Priyanshu Raj",
  title: "AI/ML Engineer & Full-Stack Developer",
  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Full-Stack Development",
    "Software Engineering",
    "Data Science",
  ],
  biography: "Computer Science and Engineering student at Bennett University building intelligent applications, machine-learning systems, and practical full-stack software.",
  email: null,
  location: null,
  github: "https://github.com/Priyanshuraj0909",
  linkedin: null,
  resume: null,
  skills: [],
} satisfies Profile;
