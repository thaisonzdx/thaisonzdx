import { profile, socials } from "@/lib/content/profile"

async function CopyrightYear() {
  "use cache"
  return <>{new Date().getFullYear()}</>
}

export function Footer() {
  return (
    <footer className="flex flex-col border-t border-border sm:flex-row">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center border-t border-border py-8 text-center text-body outline-none transition-colors first:border-t-0 hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-inset sm:border-t-0 sm:border-l sm:first:border-l-0"
        >
          {social.label}
        </a>
      ))}
    </footer>
  )
}

export function Legal() {
  return (
    <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-2 px-6 type-caption-md text-muted-foreground">
      <p>
        ©<CopyrightYear /> {profile.handle}
      </p>
      <p>{profile.location}</p>
      <a href="#top" className="underline underline-offset-4 hover:text-foreground">
        Back to top ↑
      </a>
    </div>
  )
}
