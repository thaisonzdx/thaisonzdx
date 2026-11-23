import { Button } from "@/components/ui/button"
import { Menu } from "@/components/menu"
import { Wordmark } from "@/components/wordmark"
import { navLinks } from "@/lib/content/profile"

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <nav
        aria-label="Primary"
        className="flex h-20 items-center justify-between gap-4 px-6 lg:px-20"
      >
        <a
          href="#top"
          aria-label="thaison.me, back to top"
          className="flex h-11 items-center rounded-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
        >
          <Wordmark aria-hidden />
        </a>
        <div className="flex items-center gap-2 md:gap-8">
          <ul className="hidden items-center gap-4 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex h-11 items-center rounded-sm type-body-strong text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/30"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button render={<a href="#contact" />} nativeButton={false}>
            Contact
          </Button>
          <Menu links={navLinks} />
        </div>
      </nav>
    </header>
  )
}
