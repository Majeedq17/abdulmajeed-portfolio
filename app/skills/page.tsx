import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SkillCard } from "@/components/skill-card";
import { skillGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills",
  description: "Business, technical, and soft skills for analysis and technology roles."
};

export default function SkillsPage() {
  return (
    <section className="section-y">
      <div className="container-px mx-auto max-w-6xl">
        <PageHeader
          eyebrow="Skills"
          title="A balanced toolkit for business analysis and systems work."
          description="The portfolio is organized around the skills recruiters expect from an entry-level Business Analyst, Systems Analyst, and IT Business Analyst."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillCard key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
