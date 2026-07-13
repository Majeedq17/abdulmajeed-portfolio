import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { contactLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Abdulmajeed Alqithmi for business analyst and systems analyst roles."
};

export default function ContactPage() {
  return (
    <section className="section-y">
      <div className="container-px mx-auto max-w-6xl">
        <PageHeader
          eyebrow="Contact"
          title="Let's talk about business analysis, systems, and technology roles."
          description="Use the contact form or reach out through email or LinkedIn."
        />
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr]">
          <div className="card-surface p-7">
            <h2 className="text-xl font-semibold">Contact Details</h2>
            <div className="mt-6 space-y-4">
              {contactLinks.map((link) => {
                const content = (
                  <>
                    <link.icon className="h-5 w-5 text-accent-600 dark:text-accent-300" />
                    {link.label}
                  </>
                );
                const className =
                  "flex items-center gap-4 rounded-2xl border border-gray-200 p-4 text-sm font-medium text-gray-700 transition hover:border-accent-300 hover:bg-accent-50 dark:border-white/10 dark:text-gray-200 dark:hover:border-accent-400/50 dark:hover:bg-accent-400/10";

                return "href" in link ? (
                  <a
                    className={className}
                    href={link.href}
                    key={link.label}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={className} key={link.label}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
