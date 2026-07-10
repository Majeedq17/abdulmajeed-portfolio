"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/[0.72] backdrop-blur-xl dark:border-white/10 dark:bg-[#090e18]/[0.72]">
      <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link
          className="focus-ring rounded-full text-sm font-semibold tracking-tight text-ink dark:text-white"
          href="/"
        >
          Abdulmajeed Alqithmi
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-accent-600 text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-100 hover:text-ink dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-700 shadow-sm transition hover:border-accent-300 lg:hidden dark:border-white/10 dark:bg-white/[0.06] dark:text-gray-200"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="container-px mx-auto max-w-7xl pb-4 lg:hidden">
          <div className="card-surface grid gap-1 p-2">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                    active
                      ? "bg-accent-600 text-white"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10"
                  }`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
