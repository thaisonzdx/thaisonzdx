export type FocusArea = {
  label: string
  detail: string
}

export const about = {
  focus: [
    {
      label: "Web",
      detail: "Next.js (Server Actions, App Hosting), ReactJS, Node.js, FastAPI, Spring Boot.",
    },
    {
      label: "Mobile",
      detail: "Flutter (BLoC, GetX) and native Android.",
    },
    {
      label: "Cloud",
      detail: "Firebase, Cloud Run, Cloud Tasks, Cloud Scheduler, AWS SES, S3 and Lambda.",
    },
    {
      label: "AI",
      detail: "Multi-tenant RAG, LLM integration and MCP-powered developer tooling.",
    },
  ] satisfies FocusArea[],
}
