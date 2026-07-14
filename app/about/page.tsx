import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { aboutHighlights, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Professional background and focus areas for Abdulmajeed Alqithmi."
};

export default function AboutPage() {
  return (
    <section className="section-y">
      <div className="container-px mx-auto max-w-6xl">
        <PageHeader
          eyebrow="About"
          title="A business-minded technology graduate focused on useful systems."
          description={profile.longSummary}
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.82fr]">
          <div className="card-surface p-8 sm:p-10">
            <SectionHeading
              eyebrow="Profile"
              title="Professional Summary"
              description="A focused overview of my business analysis interests, technical foundation, and working style."
            />
            <div className="mt-8 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              <p>
                I recently graduated with a Bachelor&apos;s degree in Computing with Business
                (Information Technology), where I developed a practical understanding of both
                business operations and technical systems.
              </p>
              <p>
                My work is centered on understanding business needs, translating them into clear
                requirements, documenting workflows, and helping teams design solutions that are
                useful, measurable, and maintainable.
              </p>
              <p>
                I am especially interested in roles where analysis, process improvement, systems
                thinking, and stakeholder communication come together to create better digital
                services and smarter operations.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {aboutHighlights.map((item) => (
              <div className="card-surface p-6" key={item.title}>
                <p className="text-sm font-semibold text-accent-600 dark:text-accent-300">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
