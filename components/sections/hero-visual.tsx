"use client";

import { motion } from "framer-motion";
import type { ComponentType, ReactNode } from "react";
import {
  BriefcaseBusiness,
  ClipboardCheck,
  FileCheck2,
  FileText,
  GraduationCap,
  Network,
  PenLine,
  SearchCheck,
  Settings2,
  Workflow
} from "lucide-react";

const analysisFocus = [
  { label: "Requirements Gathering", width: "88%" },
  { label: "Process Analysis", width: "82%" },
  { label: "Systems Thinking", width: "78%" },
  { label: "Documentation", width: "86%" }
];

const careerOverview = [
  { label: "Computing with Business", icon: GraduationCap },
  { label: "Business Analyst Internship", icon: BriefcaseBusiness },
  { label: "Requirements Documentation", icon: FileText },
  { label: "HRMS Case Study", icon: ClipboardCheck }
];

const workflowSteps = [
  { label: "Gather", icon: SearchCheck },
  { label: "Analyze", icon: Network },
  { label: "Design", icon: PenLine },
  { label: "Validate", icon: FileCheck2 }
];

const currentFocus = [
  "Business Analysis",
  "Systems Analysis",
  "Process Improvement",
  "Digital Solutions"
];

export function HeroVisual() {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="relative"
      initial={{ opacity: 0, scale: 0.98, y: 24 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
    >
      <div className="card-surface relative overflow-hidden p-5 sm:p-6">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-accent-500/15 to-transparent" />
        <div className="relative rounded-[24px] border border-white/70 bg-white/[0.78] p-5 shadow-sm dark:border-white/10 dark:bg-[#101827]/[0.88]">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-white/10">
            <div>
              <p className="text-sm font-semibold text-ink dark:text-white">
                Business Analyst Workspace
              </p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Personal analysis dashboard
              </p>
            </div>
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Widget title="Analysis Focus" icon={Settings2} delay={0.2}>
              <div className="mt-4 space-y-3">
                {analysisFocus.map((item, index) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-medium text-gray-600 dark:text-gray-300">
                        {item.label}
                      </p>
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-500/70" />
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100 dark:bg-white/10">
                      <motion.div
                        animate={{ width: item.width }}
                        className="h-full rounded-full bg-gradient-to-r from-accent-600 to-accent-300"
                        initial={{ width: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.36 + index * 0.08 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Widget>

            <Widget title="Career Overview" icon={BriefcaseBusiness} delay={0.28}>
              <div className="mt-4 space-y-2.5">
                {careerOverview.map((item) => (
                  <div className="flex items-center gap-3" key={item.label}>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-700 dark:bg-accent-400/10 dark:text-accent-300">
                      <item.icon className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-300">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </Widget>

            <Widget title="Analysis Workflow" icon={Workflow} delay={0.36}>
              <div className="relative mt-5 grid grid-cols-4 gap-2">
                <div className="absolute left-[12.5%] right-[12.5%] top-3.5 h-px bg-gray-200 dark:bg-white/10" />
                <motion.div
                  animate={{ scaleX: 1 }}
                  className="absolute left-[12.5%] right-[12.5%] top-3.5 h-px origin-left bg-accent-500"
                  initial={{ scaleX: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.52 }}
                />
                {workflowSteps.map((step, index) => (
                  <div className="relative flex flex-col items-center text-center" key={step.label}>
                    <motion.span
                      animate={{ opacity: 1, y: 0 }}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-accent-200 bg-white text-[11px] font-semibold text-accent-700 shadow-sm dark:border-accent-400/30 dark:bg-[#101827] dark:text-accent-300"
                      initial={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.35, delay: 0.46 + index * 0.08 }}
                    >
                      {index + 1}
                    </motion.span>
                    <step.icon className="mt-3 h-3.5 w-3.5 text-accent-600 dark:text-accent-300" />
                    <p className="mt-1.5 text-[11px] font-medium text-gray-500 dark:text-gray-400">
                      {step.label}
                    </p>
                  </div>
                ))}
              </div>
            </Widget>

            <Widget title="Current Focus" icon={FileCheck2} delay={0.44}>
              <div className="mt-4 flex flex-wrap gap-2">
                {currentFocus.map((item, index) => (
                  <motion.span
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-full border border-accent-200/80 bg-accent-50 px-3 py-1.5 text-[11px] font-semibold text-accent-700 dark:border-accent-300/20 dark:bg-accent-400/10 dark:text-accent-200"
                    initial={{ opacity: 0, y: 8 }}
                    key={item}
                    transition={{ duration: 0.35, delay: 0.54 + index * 0.06 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </Widget>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

type WidgetProps = {
  children: ReactNode;
  delay: number;
  icon: ComponentType<{ className?: string }>;
  title: string;
};

function Widget({ children, delay, icon: Icon, title }: WidgetProps) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="min-h-[145px] rounded-2xl border border-gray-200 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-accent-300/30"
      initial={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">{title}</p>
        <Icon className="h-4 w-4 text-accent-600 dark:text-accent-300" />
      </div>
      {children}
    </motion.div>
  );
}
