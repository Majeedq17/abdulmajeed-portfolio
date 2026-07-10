import type { SkillGroup } from "@/lib/types";

export function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <article className="card-surface p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-100 text-accent-700 dark:bg-accent-400/10 dark:text-accent-300">
        <group.icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight">{group.title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{group.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-gray-200"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
