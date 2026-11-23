import { ListRow, ListRows, Section } from "@/components/section"
import { education } from "@/lib/content/education"

export function EducationSection() {
  return (
    <Section id="education" label="Education">
      <ListRows>
        {education.map((field) => (
          <ListRow key={field.label} marker="[x]" label={field.label}>
            <span>{field.value}</span>
          </ListRow>
        ))}
      </ListRows>
    </Section>
  )
}
