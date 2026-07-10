export function PageHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mb-12 max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-300">
        {eyebrow}
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink dark:text-white sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">{description}</p>
    </header>
  );
}
