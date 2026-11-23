export type Project = {
  name: string
  context: string
  summary: string
  stack: string[]
  href?: string
}

export const projects: Project[] = [
  {
    name: "Event Photo Gallery",
    context: "GDG Cloud Hanoi · Community",
    summary:
      "Serverless AI photo platform with real-time attendee face search (MediaPipe BlazeFace embeddings), similarity grouping and edge-cached delivery, plus a ticketing suite with signed QR validation and bulk email.",
    stack: ["Next.js", "Firebase App Hosting", "Cloud Run", "Firestore", "AWS SES"],
    href: "https://gdgcloudhanoi.dev/photos",
  },
  {
    name: "Medicine Manual RAG",
    context: "Vikoisoft · Healthcare",
    summary:
      "Multi-tenant medical RAG platform on fine-tuned open-weights LLMs. PostgreSQL Row-Level Security keeps every clinic's documents isolated.",
    stack: ["ReactJS", "FastAPI", "PostgreSQL RLS", "LLMs"],
  },
  {
    name: "Fund Trading App",
    context: "Vikoisoft · Fintech",
    summary:
      "Mobile trading app with real-time order execution and market data, backed by Node.js and Spring microservices.",
    stack: ["React Native", "NativeWind", "Redux", "React Query"],
  },
  {
    name: "Back-office Platform",
    context: "NARTUS PTY LTD · Freelance",
    summary:
      "HRM workflows and automated marketing email campaigns driven by scheduled and queued jobs.",
    stack: ["Next.js", "Firebase", "AWS SES", "Cloud Scheduler", "Cloud Tasks"],
  },
  {
    name: "EV Charging Kiosk",
    context: "Freelance",
    summary:
      "Touch-screen kiosk for EV charging stations with live telemetry and session status.",
    stack: ["Flutter", "BLoC", "GetX", "Embedded Linux"],
  },
]
