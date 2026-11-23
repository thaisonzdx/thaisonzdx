import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Section, TuiMockup } from "@/components/section"
import { Wordmark } from "@/components/wordmark"
import { hero } from "@/lib/content/hero"

export function HeroSection() {
  return (
    <>
      <Section variant="hero" aria-labelledby="hero-title" className="items-start">
        <Badge>{hero.badge}</Badge>
        <h1 id="hero-title" className="type-display-xl text-foreground">
          {hero.headline}
        </h1>
        <p className="max-w-prose text-body">{hero.intro}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button render={<a href={hero.primaryCta.href} />} nativeButton={false}>
            {hero.primaryCta.label}
          </Button>
          <Button
            variant="outline"
            render={
              <a href={hero.secondaryCta.href} target="_blank" rel="noreferrer" />
            }
            nativeButton={false}
          >
            {hero.secondaryCta.label} →
          </Button>
        </div>
      </Section>

      <TuiMockup className="items-center">
        <Wordmark size="lg" className="text-foreground" />
        <div className="flex w-full max-w-160 flex-col gap-3">
          <div className="flex items-center gap-3 rounded-sm bg-card px-3 py-2">
            <span aria-hidden className="text-ash">
              │
            </span>
            <span className="text-ash">$</span>
            <span>{hero.prompt}</span>
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 px-3">
            {hero.whoami.map((row) => (
              <div key={row.key} className="contents">
                <dt className="text-muted-foreground">{row.key}</dt>
                <dd className="min-w-0">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <p
          aria-hidden
          className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-ash"
        >
          {hero.hints.map((hint) => (
            <span key={hint.key}>
              <span className="text-foreground">{hint.key}</span> {hint.label}
            </span>
          ))}
        </p>
      </TuiMockup>
    </>
  )
}
