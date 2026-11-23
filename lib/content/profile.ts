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

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
]

export const announcement = {
  label: "See the GDG Cloud Hanoi event photo platform I built",
  href: "https://gdgcloudhanoi.dev/photos",
}
