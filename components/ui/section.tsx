import type { ComponentProps, ReactNode } from "react"

import { cn } from "@/lib/utils"

// One band of the page frame: hairline on top, padding inside, gutter shared with the nav.
function Section({
  id,
  label,
  variant = "default",
  className,
  children,
  ...props
}: ComponentProps<"section"> & {
  label?: ReactNode
  variant?: "default" | "hero"
}) {
  const labelId = label && id ? `${id}-label` : undefined

  return (
    <section
      id={id}
      aria-labelledby={labelId}
      className={cn(
        "flex scroll-mt-20 flex-col gap-4 border-t border-border px-6 first:border-t-0 lg:px-20",
        variant === "hero" ? "py-16 lg:py-24" : "py-12 lg:py-16",
        className
      )}
      {...props}
    >
      {label ? <SectionLabel id={labelId}>{label}</SectionLabel> : null}
      {children}
    </section>
  )
}

function SectionLabel({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2 className={cn("type-heading-md text-foreground", className)} {...props} />
  )
}

// Rows share a grid so labels line up as a column (two-column table from md).
function ListRows({ className, ...props }: ComponentProps<"ul">) {
  return (
    <ul
      className={cn(
        "grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 md:grid-cols-[auto_auto_minmax(0,1fr)]",
        className
      )}
      {...props}
    />
  )
}

function ListRow({
  marker = "[+]",
  label,
  className,
  children,
  ...props
}: ComponentProps<"li"> & { marker?: string; label?: ReactNode }) {
  return (
    <li
      className={cn("col-span-full grid grid-cols-subgrid py-2 text-body", className)}
      {...props}
    >
      <span aria-hidden className="font-mono text-foreground">
        {marker}
      </span>
      <div className="flex min-w-0 flex-col md:contents">
        {label ? (
          <span className="type-body-strong text-foreground md:pr-3">{label}</span>
        ) : null}
        <div className={cn("min-w-0", !label && "md:col-span-2")}>{children}</div>
      </div>
    </li>
  )
}

// Full-bleed band of figures. Value renders above its label via flex-col-reverse.
function StatBand({
  stats,
  className,
  ...props
}: ComponentProps<"dl"> & { stats: { value: string; label: string }[] }) {
  return (
    <dl
      className={cn(
        "grid grid-cols-1 divide-y divide-border border-t border-border md:grid-cols-3 md:divide-x md:divide-y-0",
        className
      )}
      {...props}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse gap-1 p-5 md:p-8">
          <dt className="text-body">{stat.label}</dt>
          <dd className="type-display-stat text-foreground">{stat.value}</dd>
        </div>
      ))}
    </dl>
  )
}

// The page's only dark band. Full-bleed inside the frame, same gutter as a section.
function TuiMockup({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "dark flex flex-col gap-6 bg-background px-6 py-12 type-code-md text-foreground lg:px-20 lg:py-16",
        className
      )}
      {...props}
    />
  )
}

export { ListRow, ListRows, Section, SectionLabel, StatBand, TuiMockup }
