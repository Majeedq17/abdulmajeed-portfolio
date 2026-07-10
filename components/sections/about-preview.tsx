import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { aboutHighlights, profile } from "@/lib/data";

export function AboutPreview() {
  return (
    <section className="section-y">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1fr]">
          <SectionHeading
            eyebrow="About"
            title="Translating business needs into practical technology outcomes."
            description={profile.longSummary}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <article className="card-surface p-6" key={item.title}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
        <ButtonLink href="/about" className="mt-8 w-fit" variant="secondary">
          More About Me
          <ArrowRight className="h-4 w-4" />
        </ButtonLink>
      </div>
    </section>
  );
}
