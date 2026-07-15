import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  GraduationCap,
  Lightbulb,
  MessagesSquare,
  Network,
  SearchCheck,
  Sparkles,
  Target,
  Workflow
} from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "Professional background and focus areas for Abdulmajeed Alqithmi."
};

const journeySteps = [
  { title: "Computing with Business", icon: GraduationCap },
  { title: "Business Analyst Internship", icon: BriefcaseBusiness },
  { title: "HR Management System Case Study", icon: Workflow },
  { title: "Business Systems Analyst", icon: Target }
];

const approachSteps = [
  { title: "Understand Business", icon: SearchCheck },
  { title: "Gather Requirements", icon: ClipboardCheck },
  { title: "Analyze Processes", icon: Workflow },
  { title: "Design Solutions", icon: Lightbulb },
  { title: "Deliver Business Value", icon: Sparkles }
];

const responsibilities = [
  "Participated in stakeholder and client meetings to understand project context and requirements.",
  "Gathered business requirements and clarified expected system behavior.",
  "Documented functional requirements in a clear, structured format.",
  "Supported software testing by validating implemented features against documented requirements.",
  "Collaborated with developers to support communication between business needs and technical delivery."
];

const keyTakeaways = [
  "Stakeholder communication shapes the quality of requirements.",
  "Clear documentation helps business and development teams stay aligned.",
  "Business needs must be translated carefully into technical work.",
  "Software delivery depends on consistent collaboration between roles."
];

const hrmsDeliverables = [
  "Business Requirements",
  "Functional Requirements",
  "Requirements Documentation",
  "Process Mapping",
  "User Roles",
  "Attendance",
  "Payroll",
  "Leave Management",
  "Notifications",
  "Reporting",
  "Role-Based Access"
];

const workingPrinciples = [
  {
    title: "Business First",
    description: "Technology should always support business objectives.",
    icon: Target,
    tags: ["Requirements", "Stakeholders", "Value"]
  },
  {
    title: "Structured Thinking",
    description: "Break complex problems into clear, manageable pieces before proposing solutions.",
    icon: Network,
    tags: ["Process", "Clarity", "Scope"]
  },
  {
    title: "Clear Communication",
    description:
      "Requirements should be understandable for both stakeholders and technical teams.",
    icon: MessagesSquare,
    tags: ["Documentation", "Alignment", "Feedback"]
  },
  {
    title: "Continuous Improvement",
    description:
      "Every workflow can be refined through analysis, collaboration, and measurable improvements.",
    icon: Workflow,
    tags: ["Workflows", "Testing", "Refinement"]
  }
];

