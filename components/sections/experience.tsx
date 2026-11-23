import { Section } from "@/components/section"
import { experience } from "@/lib/content/experience"

export function ExperienceSection() {
  return (
    <Section id="experience" label="Experience">
      {/* Below md the table collapses into stacked rows. */}
      <table className="w-full text-left text-body max-md:block">
        <thead className="max-md:hidden">
          <tr className="border-b border-hairline-strong">
            <th className="w-44 py-2 pr-6 type-heading-md text-foreground">Period</th>
            <th className="py-2 pr-6 type-heading-md text-foreground">Role</th>
            <th className="w-1/3 py-2 type-heading-md text-foreground">Company</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border max-md:block">
          {experience.map((role) => (
            <tr
              key={`${role.company}-${role.period}`}
              className="align-top max-md:block max-md:py-4 max-md:first:pt-0"
            >
              <td className="py-4 pr-6 type-body-strong text-foreground tabular-nums max-md:block max-md:p-0 max-md:type-caption-md">
                {role.period}
              </td>
              <td className="py-4 pr-6 max-md:block max-md:p-0">
                <span className="block type-body-strong text-foreground">
                  {role.title}
                  {role.current ? (
                    <span className="type-caption-md text-muted-foreground"> · current</span>
                  ) : null}
                </span>
                <span className="block">{role.summary}</span>
              </td>
              <td className="py-4 max-md:block max-md:p-0 max-md:pt-2">
                <span className="block text-foreground">{role.company}</span>
                <span className="block type-caption-md text-muted-foreground">
                  {role.location}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  )
}
