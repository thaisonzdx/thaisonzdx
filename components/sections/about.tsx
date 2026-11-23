import { ListRow, ListRows, Section } from "@/components/section"
import { about } from "@/lib/content/about"

export function AboutSection() {
  return (
    <Section id="about" label="About">
      <ListRows>
        {about.focus.map((area) => (
          <ListRow key={area.label} label={area.label}>
            <span>{area.detail}</span>
          </ListRow>
        ))}
      </ListRows>
    </Section>
  )
}
