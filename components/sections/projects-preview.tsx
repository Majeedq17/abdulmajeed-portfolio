import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function ProjectsPreview() {
  return (
    <section className="section-y bg-white/[0.45] dark:bg-white/[0.03]">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Case studies with business context and systems thinking."
            description="The HR Management System project is structured as a full case study, with placeholders ready for screenshots and implementation artifacts."
          />
          <ButtonLink href="/projects" variant="secondary">
            All Projects
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
