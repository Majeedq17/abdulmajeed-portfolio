import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHeader } from "@/components/page-header";
import { resumeSections } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume",
  description: "Downloadable resume and professional summary."
};

export default function ResumePage() {
  return (
    <section className="section-y">
      <div className="container-px mx-auto max-w-5xl">
        <PageHeader
          eyebrow="Resume"
          title="A clear summary for business analysis and systems analysis roles."
          description="The download button serves a clean placeholder resume PDF. Replace the content when your final resume is ready."
        />
        <div className="card-surface p-7 sm:p-10">
          <div className="flex flex-col gap-5 border-b border-gray-200 pb-8 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-700 dark:bg-accent-400/10 dark:text-accent-300">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Abdulmajeed Alqithmi</h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Business Analyst | Systems Analyst
                </p>
              </div>
            </div>
            <ButtonLink href="/resume/download" download>
              <Download className="h-4 w-4" />
              Download Resume
            </ButtonLink>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {resumeSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-600 dark:text-accent-300">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {section.items.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
