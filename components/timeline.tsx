import type { TimelineItem } from "@/lib/types";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative space-y-6 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gray-200 dark:before:bg-white/10">
      {items.map((item) => (
        <article className="relative pl-12" key={`${item.title}-${item.period}`}>
          <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-accent-200 bg-white shadow-sm dark:border-accent-400/30 dark:bg-[#0b1220]">
            <span className="h-2.5 w-2.5 rounded-full bg-accent-500" />
          </div>
          <div className="card-surface p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">{item.title}</h2>
                <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-300">
                  {item.organization}
                </p>
              </div>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">{item.period}</p>
            </div>
            <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-300">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
