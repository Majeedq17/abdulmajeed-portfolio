import type { Metadata } from "next";
import {
  BarChart3,
  Blocks,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  FileText,
  GitBranch,
  Handshake,
  Layers,
  LineChart,
  MessagesSquare,
  MonitorCog,
  Network,
  ServerCog,
  ShieldCheck,
  Table2,
  Workflow
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Pill } from "@/components/pill";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Professional Capabilities",
  description:
    "Business analysis, systems analysis, data, technical, and professional capabilities demonstrated through HRMS project work and internship experience."
};

type Capability = {
  title: string;
  description: string;
  demonstratedIn: string[];
  icon: LucideIcon;
};

type TechnicalGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

type SkillsInActionItem = {
  title: string;
  description: string;
  capabilities: string[];
  icon: LucideIcon;
};

const businessAnalysisCapabilities: Capability[] = [
  {
    title: "Requirements Gathering",
    description: "Understanding business needs through stakeholder discussions and structured analysis.",
    demonstratedIn: ["AKG Internship", "HRMS Case Study"],
    icon: MessagesSquare
  },
  {
    title: "Process Analysis",
    description: "Breaking workflows into clear steps so problems, handoffs, and system needs are easier to see.",
    demonstratedIn: ["HRMS Case Study"],
    icon: Workflow
  },
  {
    title: "Stakeholder Communication",
    description: "Clarifying needs, expected behavior, and follow-up points with business and technical participants.",
    demonstratedIn: ["AKG Internship", "HRMS Case Study"],
    icon: Handshake
  },
  {
    title: "Business Documentation",
    description: "Capturing requirements, workflows, decisions, and context in a way teams can act on.",
    demonstratedIn: ["AKG Internship", "HRMS Case Study"],
    icon: FileText
  },
  {
    title: "Functional Requirements",
    description: "Translating business needs into expected system behavior, features, and acceptance direction.",
    demonstratedIn: ["AKG Internship", "HRMS Case Study"],
    icon: CheckCircle2
  }
];

const systemsAnalysisCapabilities: Capability[] = [
  {
    title: "System Thinking",
    description: "Viewing users, processes, permissions, data, and rules as connected parts of one solution.",
    demonstratedIn: ["AKG Internship", "HRMS Case Study"],
    icon: Network
  },
  {
    title: "Database Design",
    description: "Structuring related business data such as employees, departments, roles, requests, and approvals.",
    demonstratedIn: ["HRMS Case Study"],
    icon: Database
  },
  {
    title: "REST API Understanding",
    description: "Understanding how user actions connect to backend endpoints, business logic, and stored data.",
    demonstratedIn: ["AKG Internship", "HRMS Case Study"],
    icon: ServerCog
  },
  {
    title: "Role-Based Access Design",
    description: "Defining which user groups should access each workflow, record, and system action.",
    demonstratedIn: ["HRMS Case Study"],
    icon: ShieldCheck
  },
  {
    title: "Business-to-System Translation",
    description: "Turning business workflows into system features, screens, data structures, and rules.",
    demonstratedIn: ["AKG Internship", "HRMS Case Study"],
    icon: Blocks
  }
];

const dataReportingCapabilities: Capability[] = [
  {
    title: "SQL",
    description: "Using structured data thinking to query, organize, and validate information for business questions.",
    demonstratedIn: ["HRMS Case Study"],
    icon: Database
  },
  {
    title: "Excel",
    description: "Organizing operational information so HR records, requests, and follow-up items are easier to review.",
    demonstratedIn: ["HRMS Case Study"],
    icon: Table2
  },
  {
    title: "Power BI",
    description: "Understanding how dashboards can summarize HR activity, pending actions, and leave balance context.",
    demonstratedIn: ["HRMS Case Study"],
    icon: BarChart3
  },
  {
    title: "Reporting & Data Analysis",
    description: "Connecting data points to business context so reports support follow-up, prioritization, and decisions.",
    demonstratedIn: ["HRMS Case Study"],
    icon: LineChart
  }
];

const technicalGroups: TechnicalGroup[] = [
  {
    title: "Backend",
    icon: ServerCog,
    skills: ["Spring Boot", "REST APIs", "Java"]
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "SQL", "Relational Design"]
  },
  {
    title: "Frontend",
    icon: MonitorCog,
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub"]
  }
];

