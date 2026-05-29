"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNavigation } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/*
  Sticky responsive navbar.
  Desktop shows horizontal links; mobile uses a simple slide-down menu.
*/
export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-sm dark:bg-white dark:text-slate-950">
            BC
          </div>

          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight text-slate-950 dark:text-white">
              Bankruptcy Control
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Creditor-side case management
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {mainNavigation.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition hover:text-blue-600 dark:hover:text-blue-400",
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-600 dark:text-slate-300"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact" variant="ghost">
            Contact
          </Button>
          <Button href="/contact">Request a Demo</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 lg:hidden dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="text-xl">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 shadow-lg lg:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {mainNavigation.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium transition",
                    isActive
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-4 grid gap-3">
              <Button href="/contact" variant="secondary">
                Contact
              </Button>
              <Button href="/contact">Request a Demo</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}