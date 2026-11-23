import { ListRow, ListRows, Section } from "@/components/section"
import { projects } from "@/lib/content/projects"

export function ProjectsSection() {
  return (
    <Section id="projects" label="Projects">
      <ListRows>
        {projects.map((project) => (
          <ListRow key={project.name} marker="[x]">
            <div className="flex flex-col">
              <h3 className="type-body-strong text-foreground">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="type-link-md text-foreground"
                  >
                    {project.name} →
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <span className="type-caption-md text-muted-foreground">
                {project.context}
              </span>
              <span>{project.summary}</span>
              <span className="type-caption-md text-muted-foreground">
                {project.stack.join(" · ")}
              </span>
            </div>
          </ListRow>
        ))}
      </ListRows>
    </Section>
  )
}
