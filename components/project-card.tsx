import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Pill } from "@/components/pill";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-surface flex h-full flex-col overflow-hidden">
      <div className="border-b border-gray-200 bg-gradient-to-br from-accent-50 via-white to-emerald-50 p-6 dark:border-white/10 dark:from-accent-500/10 dark:via-white/[0.03] dark:to-emerald-400/10">
        <div className="flex aspect-[16/9] items-center justify-center rounded-3xl border border-white/80 bg-white/[0.78] shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
          <div className="w-4/5 space-y-3">
            <div className="h-3 w-1/2 rounded-full bg-accent-300 dark:bg-accent-300/60" />
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 h-24 rounded-2xl bg-gray-100 dark:bg-white/10" />
              <div className="h-24 rounded-2xl bg-emerald-100 dark:bg-emerald-400/15" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="h-8 rounded-xl bg-gray-100 dark:bg-white/10" />
              <div className="h-8 rounded-xl bg-gray-100 dark:bg-white/10" />
              <div className="h-8 rounded-xl bg-accent-100 dark:bg-accent-400/15" />
              <div className="h-8 rounded-xl bg-gray-100 dark:bg-white/10" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-accent-600 dark:text-accent-300">
          {project.category}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h2>
        <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 dark:text-gray-300">
          {project.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </div>
        <ButtonLink href={`/projects/${project.slug}`} className="mt-6 w-fit" variant="secondary">
          View Case Study
          <ArrowUpRight className="h-4 w-4" />
        </ButtonLink>
      </div>
    </article>
  );
}
