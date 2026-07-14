import type { Metadata } from "next";
import { ArrowUpRight, BriefcaseBusiness, ClipboardCheck, GraduationCap, Workflow } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";
import { experiences } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Business analysis experience, education, and project work for Abdulmajeed Alqithmi."
};

const experienceSummary = [
  {
    value: "1",
    label: "Internship Experience",
    detail: "AKG software delivery experience viewed through requirements, testing, and team collaboration.",
    icon: BriefcaseBusiness
  },
  {
    value: "2025",
    label: "Graduate",
    detail: "Computing with Business graduate from Arab Open University.",
    icon: GraduationCap
  },
  {
    value: "1",
    label: "End-to-End HRMS Project",
    detail: "Graduation case study covering stakeholders, workflows, requirements, access, and database design.",
    icon: Workflow
  },
  {
    value: "3",
    label: "BA-Focused Milestones",
    detail: "Internship, degree, and graduation project presented around practical business analysis work.",
    icon: ClipboardCheck
  }
];

export default function ExperiencePage() {
  return (
    <section className="section-y">
      <div className="container-px mx-auto max-w-5xl">
        <PageHeader
          eyebrow="Experience"
          title="Practical experience in requirements, systems thinking, and business-focused delivery."
          description="A concise timeline of my internship, Computing with Business degree, and HR Management System graduation project, presented for business analysis and systems analysis roles."
        />
        <section aria-label="Experience summary" className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experienceSummary.map((item) => (
            <article className="card-surface p-5" key={item.label}>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-100 text-accent-700 dark:bg-accent-400/10 dark:text-accent-300">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-5 text-3xl font-semibold tracking-tight text-ink dark:text-white">
                {item.value}
              </p>
              <h2 className="mt-1 text-sm font-semibold text-gray-900 dark:text-gray-100">
                {item.label}
              </h2>
              <p className="mt-3 text-xs leading-6 text-gray-600 dark:text-gray-300">{item.detail}</p>
            </article>
          ))}
        </section>
        <Timeline items={experiences} />
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/projects/hr-management-system" variant="secondary">
            View HRMS Case Study
            <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink href={siteConfig.resume.downloadPath} variant="ghost" download>
            Download Resume
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
