import { ArrowRight, Download, Mail } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { MotionDiv } from "@/components/motion";
import { HeroVisual } from "@/components/sections/hero-visual";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section className="overflow-hidden pb-16 pt-20 sm:pb-20 sm:pt-28">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <MotionDiv
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-600 dark:text-accent-300">
            {profile.title}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-ink dark:text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            {profile.summary}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/projects">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/resume/download" variant="secondary" download>
              <Download className="h-4 w-4" />
              Download Resume
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              <Mail className="h-4 w-4" />
              Contact Me
            </ButtonLink>
          </div>
        </MotionDiv>
        <HeroVisual />
      </div>
    </section>
  );
}
