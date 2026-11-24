export type SocialLink = {
  label: string
  href: string
  handle: string
}

export const profile = {
  name: "Trần Thái Sơn",
  shortName: "Sơn",
  handle: "thaisonzdx",
  role: "Software Developer",
  location: "Hanoi, Vietnam",
  description:
    "Trần Thái Sơn (thaisonzdx), a full-stack software developer in Hanoi building web, mobile and cloud products with Next.js, Spring Boot, FastAPI, Firebase and GCP.",
}

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/thaisonzdx", handle: "@thaisonzdx" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thaisonzdx", handle: "in/thaisonzdx" },
  { label: "Facebook", href: "https://www.facebook.com/thaisonzdx", handle: "thaisonzdx" },
  { label: "Instagram", href: "https://www.instagram.com/thaisonzdx", handle: "@thaisonzdx" },
  { label: "X", href: "https://x.com/thaisonzdx", handle: "@thaisonzdx" },
]

export const announcement = {
  label: "See the GDG Cloud Hanoi event photo platform I built",
  href: "https://gdgcloudhanoi.dev/photos",
}

export const hero = {
  greeting: "Hi, I'm Sơn.",
  intro:
    "A software developer in Hanoi. I build web apps, backends and cloud systems, mostly with Next.js, Spring Boot and Google Cloud.",
}

export type SkillGroup = {
  label: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    label: "Web",
    items: [
      "Spring Boot",
      "Next.js (Server Actions, App Hosting)",
      "ReactJS",
      "Node.js",
      "FastAPI",
      "RESTful APIs",
    ],
  },
  {
    label: "Cloud",
    items: [
      "GCP (Cloud Run, Cloud Armor, Cloud Build, Artifact Registry, GCS, GCE, Cloud CDN, Cloud Scheduler, Cloud Tasks, Logging)",
      "Firebase (App Hosting, Functions, Firestore, Storage)",
      "AWS (S3, Lambda, SES, ECS)",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL (RLS)", "MongoDB", "Firestore"],
  },
  {
    label: "Mobile",
    items: ["React Native", "Flutter (BLoC, GetX)", "Android (XML, Room, Retrofit)"],
  },
  {
    label: "Architecture",
    items: [
      "Serverless & event-driven systems",
      "Multi-tenant SaaS",
      "Row-Level Security",
    ],
  },
  {
    label: "AI",
    items: [
      "Multi-tenant RAG",
      "LLM integration",
      "MCP (Figma, Next.js, JetBrains)",
      "GitHub Copilot",
      "Claude",
      "OpenRouter",
    ],
  },
  {
    label: "Tooling",
    items: ["Docker", "GitHub Actions", "Bash", "Fastlane", "App Store Connect"],
  },
]
