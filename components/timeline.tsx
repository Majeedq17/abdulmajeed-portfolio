import type { TimelineItem } from "@/lib/types";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative space-y-8 before:absolute before:left-5 before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-gray-200 dark:before:bg-white/10">
      {items.map((item) => (
        <article className="relative pl-14" key={`${item.title}-${item.period}`}>
          <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-2xl border border-accent-200 bg-white text-accent-700 shadow-sm dark:border-accent-400/30 dark:bg-[#0b1220] dark:text-accent-300">
            <item.icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="card-surface p-6 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight text-ink dark:text-white">
                  {item.title}
                </h2>
                <p className="mt-1.5 text-sm font-semibold text-accent-600 dark:text-accent-300">
                  {item.organization}
                </p>
              </div>
              <p className="w-fit rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-gray-300">
                {item.period}
              </p>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
              {item.description}
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
              {item.highlights.map((highlight) => (
                <li className="flex gap-3" key={highlight}>
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span
                  className="rounded-full border border-gray-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-gray-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-gray-200"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
