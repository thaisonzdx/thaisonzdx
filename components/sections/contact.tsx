import { ListRow, ListRows, Section, SectionLabel } from "@/components/section"
import { contact } from "@/lib/content/contact"
import { profile, socials } from "@/lib/content/profile"

const github = socials.find((social) => social.label === "GitHub")
const linkedin = socials.find((social) => social.label === "LinkedIn")

export function ContactSection() {
  return (
    <Section id="contact" aria-labelledby="contact-label">
      <div className="flex flex-col gap-4">
        <SectionLabel id="contact-label">{contact.label}</SectionLabel>
        <p className="max-w-md text-body">{contact.intro}</p>
        <ListRows>
          <ListRow label="Location">
            <span>{profile.location}</span>
          </ListRow>
          {github ? (
            <ListRow label="GitHub">
              <a href={github.href} target="_blank" rel="noreferrer" className="type-link-md text-foreground">
                {github.handle}
              </a>
            </ListRow>
          ) : null}
          {linkedin ? (
            <ListRow label="LinkedIn">
              <a href={linkedin.href} target="_blank" rel="noreferrer" className="type-link-md text-foreground">
                {linkedin.handle}
              </a>
            </ListRow>
          ) : null}
        </ListRows>
      </div>
    </Section>
  )
}
