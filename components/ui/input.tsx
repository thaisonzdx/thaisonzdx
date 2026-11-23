import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-sm border border-border bg-muted px-3 py-2 type-body-md text-foreground transition-[color,border-color,background-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:type-caption-md file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:bg-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-surface-card disabled:text-ash aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
