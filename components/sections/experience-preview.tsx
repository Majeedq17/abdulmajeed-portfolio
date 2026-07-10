import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/timeline";
import { experiences } from "@/lib/data";

export function ExperiencePreview() {
  return (
    <section className="section-y">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Experience"
            title="A timeline built to grow with your career."
            description="Editable entries for education, academic projects, certifications, internships, and professional roles."
          />
          <ButtonLink href="/experience" variant="secondary">
            View Timeline
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
        <Timeline items={experiences.slice(0, 3)} />
      </div>
    </section>
  );
}
