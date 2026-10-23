export interface Profile {
  name: string;
  title: string;
  interests: readonly string[];
  biography: string | null;
  email: string | null;
  location: string | null;
  github: string;
  linkedin: string | null;
  resume: string | null;
  skills: readonly string[];
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  technologies: readonly string[];
  category: string;
  overview: string;
  features: readonly string[];
  constraints: readonly string[];
  pipeline: readonly string[];
  screenshotCaption: string | null;
  screenshotWidth: number | null;
  screenshotHeight: number | null;
  repository: string;
  demo: string | null;
  screenshot: string | null;
  evidence: {
    source: string;
    commit: string;
    paths: readonly string[];
    verifiedOn: string;
    level: "readme" | "source" | "runtime";
  };
}

export interface JourneyEntry {
  id: string;
  startDate: string;
  endDate: string | null;
  category: "education" | "experience" | "achievement" | "leadership";
  title: string;
  organization: string;
  description: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuedOn: string;
  verificationUrl: string | null;
  pdf: string | null;
}
