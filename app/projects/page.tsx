import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Featured business analysis, systems analysis, and technology projects."
};

export default function ProjectsPage() {
  return (
    <section className="section-y">
      <div className="container-px mx-auto max-w-6xl">
        <PageHeader
          eyebrow="Projects"
          title="Featured projects with business context, solution thinking, and delivery detail."
          description="Each project page is structured for recruiters and hiring managers: problem, goals, stakeholders, solution, features, architecture, database, technology, lessons, and next steps."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
