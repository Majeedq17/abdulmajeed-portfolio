import type { LucideIcon } from "lucide-react";

export type SkillGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
};

export type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
};

export type Project = {
  title: string;
  slug: string;
  category: string;
  summary: string;
  technologies: string[];
  details: {
    caseStudy?: {
      projectOverview: string;
      challenge: string;
      objectives: string[];
      myRole: string[];
      solution: string;
      keyFeatures: string[];
      businessImpact: string[];
      challengesAndDecisions: string[];
      lessonsLearned: string[];
      futureEnhancements: string[];
    };
    overview: string;
    businessProblem: string;
    businessGoals: string[];
    stakeholders: string[];
    solution: string;
    features: string[];
    architecture: string;
    database: string;
    screenshotPlaceholders: string[];
    challenges: string[];
    lessonsLearned: string[];
    futureImprovements: string[];
  };
};
