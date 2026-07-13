import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";

const socialItems = [
  { label: "Email", href: siteConfig.links.email, icon: Mail },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: Linkedin }
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-10 dark:border-white/10">
      <div className="container-px mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Business Analyst | Systems Analyst
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {navItems.slice(0, 5).map((item) => (
            <Link
              className="text-sm text-gray-500 transition hover:text-accent-600 dark:text-gray-400 dark:hover:text-accent-300"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {socialItems.map((item) => (
            <a
              aria-label={item.label}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/70 text-gray-600 transition hover:border-accent-300 hover:text-accent-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-gray-300 dark:hover:text-accent-300"
              href={item.href}
              key={item.label}
              rel="noreferrer"
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            >
              <item.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
