import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

const WORDMARK = [
  " █  █       ▀",
  "▀█▀ █▀█ ▀▀█ █ █▀▀ █▀█ █▀█   █▀█▀█ █▀█",
  " █  █ █ █▀█ █ ▀▀█ █ █ █ █   █ █ █ █▀▀",
  " ▀▀ ▀ ▀ ▀▀▀ ▀ ▀▀▀ ▀▀▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀▀▀",
].join("\n")

function Wordmark({
  size = "sm",
  className,
  ...props
}: ComponentProps<"pre"> & { size?: "sm" | "lg" }) {
  return (
    <pre
      role="img"
      aria-label="thaison.me"
      className={cn(
        "select-none",
        size === "sm" ? "type-wordmark" : "type-wordmark-lg",
        className
      )}
      {...props}
    >
      {WORDMARK}
    </pre>
  )
}

export { Wordmark }
