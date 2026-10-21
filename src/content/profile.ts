import type { Profile } from "@/lib/types";

// Null fields are intentional: populate only with Priyanshu Raj's approved details.
export const profile = {
  name: "Priyanshu Raj",
  title: "AI/ML Engineer & Developer",
  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Full-Stack Development",
    "Software Engineering",
    "Data Science",
  ],
  biography: null,
  email: null,
  location: null,
  github: "https://github.com/Priyanshuraj0909",
  linkedin: null,
  resume: null,
  skills: [],
} satisfies Profile;
