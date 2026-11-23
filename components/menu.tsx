"use client"

import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Menu({ links }: { links: { label: string; href: string }[] }) {
  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" className="md:hidden" />}
      >
        <MenuIcon />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="px-4 py-2">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-border">
                <SheetClose
                  render={
                    <a
                      href={link.href}
                      className="flex h-11 items-center gap-3 rounded-sm type-body-strong text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
                    />
                  }
                  nativeButton={false}
                >
                  <span aria-hidden className="font-mono">
                    [+]
                  </span>
                  {link.label}
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
