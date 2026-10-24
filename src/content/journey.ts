import type { JourneyEntry } from "@/lib/types";

// Source: Priyanshu Raj's direct journey intake reply, confirmed 2026-10-24.
// No public source URL was provided. Preserve year precision and learning framing.
// See CONTENT_GUIDE.md for the confirmation log; these are not employment claims.
export const journey: readonly JourneyEntry[] = [
  {
    id: "bennett-btech-cse",
    category: "education",
    title: "B.Tech in Computer Science & Engineering",
    organization: "Bennett University",
    startDate: "2024",
    endDate: null,
    ongoing: true,
    expectedEndDate: "2028",
    confirmedOn: "2026-10-24",
    description: "Pursuing a Bachelor of Technology in Computer Science and Engineering, focusing on Artificial Intelligence, Machine Learning, Data Structures & Algorithms, Software Development, and modern web technologies. Actively building real-world AI/ML and full-stack projects.",
  },
  {
    id: "independent-ai-ml-full-stack",
    category: "education",
    title: "AI/ML & Full-Stack Development Journey",
    organization: "Independent Learning & Project Development",
    startDate: "2025",
    endDate: null,
    ongoing: true,
    confirmedOn: "2026-10-24",
    description: "Developing practical AI/ML and full-stack applications, including StudySync AI, CINEMATCH AI, CartPilot, Mock Interview, and Multimodal Fake News Detection. Gaining hands-on experience with Python, React, FastAPI, Scikit-learn, RAG, and modern development tools.",
  },
  {
    id: "bennett-machine-learning-operations",
    category: "education",
    title: "Machine Learning Operations",
    organization: "Bennett University",
    startDate: "2026",
    endDate: null,
    ongoing: true,
    confirmedOn: "2026-10-24",
    description: "Learning practical MLOps concepts including MLflow experiment tracking, model deployment, REST APIs, Docker containerization, automated testing, reproducible ML pipelines, and model serving.",
  },
];
