import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Database, Layers, Monitor, Users } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHeader } from "@/components/page-header";
import { Pill } from "@/components/pill";
import { projects } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import type { Project } from "@/lib/types";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `${siteConfig.url}/projects/${project.slug}`
    }
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const caseStudy = project.details.caseStudy;

  return (
    <article className="section-y">
      <div className="container-px mx-auto max-w-6xl">
        <ButtonLink href="/projects" variant="ghost" className="mb-10">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </ButtonLink>

        <PageHeader
          eyebrow={project.category}
          title={project.title}
          description={project.summary}
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.38fr]">
          {caseStudy ? (
            <CaseStudyContent caseStudy={caseStudy} />
          ) : (
            <div className="space-y-6">
              <ProjectSection title="Overview" content={project.details.overview} />
              <ProjectSection title="Business Problem" content={project.details.businessProblem} />
              <ProjectSection title="Business Goals" items={project.details.businessGoals} />
              <ProjectSection title="Solution" content={project.details.solution} />
              <ProjectSection title="Features" items={project.details.features} />
              <ProjectSection title="Architecture" content={project.details.architecture} icon={Layers} />
              <ProjectSection title="Database" content={project.details.database} icon={Database} />
              <ProjectSection title="Challenges" items={project.details.challenges} />
              <ProjectSection title="Lessons Learned" items={project.details.lessonsLearned} />
              <ProjectSection title="Future Improvements" items={project.details.futureImprovements} />
            </div>
          )}

          <aside className="space-y-6">
            <div className="card-surface p-6">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-accent-600 dark:text-accent-300" />
                <h2 className="text-lg font-semibold">Stakeholders</h2>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.details.stakeholders.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>

            <div className="card-surface p-6">
              <div className="flex items-center gap-3">
                <Monitor className="h-5 w-5 text-accent-600 dark:text-accent-300" />
                <h2 className="text-lg font-semibold">Technologies</h2>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>

            {!caseStudy ? (
              <div className="card-surface p-6">
                <h2 className="text-lg font-semibold">Screenshots</h2>
                <div className="mt-5 space-y-4">
                  {project.details.screenshotLabels.map((label) => (
                    <div
                      className="flex aspect-[16/10] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-center text-sm font-medium text-gray-500 dark:border-white/15 dark:bg-white/[0.04] dark:text-gray-400"
                      key={label}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </article>
  );
}

type CaseStudy = NonNullable<Project["details"]["caseStudy"]>;

function CaseStudyContent({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="space-y-10">
      <CaseStudySection title="Project Overview" content={caseStudy.projectOverview} />
      <CaseStudySection title="The Challenge" content={caseStudy.challenge} emphasis />
      <CaseStudySection title="Objectives" items={caseStudy.objectives} />
      <CaseStudySection title="My Role" items={caseStudy.myRole} emphasis />
      <CaseStudySection title="Solution" content={caseStudy.solution} />
      <CaseStudySection title="Key Features" items={caseStudy.keyFeatures} />
      <CaseStudySection title="Business Impact" items={caseStudy.businessImpact} emphasis />
      <CaseStudySection title="Challenges & Decisions" items={caseStudy.challengesAndDecisions} />
      <CaseStudySection title="Lessons Learned" items={caseStudy.lessonsLearned} />
      <CaseStudySection title="Future Enhancements" items={caseStudy.futureEnhancements} />
    </div>
  );
}

function CaseStudySection({
  title,
  content,
  items,
  emphasis = false
}: {
  title: string;
  content?: string;
  items?: string[];
  emphasis?: boolean;
}) {
  return (
    <section
      className={
        emphasis
          ? "card-surface border-accent-200/70 p-7 sm:p-8 dark:border-accent-400/20"
          : "border-b border-gray-200 pb-10 last:border-b-0 last:pb-0 dark:border-white/10"
      }
    >
      <h2 className={emphasis ? "text-2xl font-semibold tracking-tight" : "text-xl font-semibold tracking-tight"}>
        {title}
      </h2>
      {content ? (
        <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">{content}</p>
      ) : null}
      {items ? (
        <ul className="mt-5 space-y-3 text-base leading-7 text-gray-600 dark:text-gray-300">
          {items.map((item) => (
            <li className="flex gap-3" key={item}>
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function ProjectSection({
  title,
  content,
  items,
  icon: Icon
}: {
  title: string;
  content?: string;
  items?: string[];
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <section className="card-surface p-7 sm:p-8">
      <div className="flex items-center gap-3">
        {Icon ? <Icon className="h-5 w-5 text-accent-600 dark:text-accent-300" /> : null}
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      </div>
      {content ? (
        <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">{content}</p>
      ) : null}
      {items ? (
        <ul className="mt-5 space-y-3 text-base leading-7 text-gray-600 dark:text-gray-300">
          {items.map((item) => (
            <li className="flex gap-3" key={item}>
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
