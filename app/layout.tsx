import type { ComponentProps, ComponentType } from "react";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { HeartIcon } from "lucide-react";

import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/ui/social";
import { Wordmark } from "@/components/ui/wordmark";
import { profile, socials } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: `${profile.name} (${profile.handle}) · ${profile.role}`,
  description: profile.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      id="top"
      className={cn("h-full antialiased", robotoMono.variable)}
    >
      <body className="flex min-h-full flex-col">
        <div className="mx-auto flex w-full max-w-frame flex-1 flex-col border-border lg:border lg:border-t-0">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

const icons: Record<string, ComponentType<ComponentProps<"svg">>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  X: XIcon,
};

function Header() {
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
        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-4 md:flex">
            {socials.map(({ label, href }) => {
              const Icon = icons[label];
              if (!Icon) return null;
              return (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 items-center rounded-sm text-muted-foreground outline-none transition-colors hover:text-foreground active:text-foreground focus-visible:ring-2 focus-visible:ring-ring/30"
                  >
                    <Icon aria-hidden />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="flex items-center justify-center gap-1 border-t border-border px-6 py-8 type-caption-md text-muted-foreground lg:px-20">
      Made with
      <HeartIcon
        role="img"
        aria-label="love"
        className="size-3 fill-current text-chart-2 animate-heartbeat motion-reduce:animate-none"
      />
      in Hanoi
    </footer>
  );
}
