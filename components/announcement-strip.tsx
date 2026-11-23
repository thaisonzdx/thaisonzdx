import { announcement } from "@/lib/content/profile"

export function AnnouncementStrip() {
  return (
    <a
      href={announcement.href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center gap-2 border-b border-border bg-muted px-6 py-2.5 text-center type-caption-md text-body outline-none hover:bg-surface-card focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-inset lg:px-20"
    >
      {announcement.label}
      <span aria-hidden className="text-primary">
        →
      </span>
    </a>
  )
}
