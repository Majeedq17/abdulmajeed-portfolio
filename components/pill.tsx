export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-gray-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-gray-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-gray-200">
      {children}
    </span>
  );
}
