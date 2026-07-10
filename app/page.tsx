import { AboutPreview } from "@/components/sections/about-preview";
import { ContactPreview } from "@/components/sections/contact-preview";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { Hero } from "@/components/sections/hero";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { ResumePreview } from "@/components/sections/resume-preview";
import { SkillsPreview } from "@/components/sections/skills-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <ExperiencePreview />
      <ProjectsPreview />
      <ResumePreview />
      <ContactPreview />
    </>
  );
}
