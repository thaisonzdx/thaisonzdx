export type Role = {
  title: string
  company: string
  location: string
  period: string
  current: boolean
  summary: string
}

export const experience: Role[] = [
  {
    title: "Software Developer",
    company: "Vikoisoft JSC",
    location: "Hanoi",
    period: "07/2023 – 12/2026",
    current: true,
    summary:
      "Mobile fund-trading app and a multi-tenant medical RAG platform. Also maintain Node.js and Spring microservices.",
  },
  {
    title: "Full Stack Engineer",
    company: "NARTUS PTY LTD",
    location: "Australia · Freelance",
    period: "12/2025 – 05/2026",
    current: false,
    summary:
      "Internal back-office platform on Next.js and Firebase powering HRM workflows and automated email campaigns.",
  },
  {
    title: "Next.js Developer",
    company: "Candidate Mentoring Platform",
    location: "Freelance",
    period: "08/2025 – 12/2025",
    current: false,
    summary: "Mentor-mentee matching, session scheduling and progress tracking.",
  },
  {
    title: "Next.js Developer",
    company: "Data Analytics Platform",
    location: "Freelance",
    period: "12/2024 – 07/2025",
    current: false,
    summary: "Real-time business insights with RBAC and dynamic filtering over REST APIs.",
  },
  {
    title: "Flutter Developer",
    company: "EV Charging Station",
    location: "Freelance · Linux target",
    period: "12/2024 – 03/2025",
    current: false,
    summary: "Embedded Linux kiosk UI with live charging telemetry and touch controls.",
  },
]
