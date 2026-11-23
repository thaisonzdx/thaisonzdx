export type SkillItem = string | { name: string; focus: true }

export type SkillGroup = {
  label: string
  items: SkillItem[]
}

export const focusSkills: SkillGroup = {
  label: "Focus",
  items: ["Spring Boot", "Next.js", "Google Cloud"],
}

export const skills: SkillGroup[] = [
  {
    label: "Frameworks & databases",
    items: [
      { name: "Spring Boot", focus: true },
      { name: "Next.js", focus: true },
      "ReactJS",
      "Node.js",
      "FastAPI",
      "PostgreSQL (RLS)",
      "MongoDB",
      "React Native",
      "Flutter (BLoC, GetX)",
      "Android (XML, Room, Retrofit)",
    ],
  },
  {
    label: "Cloud",
    items: [
      {
        name: "GCP (Cloud Run, Cloud Armor, Cloud Build, Artifact Registry, GCS, GCE, Cloud CDN, Cloud Scheduler, Cloud Tasks, Logging)",
        focus: true,
      },
      "Firebase (App Hosting, Functions, Firestore, Storage)",
      "AWS (S3, Lambda, SES, ECS)",
    ],
  },
  {
    label: "Architecture",
    items: [
      "RESTful APIs",
      "Serverless & event-driven systems",
      "Multi-tenant SaaS",
      "Row-Level Security",
      "RAG / LLM integration",
    ],
  },
  {
    label: "AI & tooling",
    items: [
      "Docker",
      "GitHub Actions",
      "Bash",
      "GitHub Copilot",
      "Claude",
      "OpenRouter",
      "MCP (Figma, Next.js, JetBrains)",
      "Fastlane",
      "App Store Connect",
    ],
  },
]
