"use client";

import { motion } from "framer-motion";
import { BarChart3, FileCheck2, GitBranch, Workflow } from "lucide-react";

const cards = [
  { label: "Requirements", value: "Clear scope", icon: FileCheck2 },
  { label: "Processes", value: "Mapped flows", icon: Workflow },
  { label: "Systems", value: "Aligned design", icon: GitBranch }
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
              <p className="text-sm font-semibold text-ink dark:text-white">Business Systems View</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Analysis dashboard concept</p>
            </div>
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {cards.map((card, index) => (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/[0.05]"
                initial={{ opacity: 0, y: 12 }}
                key={card.label}
                transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
              >
                <card.icon className="h-4 w-4 text-accent-600 dark:text-accent-300" />
                <p className="mt-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                  {card.label}
                </p>
                <p className="mt-1 text-sm font-semibold">{card.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Workflow</p>
                <Workflow className="h-4 w-4 text-emerald-500" />
              </div>
              <div className="mt-5 space-y-3">
                {["Intake", "Analyze", "Design", "Validate"].map((step, index) => (
                  <div className="flex items-center gap-3" key={step}>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-50 text-xs font-semibold text-accent-700 dark:bg-accent-400/10 dark:text-accent-300">
                      {index + 1}
                    </span>
                    <div className="h-2 flex-1 rounded-full bg-gray-100 dark:bg-white/10">
                      <div
                        className="h-2 rounded-full bg-accent-500"
                        style={{ width: `${52 + index * 12}%` }}
                      />
                    </div>
                    <span className="w-14 text-xs font-medium text-gray-500 dark:text-gray-400">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Insights</p>
                <BarChart3 className="h-4 w-4 text-accent-600 dark:text-accent-300" />
              </div>
              <div className="mt-6 flex h-36 items-end gap-3">
                {[42, 68, 54, 82, 73, 88].map((height, index) => (
                  <motion.div
                    animate={{ height: `${height}%` }}
                    className="flex-1 rounded-t-xl bg-gradient-to-t from-accent-600 to-accent-300"
                    initial={{ height: "18%" }}
                    key={height}
                    transition={{ duration: 0.7, delay: 0.28 + index * 0.06 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
