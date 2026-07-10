import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="section-y">
      <div className="container-px mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-300">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 text-gray-600 dark:text-gray-300">
          The page you are looking for does not exist or has been moved.
        </p>
        <ButtonLink href="/" className="mt-8">
          Back Home
        </ButtonLink>
      </div>
    </section>
  );
}
