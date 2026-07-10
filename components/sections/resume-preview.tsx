import { Download } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";

export function ResumePreview() {
  return (
    <section className="section-y">
      <div className="container-px mx-auto max-w-7xl">
        <div className="card-surface grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <SectionHeading
            eyebrow="Resume"
            title="Download a focused business technology resume."
            description="A clean resume area for recruiters, with a downloadable PDF route and a dedicated resume page for quick scanning."
          />
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href="/resume/download" download>
              <Download className="h-4 w-4" />
              Download Resume
            </ButtonLink>
            <ButtonLink href="/resume" variant="secondary">
              View Resume
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
