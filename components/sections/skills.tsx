import { Fragment } from "react"

import { ListRow, ListRows, Section } from "@/components/section"
import { focusSkills, skills, type SkillItem } from "@/lib/content/skills"

function SkillList({ items, focus = false }: { items: SkillItem[]; focus?: boolean }) {
  return (
    <span>
      {items.map((item, i) => {
        const name = typeof item === "string" ? item : item.name
        const isFocus = focus || typeof item !== "string"
        return (
          <Fragment key={name}>
            {i > 0 ? " · " : null}
            {isFocus ? (
              <strong className="type-body-strong text-foreground">{name}</strong>
            ) : (
              name
            )}
          </Fragment>
        )
      })}
    </span>
  )
}

export function SkillsSection() {
  return (
    <Section id="skills" label="Skills">
      <ListRows>
        <ListRow label={focusSkills.label} className="mb-2 border-b border-border pb-3">
          <SkillList items={focusSkills.items} focus />
        </ListRow>
        {skills.map((group) => (
          <ListRow key={group.label} label={group.label}>
            <SkillList items={group.items} />
          </ListRow>
        ))}
      </ListRows>
    </Section>
  )
}
