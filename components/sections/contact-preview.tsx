import { Mail } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";

export function ContactPreview() {
  return (
    <section className="section-y bg-white/[0.45] dark:bg-white/[0.03]">
      <div className="container-px mx-auto max-w-5xl text-center">
        <SectionHeading
          eyebrow="Contact"
          title="Open to business analyst, systems analyst, and digital transformation roles."
          description="Use the contact page for email, LinkedIn, GitHub, and a professional contact form."
        />
        <ButtonLink href="/contact" className="mt-8">
          <Mail className="h-4 w-4" />
          Contact Me
        </ButtonLink>
      </div>
    </section>
  );
}
