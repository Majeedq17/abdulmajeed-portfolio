import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Network,
  Sparkles,
  Workflow
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { MotionDiv } from "@/components/motion";
import { Pill } from "@/components/pill";
import { SectionHeading } from "@/components/section-heading";

type CapabilityPreview = {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
};

const capabilityPreviews: CapabilityPreview[] = [
  {
    title: "Business Analysis",
    description: "Understanding business needs before proposing solutions.",
    tags: ["Requirements Gathering", "Process Analysis", "Documentation"],
    icon: BriefcaseBusiness
  },
  {
    title: "Systems Analysis",
    description: "Translating business requirements into structured system design.",
    tags: ["System Thinking", "REST APIs", "Database Design"],
    icon: Network
  },
  {
    title: "Data & Reporting",
    description: "Using data to support operational and business decisions.",
    tags: ["SQL", "Power BI", "Excel"],
    icon: BarChart3
  },
  {
    title: "Professional Skills",
    description: "Collaborating effectively with stakeholders and technical teams.",
    tags: ["Communication", "Critical Thinking", "Problem Solving"],
    icon: Workflow
  }
];

export function SkillsPreview() {
  return (
    <section className="section-y bg-white/[0.45] dark:bg-white/[0.03]">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Professional Capabilities"
          description="A quick overview of the capabilities I apply through business analysis, systems thinking, and practical project experience."
        />

        <MotionDiv
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-10 max-w-5xl"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="card-surface relative overflow-hidden p-5 sm:p-6">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-accent-500/10 to-transparent" />
            <div className="relative rounded-[24px] border border-white/70 bg-white/[0.78] p-4 shadow-sm dark:border-white/10 dark:bg-[#101827]/[0.88] sm:p-5">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-white/10">
                <div>
                  <p className="text-sm font-semibold text-ink dark:text-white">
                    Capability Dashboard
                  </p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Business value snapshot
                  </p>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {capabilityPreviews.map((capability, index) => (
                  <CapabilityWidget capability={capability} index={index} key={capability.title} />
                ))}
              </div>

              <div className="mt-5 border-t border-gray-200 pt-5 dark:border-white/10">
                <div className="grid gap-4 rounded-2xl border border-accent-200/70 bg-accent-50/70 p-4 dark:border-accent-300/20 dark:bg-accent-400/10 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white text-accent-700 shadow-sm dark:bg-white/10 dark:text-accent-300">
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="text-sm leading-6 text-gray-700 dark:text-gray-200">
                      Explore the complete Professional Capabilities page to see how these capabilities were demonstrated through my HRMS case study and Business Analyst internship.
                    </p>
                  </div>
                  <ButtonLink
                    href="/skills"
                    variant="secondary"
                    className="w-full whitespace-normal px-4 text-center leading-5 sm:w-fit sm:whitespace-nowrap"
                  >
                    <span className="min-w-0">View Professional Capabilities</span>
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}

function CapabilityWidget({
  capability,
  index
}: {
  capability: CapabilityPreview;
  index: number;
}) {
  return (
    <MotionDiv
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-gray-200 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-accent-300/30"
      initial={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 + index * 0.06 }}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-accent-50 text-accent-700 dark:bg-accent-400/10 dark:text-accent-300">
          <capability.icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-ink dark:text-white">{capability.title}</h3>
          <p className="mt-2 text-xs leading-6 text-gray-600 dark:text-gray-300">
            {capability.description}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {capability.tags.map((tag) => (
          <Pill key={tag}>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3 w-3 text-accent-600 dark:text-accent-300" aria-hidden="true" />
              {tag}
            </span>
          </Pill>
        ))}
      </div>
    </MotionDiv>
  );
}
