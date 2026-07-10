import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = React.ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
};

export function ButtonLink({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition",
        variant === "primary" &&
          "bg-accent-600 text-white shadow-glow hover:bg-accent-700 dark:bg-accent-500 dark:hover:bg-accent-400",
        variant === "secondary" &&
          "border border-gray-200 bg-white/80 text-gray-800 shadow-sm hover:border-accent-300 hover:text-accent-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-gray-100 dark:hover:border-accent-300",
        variant === "ghost" &&
          "text-gray-600 hover:bg-gray-100 hover:text-ink dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
