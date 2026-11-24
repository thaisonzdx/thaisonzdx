import { ListRow, ListRows, Section } from "@/components/ui/section";
import { announcement, hero, skills } from "@/lib/portfolio";

export default function Home() {
  return (
    <>
      <AnnouncementStrip />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <SkillsSection />
      </main>
    </>
  );
}

function AnnouncementStrip() {
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
  );
}

function HeroSection() {
  return (
    <Section variant="hero" aria-labelledby="hero-title" className="items-start">
      <h1 id="hero-title" className="type-display-xl text-foreground">
        {hero.greeting}
      </h1>
      <p className="max-w-prose text-body">{hero.intro}</p>
    </Section>
  );
}

function SkillsSection() {
  return (
    <Section id="skills" label="Skills">
      <ListRows>
        {skills.map((group) => (
          <ListRow key={group.label} label={group.label}>
            <span>{group.items.join(" · ")}</span>
          </ListRow>
        ))}
      </ListRows>
    </Section>
  );
}
