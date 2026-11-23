import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full resize-none rounded-sm border border-border bg-muted p-3 type-body-md text-foreground transition-[color,border-color,background-color] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:bg-background disabled:cursor-not-allowed disabled:bg-surface-card disabled:text-ash aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