const professionalCapabilities: Capability[] = [
  {
    title: "Communication",
    description: "Keeping requirements, questions, and decisions understandable for both business and technical audiences.",
    demonstratedIn: ["AKG Internship", "HRMS Case Study"],
    icon: MessagesSquare
  },
  {
    title: "Analytical Thinking",
    description: "Breaking ambiguous needs into clearer workflows, rules, dependencies, and system behaviors.",
    demonstratedIn: ["AKG Internship", "HRMS Case Study"],
    icon: Brain
  },
  {
    title: "Problem Solving",
    description: "Looking beyond symptoms to understand the process issue a technology solution should address.",
    demonstratedIn: ["HRMS Case Study"],
    icon: Workflow
  },
  {
    title: "Collaboration",
    description: "Working with a delivery team by asking clarifying questions, testing behavior, and aligning on expectations.",
    demonstratedIn: ["AKG Internship"],
    icon: Handshake
  },
  {
    title: "Adaptability",
    description: "Moving between business context, functional details, testing support, and technical conversations.",
    demonstratedIn: ["AKG Internship"],
    icon: Layers
  },
  {
    title: "Continuous Learning",
    description: "Building business analysis depth while strengthening the technical fluency needed to work with developers.",
    demonstratedIn: ["AKG Internship", "HRMS Case Study"],
    icon: Code2
  }
];

const skillsInAction: SkillsInActionItem[] = [
  {
    title: "HR Management System",
    description:
      "A graduation case study where HR workflows were translated into requirements, role access, system behavior, and a relational data structure.",
    capabilities: [
      "Requirements Gathering",
      "Process Mapping",
      "Functional Documentation",
      "Database Design",
      "REST APIs",
      "Role-Based Access",
      "Business Analysis",
      "System Analysis"
    ],
    icon: Workflow
  },
  {
    title: "Advance Knowledge Gate",
    description:
      "An internship experience supporting software delivery through requirements discussions, documentation, testing support, and team collaboration.",
    capabilities: [
      "Stakeholder Meetings",
      "Requirements Documentation",
      "Software Testing Support",
      "Developer Collaboration",
      "Business Communication",
      "Requirement Analysis"
    ],
    icon: BriefcaseBusiness
  }
];

export default function SkillsPage() {
  return (
    <section className="section-y">
      <div className="container-px mx-auto max-w-6xl">
        <PageHeader
          eyebrow="Skills"
          title="Professional Capabilities"
          description="A practical overview of the business, analytical, and technical capabilities I have developed through academic projects, internship experience, and continuous learning."
        />

        <div className="space-y-16">
          <CapabilitySection
            title="Business Analysis"
            description="Business Analysis starts with understanding the business problem, the people involved, and the workflow before proposing a technical solution."
            capabilities={businessAnalysisCapabilities}
          />

          <CapabilitySection
            title="Systems Analysis"
            description="Systems Analysis connects business requirements with the structure of a working system: data, roles, interfaces, rules, and technical behavior."
            capabilities={systemsAnalysisCapabilities}
          />

          <CapabilitySection
            title="Data & Reporting"
            description="Data and reporting capabilities help turn operational information into clearer decisions, follow-up, and business visibility."
            capabilities={dataReportingCapabilities}
            compact
          />

          <TechnicalFoundation />

          <CapabilitySection
            title="Professional Skills"
            description="These skills support the day-to-day work of a Business Analyst: asking better questions, aligning people, and keeping delivery grounded in the real business need."
            capabilities={professionalCapabilities}
          />

          <SkillsInAction />
        </div>
      </div>
    </section>
  );
}

function CapabilitySection({
  title,
  description,
  capabilities,
  compact = false
}: {
  title: string;
  description: string;
  capabilities: Capability[];
  compact?: boolean;
}) {
  return (
    <section>
      <SectionHeading title={title} description={description} />
      <div className={`mt-8 grid gap-5 ${compact ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3"}`}>
        {capabilities.map((capability) => (
          <CapabilityCard capability={capability} key={capability.title} />
        ))}
      </div>
    </section>
  );
}

function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <article className="card-surface flex h-full flex-col p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-100 text-accent-700 dark:bg-accent-400/10 dark:text-accent-300">
        <capability.icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight">{capability.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
        {capability.description}
      </p>
      <div className="mt-6 border-t border-gray-200 pt-5 dark:border-white/10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
          Demonstrated in
        </p>
        <ul className="mt-3 space-y-2">
          {capability.demonstratedIn.map((item) => (
            <li className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200" key={item}>
              <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-600 dark:text-accent-300" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function TechnicalFoundation() {
  return (
    <section>
      <SectionHeading
        title="Technical Foundation"
        description="A compact technical base that helps me understand implementation conversations, document system behavior, and communicate clearly with development teams."
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {technicalGroups.map((group) => (
          <article className="card-surface p-6" key={group.title}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-100 text-accent-700 dark:bg-accent-400/10 dark:text-accent-300">
                <group.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsInAction() {
  return (
    <section>
      <SectionHeading
        title="Skills in Action"
        description="The strongest evidence for these capabilities comes from real project and internship contexts, not from a standalone software list."
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {skillsInAction.map((item) => (
          <article className="card-surface p-7 sm:p-8" key={item.title}>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-700 dark:bg-accent-400/10 dark:text-accent-300">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
            </div>
            <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-300">{item.description}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {item.capabilities.map((capability) => (
                <div
                  className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white/60 px-3 py-2 text-sm font-semibold text-gray-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-gray-200"
                  key={capability}
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-600 dark:text-accent-300" aria-hidden="true" />
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
