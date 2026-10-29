import type { Profile } from "@/lib/types";

export const aboutParagraphs: readonly (readonly { text: string; emphasis?: boolean }[])[] = [
  [
    { text: "I'm " },
    { text: "Priyanshu Raj", emphasis: true },
    { text: ", a Computer Science Engineering undergraduate at Bennett University, passionate about " },
    { text: "AI/ML, Generative AI, and Full-Stack Development", emphasis: true },
    { text: "." },
  ],
  [{ text: "I love building intelligent applications, solving challenging problems, and turning creative ideas into real-world solutions. From AI-powered platforms to scalable web applications, I'm constantly exploring new technologies and sharpening my skills in software engineering and problem-solving." }],
];

// Null fields are intentional: populate only with Priyanshu Raj's approved details.
export const profile = {
  name: "Priyanshu Raj",
  title: "AI/ML Engineer & Full-Stack Developer",
  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Generative AI",
    "Full-Stack Development",
    "Software Engineering",
    "Data Science",
  ],
  biography: aboutParagraphs.map(paragraph => paragraph.map(part => part.text).join("")).join(" "),
  email: "priyanshuraj032004@gmail.com",
  location: "India · IST (UTC+5:30)",
  github: "https://github.com/Priyanshuraj0909",
  linkedin: "https://www.linkedin.com/in/priyanshu-raj-00aab5334/",
  resume: null,
  skills: [],
} satisfies Profile;
