import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";
import { experiences } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description: "Editable education, project, and professional timeline."
};

export default function ExperiencePage() {
  return (
    <section className="section-y">
      <div className="container-px mx-auto max-w-5xl">
        <PageHeader
          eyebrow="Experience"
          title="An editable timeline for education, projects, and future roles."
          description="Use this area to add internships, training programs, certificates, capstone work, and professional roles as your experience grows."
        />
        <Timeline items={experiences} />
      </div>
    </section>
  );
}