export default function AboutPage() {
  return (
    <section className="section-y">
      <div className="container-px mx-auto max-w-6xl">
        <PageHeader
          eyebrow="About"
          title="Bridging Technology with Business Needs"
          description="My journey, experience, and approach to understanding business problems and translating them into practical technology solutions."
        />

        <div className="space-y-16">
          <section className="card-surface p-8 sm:p-10" aria-labelledby="professional-summary">
            <SectionHeading
              eyebrow="Profile"
              title="Professional Summary"
              description="A focused introduction to my business analysis background, practical experience, and project work."
            />
            <div
              className="mt-8 grid gap-5 text-base leading-8 text-gray-600 dark:text-gray-300 lg:grid-cols-2"
              id="professional-summary"
            >
              <p>
                I am an entry-level Business Analyst with a Computing with Business background and a
                strong interest in requirements gathering, systems analysis, process improvement,
                documentation, and collaboration with technical teams. I focus on understanding the
                business problem first, then shaping clear requirements and practical solutions that
                support real operational needs.
              </p>
              <p>
                My degree helped me connect business thinking with technology, while my internship
                at Advance Knowledge Gate (AKG) gave me practical exposure to meetings,
                documentation, testing, and software delivery. I continued applying that mindset in
                my HR Management System (HRMS) graduation project, translating HR needs into
                structured workflows, user roles, features, and system documentation.
              </p>
            </div>
          </section>

          <section aria-labelledby="my-journey">
            <SectionHeading
              eyebrow="Journey"
              title="My Journey"
              description="A clear path from academic foundation to internship experience, applied case study work, and the business analysis direction I am building toward."
            />
            <div
              className="mt-8 grid gap-4 lg:grid-cols-4"
              id="my-journey"
            >
              {journeySteps.map((step, index) => (
                <article className="card-surface relative p-6" key={step.title}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-100 text-accent-700 dark:bg-accent-400/10 dark:text-accent-300">
                    <step.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-sm font-semibold text-ink dark:text-white">
                    {step.title}
                  </p>
                  {index < journeySteps.length - 1 ? (
                    <div className="mt-5 flex justify-center text-accent-500 lg:absolute lg:-right-5 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2">
                      <ArrowDown className="h-4 w-4 lg:hidden" aria-hidden="true" />
                      <ArrowRight className="hidden h-4 w-4 lg:block" aria-hidden="true" />
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section className="card-surface p-8 sm:p-10" aria-labelledby="business-approach">
            <SectionHeading
              eyebrow="Approach"
              title="How I Approach a Business Problem"
              description="My thinking starts with context, then moves through requirements, processes, solution design, and business value."
            />
            <div
              className="relative mt-10 grid gap-5 lg:grid-cols-5"
              id="business-approach"
            >
              <div className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-gray-200 lg:block dark:bg-white/10" />
              {approachSteps.map((step, index) => (
                <article className="relative rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.04]" key={step.title}>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent-200 bg-accent-50 text-accent-700 dark:border-accent-400/30 dark:bg-accent-400/10 dark:text-accent-300">
                    <step.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-ink dark:text-white">
                    {step.title}
                  </p>
                  {index < approachSteps.length - 1 ? (
                    <ArrowDown className="mx-auto mt-4 h-4 w-4 text-accent-500 lg:hidden" aria-hidden="true" />
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="card-surface p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-700 dark:bg-accent-400/10 dark:text-accent-300">
                <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-300">
                Experience Highlights
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink dark:text-white">
                Advance Knowledge Gate (AKG)
              </h2>
              <p className="mt-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
                Business Analyst Intern
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                January 2025 - May 2025
              </p>
              <h3 className="mt-7 text-sm font-semibold text-ink dark:text-white">
                Responsibilities
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {responsibilities.map((responsibility) => (
                  <li className="flex gap-3" key={responsibility}>
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 rounded-2xl border border-accent-200/70 bg-accent-50/70 p-5 dark:border-accent-300/20 dark:bg-accent-400/10">
                <h3 className="text-sm font-semibold text-accent-700 dark:text-accent-200">
                  Key Takeaways
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {keyTakeaways.map((takeaway) => (
                    <li className="flex gap-3" key={takeaway}>
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-600 dark:text-accent-300" aria-hidden="true" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="card-surface p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-700 dark:bg-accent-400/10 dark:text-accent-300">
                <FileCheck2 className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-300">
                Case Study
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink dark:text-white">
                HR Management System (HRMS)
              </h2>
              <h3 className="mt-6 text-sm font-semibold text-ink dark:text-white">
                Business Analysis Deliverables
              </h3>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {hrmsDeliverables.map((deliverable) => (
                  <div
                    className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white/70 px-3 py-2 text-xs font-semibold text-gray-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-200"
                    key={deliverable}
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent-600 dark:text-accent-300" aria-hidden="true" />
                    <span>{deliverable}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-gray-600 dark:text-gray-300">
                The project translated business needs into a complete HR Management System through
                analysis, requirements documentation, workflow definition, user access planning, and
                structured system design.
              </p>
              <ButtonLink href="/projects/hr-management-system" className="mt-7 w-fit" variant="secondary">
                View Case Study
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </article>
          </section>

          <section aria-labelledby="working-principles">
            <SectionHeading
              eyebrow="Principles"
              title="Working Principles"
              description="The habits I bring to business analysis work, from framing the problem to communicating the solution."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" id="working-principles">
              {workingPrinciples.map((principle) => (
                <article className="card-surface p-6" key={principle.title}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-100 text-accent-700 dark:bg-accent-400/10 dark:text-accent-300">
                    <principle.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-base font-semibold text-ink dark:text-white">
                    {principle.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {principle.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {principle.tags.map((tag) => (
                      <span
                        className="rounded-full border border-gray-200 bg-white/70 px-2.5 py-1 text-[11px] font-semibold text-gray-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-gray-300"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="card-surface p-8 sm:p-10" aria-labelledby="why-business-analysis">
            <SectionHeading
              eyebrow="Perspective"
              title="Why Business Analysis?"
              description="I enjoy Business Analysis because it sits at the point where people, processes, business goals, and technology have to make sense together. Before thinking about software, I want to understand what problem the business is trying to solve, who is affected, how the current process works, and what a better outcome should look like. That mindset influences every project I build: technology matters, but it should come after a clear understanding of the business need."
            />
          </section>
        </div>
      </div>
    </section>
  );
}
