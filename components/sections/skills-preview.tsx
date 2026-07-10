import { SkillCard } from "@/components/skill-card";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/data";

export function SkillsPreview() {
  return (
    <section className="section-y bg-white/[0.45] dark:bg-white/[0.03]">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Business, technical, and interpersonal skills in one toolkit."
          description="A focused set of capabilities for gathering requirements, understanding systems, improving processes, and communicating clearly with stakeholders."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillCard group={group} key={group.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
